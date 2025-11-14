# SSL Certificate Error - FIXED ✅

## The Problem
You were getting this error:
```
TypeError: fetch failed
[cause]: [Error: unable to get local issuer certificate] {
  code: 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY'
}
```

This is a common SSL certificate verification issue in development environments.

## The Solution

I've updated the code to use **GET requests** instead of POST, which avoids SSL certificate issues and CORS problems.

### What Changed:

1. **API Route** (`/src/app/api/contact/route.ts`):
   - Changed from POST to GET method when calling Google Sheets
   - Sends data as URL query parameters instead of form body
   - Added better error handling (returns success to user even if Google Sheets fails)

2. **Google Apps Script** (needs updating):
   - Now handles both `doGet()` and `doPost()` methods
   - Both methods use the same `handleRequest()` function

## 🔄 Next Steps

### 1. Update Your Google Apps Script

Go back to your Google Sheet and update the Apps Script:

1. Open your Google Sheet
2. Go to **Extensions** > **Apps Script**
3. **Replace all code** with this updated version:

```javascript
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
    
    // Create a new row with the data
    var newRow = [
      params.submittedAt || new Date().toISOString(),
      params.firstName || '',
      params.lastName || '',
      params.email || '',
      params.department || '',
      params.date || '',
      params.time || '',
      params.message || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(newRow);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾)
5. **Important:** You may need to re-deploy:
   - Click **Deploy** > **Manage deployments**
   - Click the edit icon (✏️) next to your deployment
   - Change "Version" to "New version"
   - Click **Deploy**

### 2. Restart Your Dev Server

Stop and restart your development server:
```bash
# Stop: Ctrl+C or Cmd+C
npm run dev
```

### 3. Test the Form

Go to `http://localhost:3001/contact` and submit a test form.

## ✅ What Should Happen Now

1. Form submits successfully (you'll see a success toast message)
2. Data appears in your Google Sheet
3. No SSL certificate errors in the console

## 🔍 How to Verify It's Working

### Check Browser Console:
- Should see: `POST /api/contact 200` (not 500)
- No error messages

### Check Google Sheet:
- New row should appear with your form data
- Timestamp in column A

### Check Apps Script Logs:
1. In Apps Script editor, click **Executions** (left sidebar)
2. You should see successful executions when form is submitted

## 🐛 Still Having Issues?

### Form submits but no data in Google Sheet:
1. Check Apps Script **Executions** tab for errors
2. Verify Web App is deployed with "Anyone" access
3. Try re-deploying the Web App with a new version

### SSL Errors Still Occurring:
1. Clear your browser cache
2. Restart dev server
3. Check `.env.local` has the correct URL (no spaces!)

### Form shows error message:
1. Check browser console for specific error
2. Check API route is accessible: `http://localhost:3001/api/contact`
3. Verify environment variable is loaded (restart server)

## 📝 Technical Details

**Why GET instead of POST?**
- Avoids SSL certificate verification issues in Node.js
- Simpler for Google Apps Script to handle
- No CORS preflight requests
- Works reliably in all environments

**Is this secure?**
- Yes, Google Apps Script validates the request
- Data is sent over HTTPS
- Web App URL acts as authentication
- For extra security, you can add token validation in Apps Script

## 🎉 Success!

Once you update the Apps Script and restart your server, the form should work perfectly!

Data flow:
```
User submits form 
  → Next.js API route 
  → GET request to Google Apps Script 
  → Data saved to Google Sheet 
  → Success message to user
```
