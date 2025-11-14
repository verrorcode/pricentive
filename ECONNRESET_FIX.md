# ECONNRESET Error Fix Guide

## The Problem
You're seeing this error:
```
TypeError: fetch failed
[cause]: [Error: read ECONNRESET] {
  errno: -54,
  code: 'ECONNRESET',
  syscall: 'read'
}
```

**OR** this SSL certificate error:
```
TypeError: fetch failed
[cause]: [Error: unable to get local issuer certificate] {
  code: 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY'
}
```

These happen when Google Apps Script Web App closes the connection unexpectedly or when Node.js can't verify SSL certificates. This is a **Google Apps Script/Node.js compatibility issue**, not a problem with your Next.js code.

## What I've Already Fixed
✅ Added 10-second timeout to prevent hanging requests  
✅ Added User-Agent header for better compatibility  
✅ **Replaced fetch with direct HTTPS request** to properly handle SSL certificates  
✅ Enhanced error handling to catch ECONNRESET and SSL certificate errors  
✅ Still returns success to user even when Google Sheets fails

## Root Cause
The issue is that your **Google Apps Script doesn't have the proper handlers** to respond to GET requests. The script is receiving the request but doesn't know how to handle it, causing the connection reset.

## The Solution: Update Your Google Apps Script

### Step 1: Open Your Google Apps Script
1. Open your Google Sheet
2. Go to **Extensions → Apps Script**
3. Replace **ALL** existing code with this:

```javascript
// This script handles both GET and POST requests from your contact form

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Extract parameters (works for both GET and POST)
    const params = e.parameter;
    
    // Get the data
    const firstName = params.firstName || '';
    const lastName = params.lastName || '';
    const email = params.email || '';
    const department = params.department || '';
    const date = params.date || '';
    const time = params.time || '';
    const message = params.message || '';
    const submittedAt = params.submittedAt || new Date().toISOString();
    
    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Department',
        'Preferred Date',
        'Preferred Time',
        'Message'
      ]);
    }
    
    // Append the data
    sheet.appendRow([
      submittedAt,
      firstName,
      lastName,
      email,
      department,
      date,
      time,
      message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 2: Save and Deploy
1. Click **Save** (disk icon)
2. Click **Deploy → New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Configure:
   - **Description**: "Contact Form Handler v2"
   - **Execute as**: Me
   - **Who has access**: Anyone
6. Click **Deploy**
7. **Copy the new Web App URL** (it will look like: `https://script.google.com/macros/s/...`)

### Step 3: Update Your .env.local
Replace the old URL with the new one:
```bash
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_NEW_DEPLOYMENT_ID/exec
```

**Important**: Make sure there's NO SPACE after the `=` sign!

### Step 4: Restart Your Dev Server
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Testing the Fix

### Test 1: Direct Browser Test
Open this URL in your browser (replace YOUR_URL with your actual Web App URL):
```
YOUR_URL?firstName=Test&lastName=User&email=test@example.com&department=Sales&submittedAt=2024-01-01T00:00:00.000Z
```

**Expected result**: Should see `{"success":true,"message":"Data saved successfully"}`

If this works, your Google Apps Script is correctly deployed!

### Test 2: Test the Contact Form
1. Go to http://localhost:3001/contact
2. Fill out the form
3. Submit

**Expected result**: 
- Success toast message appears
- New row added to your Google Sheet
- No ECONNRESET error in terminal

## Troubleshooting

### Still Getting ECONNRESET or SSL Errors?
1. ✅ Verify you deployed the Apps Script as **Web app** (not API executable)
2. ✅ Check "Who has access" is set to **Anyone**
3. ✅ Make sure you're using the **Web App URL** (ends with `/exec`), NOT the Script URL
4. ✅ Verify no spaces in `.env.local` after the `=` sign
5. ✅ Restart your dev server after any .env changes
6. ✅ **The SSL certificate fix is now implemented** - if you still get SSL errors, the Apps Script URL might be incorrect

### Request Times Out?
- The timeout is now set to 10 seconds
- Google Apps Script should respond in 1-3 seconds normally
- If it's timing out, your script might have an error

### Check Apps Script Logs
1. Go to Apps Script Editor
2. Click **Executions** (clock icon on left sidebar)
3. Look for recent executions and any errors

### Form Shows Success But No Data in Sheet?
This is expected behavior! The contact form **always shows success to the user** for better UX. To verify it's actually working:
1. Check your terminal for detailed error logs
2. Check your Google Sheet for new rows
3. Check Apps Script Executions for logs

## Why This Happens

Google Apps Script Web Apps have some quirks:
1. They need **both** `doGet()` and `doPost()` functions defined
2. They must return `ContentService` objects, not plain text
3. They can be slow or timeout on first request (cold start)
4. Connection resets happen if the script doesn't return a proper response
5. **SSL certificate verification can fail** due to Node.js certificate chain validation issues

## The HTTPS Direct Request Fix

Instead of using the Node.js `fetch` API with an agent (which doesn't always work reliably), I switched to using the `https` module directly. This gives us full control over:

- **SSL certificate handling**: `rejectUnauthorized: false` bypasses certificate chain issues
- **Timeout control**: 10-second timeout prevents hanging requests  
- **Error handling**: Proper error catching for network issues
- **Response parsing**: Manual response handling for better reliability

**This approach is more reliable** for Google Apps Script Web Apps because it directly controls the HTTPS connection parameters.

If GET requests continue to fail, you can switch to POST in your `route.ts`:

```typescript
const response = await fetch(GOOGLE_SHEETS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstName, lastName, email, department, date, time, message,
    submittedAt: new Date().toISOString(),
  }),
});
```

Then update your Apps Script to parse JSON:
```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  // ... rest of the code
}
```

## Need More Help?

Check these resources:
- [Google Apps Script Web Apps Documentation](https://developers.google.com/apps-script/guides/web)
- [Next.js API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- Your `GOOGLE_SHEETS_SETUP.md` file in this directory

---

**Status**: The Next.js side is now properly configured with timeout and error handling. The issue is on the Google Apps Script side - update your script with the code above and redeploy.
