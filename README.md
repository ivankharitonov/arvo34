# Somewhere Website - Ready to Deploy

This folder contains everything you need to run the website.

## File Structure

```
website/
├── index.html          ← Main HTML file (open this in your browser)
├── css/                ← All stylesheets
│   ├── custom.css      ← Add your custom styles here
│   └── [Webflow CSS]   ← Don't edit these
├── js/                 ← All JavaScript files
│   ├── custom.js       ← Add your custom JavaScript here
│   └── [Webflow JS]    ← Don't edit these
├── images/             ← All website images
└── README.md           ← This file
```

## Quick Start

1. **View the website:** Open `index.html` in your web browser
2. **Edit styles:** Open `css/custom.css` and add your custom CSS
3. **Edit JavaScript:** Open `js/custom.js` and add your custom JavaScript
4. **Edit content:** Open `index.html` and modify the HTML

## Running Locally

**⚠️ Important:** Don't open `index.html` directly in your browser (file:// protocol). Use a local server instead!

### Quick Start (Easiest)

**Windows:** Double-click `start-server.bat` or `start-server.ps1`

### Manual Start

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

### Why Use a Server?

Opening HTML files directly (file://) can cause:
- JavaScript security restrictions
- CSS loading issues
- External script failures
- Anti-flicker overlay not removing

Using a local server (http://) fixes all these issues!

## Deploying

Upload the entire `website` folder to your web server. All files are local, so no external dependencies are required.

## Notes

- All assets (CSS, JS, images) are local - no CDN dependencies
- Custom styles in `css/custom.css` will override Webflow styles
- Custom JavaScript in `js/custom.js` runs after page load
- External scripts (analytics, etc.) still load from their CDNs

