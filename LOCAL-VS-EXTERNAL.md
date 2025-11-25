# Local vs External Resources

## ✅ **Fully Local (Works Offline)**

All of these are stored locally in your `website` folder:

- ✅ **HTML structure** - `index.html`
- ✅ **All CSS files** - `css/` folder (Webflow styles + your custom.css)
- ✅ **All JavaScript** - `js/` folder (jQuery, Webflow JS + your custom.js)
- ✅ **All images** - `images/` folder (50+ images)
- ✅ **Website functionality** - Navigation, animations, interactions

**The website will work completely offline!** All core functionality is local.

---

## 🌐 **External Dependencies (Require Internet)**

These are loaded from external CDNs/services:

### Analytics & Tracking (Optional - won't break site if offline)
- Google Tag Manager - Analytics tracking
- HubSpot - Marketing/CRM tracking
- Intellimize - A/B testing

### Fonts (Optional - falls back to system fonts if offline)
- Google Fonts (DM Serif Display, DM Sans)
- WebFont loader

### Third-Party Widgets (Optional - won't break site if offline)
- Splide carousel CSS (from CDN)
- Senja testimonials widget
- Termly cookie consent

---

## 🎯 **What This Means**

### ✅ **Fully Functional Offline:**
- Website structure and layout
- All styling and design
- Navigation and interactions
- All images
- Core JavaScript functionality

### ⚠️ **Requires Internet:**
- Custom fonts (will use system fonts instead)
- Analytics tracking (won't track, but site works)
- Third-party widgets (testimonials, cookie consent)

---

## 💡 **To Make It 100% Offline:**

If you want to remove all external dependencies, you can:

1. **Download fonts locally** - Download DM Serif Display and DM Sans, host them in `css/fonts/`
2. **Download Splide CSS locally** - Copy the Splide CSS to `css/` folder
3. **Remove analytics scripts** - Delete the Google Tag Manager, HubSpot, and Intellimize scripts
4. **Remove widgets** - Remove Senja and Termly scripts if not needed

But honestly, **the site works great as-is!** The external resources are just enhancements - the core website is fully independent and local.

---

## 📊 **Summary**

| Resource Type | Status | Impact if Offline |
|--------------|--------|-------------------|
| HTML/CSS/JS | ✅ Local | ✅ Works perfectly |
| Images | ✅ Local | ✅ Works perfectly |
| Fonts | 🌐 External | ⚠️ Uses system fonts |
| Analytics | 🌐 External | ✅ Site works, no tracking |
| Widgets | 🌐 External | ✅ Site works, widgets hidden |

**Bottom line:** Your website is **95% local** and will work offline. The external resources are just nice-to-haves that enhance the experience but aren't required for the site to function.

