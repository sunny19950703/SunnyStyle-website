# ProEquip Industrial Website

A multilingual industrial equipment showcase website with quote request functionality and content management system.

## Features

### 1. Multi-Language Support
- **English** (Default)
- **French** (Français)
- **Chinese** (中文)

Language selector is located in the top navigation bar.

### 2. Product Showcase
- 10 industrial equipment products
- Product categories: Strapping Machines, Forklifts, Pallet Jacks, etc.
- Detailed product specifications and features
- Product detail modal view

### 3. Quote Request System
- Customers can request quotes for products
- Form includes: Name, Email, Phone, Company, Product selection, Message
- All submissions are saved locally
- Admin notification system

### 4. Content Management System (CMS)
- Built-in admin panel for editing website content
- No coding required to update content
- Edit: Company info, Hero section, Products, Social media links

### 5. Company Information
- About Us section with company story
- Contact information with address, phone, email
- Business hours
- Social media links
- Company statistics

## How to Use

### For Website Visitors
1. Browse products on the home page
2. Click "View Details" to see product specifications
3. Click "Get Quote" to request pricing
4. Fill out the contact form
5. Select language from the top menu if needed

### For Website Admin

#### Access Admin Panel
1. Scroll to the footer
2. Click "Admin" link
3. Or press `Ctrl + Shift + A` to show admin button
4. Login with credentials:
   - Username: `admin`
   - Password: `admin123`
   - **Important**: Change password in production!

#### Edit Content
1. Login to admin panel
2. Select tab: Company Info / Hero Section / Products / Social Media
3. Edit the fields
4. Click "Save Changes"
5. Refresh the page to see updates

#### View Quote Requests
All quote requests are saved in the browser's localStorage. To view them:
1. Open browser console (F12)
2. Type: `JSON.parse(localStorage.getItem('quoteSubmissions'))`
3. Or implement admin panel view (see email-service.js)

### Setup Email Notifications

To receive quote requests via email, you need to set up an email service:

#### Option 1: EmailJS (Recommended for beginners)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Connect your email (Gmail, Outlook, etc.)
3. Create an email template
4. Get your credentials (Public Key, Service ID, Template ID)
5. Update `js/email-service.js` with your credentials

#### Option 2: Formspree
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Copy the form endpoint URL
4. Update the form action in `index.html`

#### Option 3: Backend API
Create a backend service using:
- **Node.js** + Nodemailer
- **Python** + smtplib
- **PHP** + mail()
- **Serverless** functions (AWS Lambda, Vercel, Netlify Functions)

See `js/email-service.js` for detailed setup instructions.

## File Structure

```
industrial-equipment-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Stylesheet
├── js/
│   ├── products.js        # Product data
│   ├── i18n.js           # Multi-language support
│   ├── admin.js          # Admin panel functionality
│   ├── email-service.js  # Email service setup
│   └── main.js           # Main JavaScript
├── images/               # Image folder (empty)
└── README.md            # This file
```

## Customization

### Change Colors
Edit `css/style.css`:
```css
:root {
    --primary-color: #1a365d;    /* Main brand color */
    --secondary-color: #2d3748;  /* Secondary color */
    --accent-color: #dd6b20;     /* CTA/Highlight color */
}
```

### Add More Products
Edit `js/products.js` and add new product objects to the `products` array.

### Add More Languages
Edit `js/i18n.js`:
1. Add new language to `translations` object
2. Add language option to the selector in `index.html`

### Change Admin Password
Edit `js/admin.js`:
```javascript
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'your-new-password'
};
```

## Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Notes

- This is a static website (HTML/CSS/JS)
- Data is stored in browser's localStorage
- For production use, implement a backend database
- Email functionality requires third-party service or backend
- Images are represented by emojis for demonstration

## Support

For questions or customization requests, contact your web developer.

---

**Last Updated**: 2026-02-17
**Version**: 2.0
