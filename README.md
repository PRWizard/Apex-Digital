# APEX DIGITAL - Digital Marketing Agency Website

A modern, responsive website for APEX DIGITAL, a digital marketing agency. Built with pure HTML, CSS, and JavaScript - no frameworks required!

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Background**: Interactive SVG background inspired by the APEX DIGITAL logo
- **Service Cards**: Expandable service cards with detailed descriptions
- **Contact Section**: Direct contact options for WhatsApp, Email, Phone, Facebook, and Instagram
- **Privacy Policy**: Comprehensive privacy policy modal
- **No Dependencies**: Pure vanilla HTML, CSS, and JavaScript - fast and lightweight
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Dark Theme**: Professional dark theme with accent colors

## 📂 Project Structure

```
apex-digital-website/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # All JavaScript functionality
├── logo.png            # Company logo
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🎨 Color Scheme

- **Primary**: #050A30 (Dark Blue)
- **Accent Light**: #CAE8FF (Light Blue)
- **Accent Medium**: #5CB6F9 (Blue)
- **Accent Dark**: #8E41B4 (Purple)

## 📋 Services

1. **SEO** - Organic visibility optimization
2. **SEM** - Search Engine Marketing campaigns
3. **Social Media Marketing** - Community building & engagement
4. **Email Marketing** - Personalized campaigns
5. **Google Ads** - Paid search dominance
6. **LinkedIn Ads** - B2B targeting

## 📞 Contact Information

- **WhatsApp**: +880 1570-248254
- **Email**: apexdigital.impact@gmail.com
- **Phone**: +880 1570-248254
- **Facebook**: https://www.facebook.com/profile.php?id=61570708285781
- **Instagram**: https://www.instagram.com/__apexdigital__/

## 🚀 Quick Start

### Local Testing

1. Clone or download the project files
2. Open `index.html` in your browser
3. That's it! No build process needed.

### Local Server (Optional)

If you want to test with a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server

# Using Ruby
ruby -run -ehttpd . -p8000
```

Then visit `http://localhost:8000` in your browser.

## 📤 GitHub Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it `apex-digital-website`
4. Click "Create repository"

### Step 2: Upload Files to GitHub

**Option A: Using GitHub Web Interface**

1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop all project files:
   - index.html
   - style.css
   - script.js
   - logo.png
   - vercel.json
   - .gitignore
   - README.md
3. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: APEX DIGITAL website"

# Add remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/apex-digital-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Vercel Deployment

### Step 1: Connect GitHub to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Click "Sign up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

### Step 2: Deploy Your Project

1. After signing in, click "New Project"
2. Select your `apex-digital-website` repository
3. Vercel will auto-detect it's a static site
4. Click "Deploy"
5. **Wait 1-2 minutes for deployment to complete**

### Step 3: Get Your Live URL

Once deployed, Vercel will provide you with a URL like:
```
https://apex-digital-website.vercel.app
```

This is your live website! Share this link anywhere.

## 🔄 Updating Your Website

### Update Files on GitHub

1. Edit files locally
2. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update services description"
   git push
   ```

3. Vercel automatically redeploys when you push to GitHub

### Update Contact Information

Edit `script.js` and update the `contactsData` object:

```javascript
const contactsData = [
    {
        label: 'WhatsApp',
        value: '+880 1570-248254',  // Update phone number
        href: 'https://wa.me/8801570248254',
        icon: 'whatsapp'
    },
    // ... other contacts
];
```

### Update Services

Edit `script.js` and update the `servicesData` object:

```javascript
const servicesData = [
    {
        id: 1,
        title: 'SEO',
        description: 'Your service description here...'
    },
    // ... other services
];
```

### Update Logo

Replace `logo.png` with your new logo image (keep the same filename).

## 🎯 Custom Domain (Optional)

To use your own domain with Vercel:

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update your domain's DNS settings

## ⚡ Performance Tips

- All files are minified automatically by Vercel
- Static site loads instantly with no server needed
- Logo is optimized for web (use PNG or WebP format)

## 🐛 Troubleshooting

### Website not loading on Vercel?

1. Check if all files are in the repository
2. Verify `index.html`, `style.css`, `script.js`, and `logo.png` exist
3. Make sure `vercel.json` is present
4. Check Vercel dashboard for build errors
5. Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)

### Logo not showing?

1. Verify `logo.png` is in the same folder as `index.html`
2. Check that filename in `index.html` matches exactly: `<img src="logo.png" ...`
3. Try uploading the logo again

### Styles not applying?

1. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
2. Verify `style.css` is uploaded to repository
3. Check browser console for any CSS errors

## 📱 Mobile Optimization

The website is fully responsive and works on:
- iPhone (all sizes)
- iPad (all sizes)
- Android phones and tablets
- Desktop computers
- Tablets and large screens

## 🔒 Security

- No external dependencies = no security vulnerabilities
- Static files only = no backend server needed
- HTTPS automatically enabled by Vercel

## 📝 License

This project is open source and available for APEX DIGITAL's use.

## 📧 Support

For any questions or issues:
- **Email**: apexdigital.impact@gmail.com
- **WhatsApp**: +880 1570-248254
- **Facebook**: https://www.facebook.com/profile.php?id=61570708285781

---

**Made with ❤️ for APEX DIGITAL**

Last Updated: 2024
