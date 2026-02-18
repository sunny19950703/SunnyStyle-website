// Email Service - Simulating backend email functionality
// In production, this should be a server-side service

// Configuration - Replace with your email
const EMAIL_CONFIG = {
    recipientEmail: 'your-email@example.com', // ← 修改为您的邮箱
    smtpServer: 'smtp.gmail.com', // 根据您的邮箱提供商修改
    smtpPort: 587
};

// Send quote notification via email
// Note: In a real implementation, this would be a server-side API call
function sendQuoteEmail(quoteData) {
    // This is a simulation - in production, you would:
    // 1. Send data to your backend API
    // 2. Backend sends email using Node.js/Nodemailer, Python/SMTP, etc.
    
    const emailContent = generateEmailTemplate(quoteData);
    
    // Log to console (for demonstration)
    console.log('=== EMAIL WOULD BE SENT ===');
    console.log('To:', EMAIL_CONFIG.recipientEmail);
    console.log('Subject:', `New Quote Request from ${quoteData.firstName} ${quoteData.lastName}`);
    console.log('Content:', emailContent);
    console.log('===========================');
    
    // For actual implementation, you would use a service like:
    // - EmailJS (client-side)
    // - SendGrid
    // - AWS SES
    // - Your own backend API
    
    return {
        success: true,
        message: 'Quote request saved. Email notification would be sent in production.'
    };
}

// Generate email HTML template
function generateEmailTemplate(data) {
    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a365d; color: white; padding: 20px; text-align: center; }
        .content { background: #f7fafc; padding: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a365d; }
        .value { margin-top: 5px; }
        .footer { text-align: center; padding: 20px; color: #718096; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛒 New Quote Request</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
            </div>
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${data.phone || 'Not provided'}</div>
            </div>
            <div class="field">
                <div class="label">Company:</div>
                <div class="value">${data.company || 'Not provided'}</div>
            </div>
            <div class="field">
                <div class="label">Product Interest:</div>
                <div class="value">${data.product || 'Not specified'}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message || 'No message'}</div>
            </div>
            <div class="field">
                <div class="label">Submitted:</div>
                <div class="value">${new Date(data.timestamp).toLocaleString()}</div>
            </div>
        </div>
        <div class="footer">
            <p>This quote request was submitted from your ProEquip Industrial website.</p>
        </div>
    </div>
</body>
</html>
    `;
}

// Export for use in main.js
window.sendQuoteEmail = sendQuoteEmail;
window.EMAIL_CONFIG = EMAIL_CONFIG;

// Instructions for setting up real email service
const EMAIL_SETUP_INSTRUCTIONS = `
========================================
EMAIL SETUP INSTRUCTIONS
========================================

To receive quote notifications via email, you have several options:

OPTION 1: EmailJS (Easiest - No backend needed)
-----------------------------------------------
1. Sign up at https://www.emailjs.com/
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key, Service ID, and Template ID
5. Replace the code in email-service.js with EmailJS integration

OPTION 2: Formspree (Simple form backend)
-----------------------------------------
1. Sign up at https://formspree.io/
2. Create a new form
3. Replace form action with Formspree endpoint
4. Formspree will email you all submissions

OPTION 3: Netlify Forms (If hosting on Netlify)
-----------------------------------------------
1. Add 'netlify' attribute to your form
2. Netlify automatically handles form submissions
3. Configure email notifications in Netlify dashboard

OPTION 4: Backend API (Most flexible)
-------------------------------------
1. Create a backend using Node.js, Python, PHP, etc.
2. Use Nodemailer (Node.js) or smtplib (Python) to send emails
3. Host on Heroku, Railway, or your own server
4. Update the form submission to POST to your API

OPTION 5: Google Sheets (Free alternative)
------------------------------------------
1. Use Google Apps Script to create a web app
2. Form submits to Google Script URL
3. Data is saved to Google Sheet
4. Set up email notifications from Google Sheets

RECOMMENDED FOR BEGINNERS: EmailJS or Formspree
RECOMMENDED FOR PRODUCTION: Backend API with proper validation

========================================
`;

console.log(EMAIL_SETUP_INSTRUCTIONS);
