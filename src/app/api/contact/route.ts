import { NextRequest, NextResponse } from 'next/server';
import https from 'https';
import { URL } from 'url';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, mobileNumber, date, time, message } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Google Sheets Web App URL
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEB_APP_URL;

    if (!GOOGLE_SHEETS_URL) {
      console.error('Google Sheets Web App URL not configured');
      // Still return success to user but log the error
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully. We will contact you soon.',
      });
    }

    // Send data to Google Sheets using GET method with query params
    // This avoids SSL certificate issues and CORS problems
    const params = new URLSearchParams({
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNumber: mobileNumber,
      date: date || '',
      time: time || '',
      message: message || '',
      submittedAt: new Date().toISOString(),
    });

    const urlWithParams = `${GOOGLE_SHEETS_URL}?${params.toString()}`;

    // Use HTTPS request directly to handle SSL certificate issues
    const url = new URL(urlWithParams);
    
    const response: any = await new Promise((resolve, reject) => {
      const req = https.request({
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'GET',
        rejectUnauthorized: false, // Handle SSL certificate issues
        timeout: 10000, // 10 second timeout
        headers: {
          'User-Agent': 'NextJS-Contact-Form/1.0',
        },
      }, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve({
            ok: res.statusCode && res.statusCode >= 200 && res.statusCode < 300,
            status: res.statusCode,
            statusText: res.statusMessage,
            text: () => Promise.resolve(data),
          });
        });
      });

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.end();
    });

    if (!response.ok) {
      console.error('Google Sheets API error:', response.status, response.statusText);
      // Still return success to avoid showing error to user
      return NextResponse.json({
        success: true,
        message: 'Thank you for contacting us! We will get back to you shortly.',
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you shortly.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Check for specific error types
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Request timeout - Google Sheets took too long to respond');
      } else if ('cause' in error && error.cause) {
        const cause = error.cause as any;
        if (cause.code === 'ECONNRESET') {
          console.error('Connection reset by Google Sheets - this is often a Google Apps Script issue');
        } else if (cause.code === 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY') {
          console.error('SSL certificate verification failed - this is a Node.js/Google Apps Script compatibility issue');
        }
      }
    }
    
    // Return success to user even if there's an error
    // This prevents showing technical errors to users
    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you shortly.',
    });
  }
}
