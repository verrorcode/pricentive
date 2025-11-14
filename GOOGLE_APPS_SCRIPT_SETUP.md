# Google Apps Script - Contact Form Handler

## Overview
This Google Apps Script handles contact form submissions from your Next.js website and saves the data to a Google Sheet.

## Setup Instructions

### Step 1: Create a New Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "Contact Form Responses"

### Step 2: Open Apps Script Editor
1. In your Google Sheet, go to **Extensions → Apps Script**
2. This will open the Apps Script editor in a new tab

### Step 3: Replace the Code
**Delete ALL existing code** in the Apps Script editor and replace it with this:

```javascript
// Contact Form Handler - Handles both GET and POST requests
// This script saves contact form data to your Google Sheet

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form parameters (works for both GET and POST)
    var params = e.parameter;
    
    // Add header row if sheet is empty (only happens on first submission)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'First Name', 
        'Last Name',
        'Email',
        'Mobile Number',
        'Preferred Date',
        'Preferred Time',
        'Message'
      ]);
    }
    
    // Create a new row with the form data
    var newRow = [
      params.submittedAt || new Date().toISOString(),
      params.firstName || '',
      params.lastName || '',
      params.email || '',
      params.mobileNumber || '',
      params.date || '',
      params.time || '',
      params.message || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(newRow);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response if something goes wrong
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 4: Save the Script
1. Click the **Save** button (floppy disk icon) in the toolbar
2. Give your project a name like "Contact Form Handler"

### Step 5: Deploy as Web App
1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Contact Form Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

### Step 6: Update Your .env.local File
In your Next.js project, update the `.env.local` file with your new Web App URL:

```bash
GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Important**: Make sure there's NO space after the `=` sign!

### Step 7: Restart Your Development Server
```bash
# Stop your current server (Ctrl+C)
npm run dev
```

## Testing the Integration

### Test 1: Direct Browser Test
Open this URL in your browser (replace with your actual Web App URL):
```
YOUR_WEB_APP_URL?firstName=Test&lastName=User&email=test@example.com&mobileNumber=%2B15551234567&submittedAt=2024-01-01T00:00:00.000Z
```

**Expected Result**: 
- Browser shows: `{"success":true,"message":"Data saved successfully"}`
- Your Google Sheet gets a new row with headers and test data

### Test 2: Contact Form Test
1. Go to `http://localhost:3001/contact`
2. Fill out and submit the contact form
3. Check your Google Sheet for new data

## Troubleshooting

### No Data Appearing in Sheet?
1. ✅ Verify you deployed as **Web app** (not API executable)
2. ✅ Check "Who has access" is set to **Anyone**
3. ✅ Make sure you're using the **Web App URL** (ends with `/exec`)
4. ✅ Confirm no spaces in `.env.local` after `=`
5. ✅ Restart dev server after `.env` changes

### Getting Errors?
- Check the **Executions** tab in Apps Script editor for error logs
- Verify the script has permission to access the spreadsheet
- Make sure the sheet isn't protected or read-only

### Headers Not Appearing?
The script automatically adds headers on the first submission. If you want to add them manually:
1. In your Google Sheet, add this header row:
   ```
   Timestamp | First Name | Last Name | Email | Department | Preferred Date | Preferred Time | Message
   ```

## Data Structure

Your Google Sheet will have these columns:
- **Timestamp**: When the form was submitted (ISO format)
- **First Name**: Contact's first name
- **Last Name**: Contact's last name  
- **Email**: Contact's email address
- **Mobile Number**: Contact's mobile number with country code
- **Preferred Date**: Preferred contact date
- **Preferred Time**: Preferred contact time
- **Message**: Contact's message

## Security Notes

- This script accepts data from anyone (as configured)
- Consider adding validation or authentication if needed
- The script only writes to the active sheet in your spreadsheet
- No sensitive data is logged or stored elsewhere

## Need Help?

If you encounter issues:
1. Check the Apps Script **Executions** logs for errors
2. Verify your Web App URL is correct
3. Test with the direct browser URL first
4. Check your Next.js terminal for detailed error messages

---

**Status**: Ready to deploy. Copy the JavaScript code above into your Google Apps Script editor and follow the setup steps.</content>
<parameter name="filePath">/Users/vaibhav5.gupta/Desktop/Docs P/Pricentive/nicktio-nextjs-pro-v1-1/package/GOOGLE_APPS_SCRIPT_SETUP.md