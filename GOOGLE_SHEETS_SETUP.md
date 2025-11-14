# Google Sheets Contact Form Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" or similar
4. Add the following headers in the first row:
   - A1: Timestamp
   - B1: First Name
   - C1: Last Name
   - D1: Email
   - E1: Department
   - F1: Preferred Date
   - G1: Preferred Time
   - H1: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code
3. Paste the following code:

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

4. Click the **Save** icon (💾)
5. Name your project (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: Contact Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Review and authorize permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** if you see a warning
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** - it should look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Configure Environment Variable

1. In your project root, create or edit `.env.local`
2. Add the Web App URL:
   ```
   GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Restart your development server

## Step 5: Test the Integration

1. Go to your contact page: `http://localhost:3001/contact`
2. Fill out and submit the form
3. Check your Google Sheet - you should see a new row with the submission data

## Troubleshooting

### Form submits but data doesn't appear in Google Sheets
- Check that the Web App URL is correct in `.env.local`
- Verify the Apps Script deployment is set to "Anyone" access
- Check the Apps Script execution logs: **Executions** tab in Apps Script editor

### "Authorization required" error
- Re-deploy the Web App
- Make sure you authorized all permissions
- Try using an incognito/private browser window to authorize

### Data appears in wrong columns
- Verify the header row in your Google Sheet matches the order in the script
- Check that parameter names in the script match the form field names

## Optional Enhancements

### Email Notifications
Add this to your Apps Script to send email notifications:

```javascript
function doPost(e) {
  // ... existing code ...
  
  // Send email notification
  var emailBody = `
    New contact form submission:
    
    Name: ${params.firstName} ${params.lastName}
    Email: ${params.email}
    Department: ${params.department}
    Preferred Date: ${params.date}
    Preferred Time: ${params.time}
    Message: ${params.message}
  `;
  
  MailApp.sendEmail({
    to: 'your-email@example.com',
    subject: 'New Contact Form Submission',
    body: emailBody
  });
  
  // ... rest of code ...
}
```

### Auto-response Email
Send a confirmation email to the submitter:

```javascript
MailApp.sendEmail({
  to: params.email,
  subject: 'Thank you for contacting us',
  body: `Dear ${params.firstName},\n\nThank you for reaching out. We have received your inquiry and will get back to you shortly.\n\nBest regards,\nThe Team`
});
```
