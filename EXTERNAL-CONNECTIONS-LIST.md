# External Connections Inventory

Complete list of all external services, websites, and resources connected to the website.

---

## 📊 **Analytics & Tracking Services**

### 1. Google Tag Manager
- **Service:** Google Tag Manager
- **Purpose:** Manages all analytics and marketing tags
- **URL:** `https://www.googletagmanager.com/gtm.js?id=GTM-TM67MDCJ`
- **Location:** In `<head>` section (line 13)
- **Also includes:** Noscript iframe at `https://www.googletagmanager.com/ns.html?id=GTM-TM67MDCJ` (line 337)
- **Type:** Analytics/Tag Management

### 2. HubSpot Analytics
- **Service:** HubSpot
- **Purpose:** Marketing automation and CRM tracking
- **URL:** `//js.hs-scripts.com/21160528.js`
- **Location:** In `<head>` section (line 16)
- **Account ID:** 21160528
- **Type:** Analytics/Marketing Automation

### 3. Intellimize (A/B Testing)
- **Service:** Intellimize
- **Purpose:** A/B testing and personalization platform
- **URLs:**
  - `https://cdn.intellimize.co/snippet/117500825.js` (line 3)
  - `https://api.intellimize.co` (preconnect)
  - `https://log.intellimize.co` (preconnect)
  - `https://117500825.intellimizeio.com` (preconnect)
- **Location:** In `<head>` section
- **Customer ID:** 117500825
- **Type:** A/B Testing/Personalization
- **Note:** Includes anti-flicker overlay functionality

---

## 🎨 **Fonts & Typography**

### 4. Google Fonts
- **Service:** Google Fonts
- **Purpose:** Web font loading
- **URLs:**
  - `https://fonts.googleapis.com` (preconnect)
  - `https://fonts.gstatic.com` (preconnect)
  - `https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js` (line 1)
- **Fonts Used:**
  - DM Serif Display (regular)
  - DM Sans (regular, 500, 600, 700, 800, 900)
- **Location:** In `<head>` section
- **Type:** Font Service

---

## 🎬 **Video Embeds**

### 5. Vimeo Video (via Embedly)
- **Service:** Vimeo (embedded via Embedly)
- **Purpose:** Video player for "Meet Our Global Talent" section
- **URL:** `//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F1063566178...`
- **Vimeo Video ID:** 1063566178
- **Embedly CDN:** `cdn.embedly.com`
- **Location:** In "Meet Our Global Talent" section
- **Type:** Video Embed

---

## 🎯 **Third-Party Widgets**

### 6. Senja Testimonials Widget
- **Service:** Senja
- **Purpose:** Customer testimonials/reviews widget
- **URL:** `https://widget.senja.io/widget/54c2f310-184d-41de-856a-3c7b6d1cc0d3/platform.js`
- **Widget ID:** 54c2f310-184d-41de-856a-3c7b6d1cc0d3
- **Location:** In testimonials section (line 295)
- **Type:** Testimonials Widget

### 7. Termly Cookie Consent
- **Service:** Termly
- **Purpose:** GDPR/CCPA cookie consent banner
- **URL:** `https://app.termly.io/resource-blocker/c5eed704-ddb6-4990-99f5-d24d48c914f7`
- **Resource ID:** c5eed704-ddb6-4990-99f5-d24d48c914f7
- **Location:** In `<head>` section (line 19)
- **Type:** Cookie Consent/Legal Compliance

---

## 📝 **Forms**

### 8. HubSpot Forms
- **Service:** HubSpot
- **Purpose:** Lead capture form for "Download our Global Salary Guide"
- **URL:** `//js.hsforms.net/forms/embed/v2.js`
- **Portal ID:** 21160528
- **Form ID:** c72e5fea-fb08-47f4-b8c6-623736cc5d08
- **Region:** na1
- **Location:** In "Download our Global Salary Guide" section (line 321-324)
- **Type:** Form Service

---

## 📚 **External Libraries (CDN)**

### 9. Splide Carousel Library (CSS)
- **Service:** jsDelivr CDN
- **Purpose:** Carousel/slider CSS for roles section
- **URL:** `https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/css/splide.min.css`
- **Version:** 4.0.6
- **Location:** In `<head>` section (line 33)
- **Type:** CSS Library (CDN)

### 10. Splide Carousel Library (JS)
- **Service:** jsDelivr CDN
- **Purpose:** Carousel/slider JavaScript for roles section
- **URL:** `https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/js/splide.min.js`
- **Version:** 4.0.6
- **Location:** Before closing `</body>` tag (line 348)
- **Type:** JavaScript Library (CDN)

---

## 🔧 **Custom Scripts (External)**

### 11. Geoblocking Script
- **Service:** GitHub (via jsDelivr CDN)
- **Purpose:** Hides/shows content based on visitor's geographic location (IP address)
- **URL:** `https://cdn.jsdelivr.net/gh/Joao-Aquino/webflow-scripts@refs/heads/main/somewhere/geoblocking-ip.js`
- **Repository:** Joao-Aquino/webflow-scripts
- **Location:** Before closing `</body>` tag (line 340)
- **Type:** Custom Script (Geographic Filtering)

### 12. Savings Splide Script
- **Service:** GitHub (via jsDelivr CDN)
- **Purpose:** Custom JavaScript that initializes the Splide carousel for the "roles" section
- **URL:** `https://cdn.jsdelivr.net/gh/Joao-Aquino/webflow-scripts@refs/heads/main/somewhere/savings-splide.js`
- **Repository:** Joao-Aquino/webflow-scripts
- **Location:** Before closing `</body>` tag (line 349)
- **Type:** Custom Script (Carousel Initialization)

---

## 🔗 **SEO & Metadata**

### 13. Canonical Link
- **Service:** Self-reference
- **Purpose:** Tells search engines the preferred URL for this page
- **URL:** `https://somewhere.com`
- **Location:** In `<head>` section (line 1)
- **Type:** SEO Meta Tag
- **Note:** Points to somewhere.com (should be updated to arvo34.com)

### 14. Google Site Verification
- **Service:** Google Search Console
- **Purpose:** Verifies ownership of the website in Google Search Console
- **Verification Code:** `bhbFKpkWDFn8G-uF4QQJ9M6Y8WU-78LVmk7BTOy-MWI`
- **Location:** In `<head>` section (line 1)
- **Type:** SEO Verification

### 15. Schema.org JSON-LD (Organization)
- **Service:** Schema.org (namespace only, not loading resources)
- **Purpose:** Structured data for search engines
- **URL:** `https://schema.org` (namespace identifier only)
- **Organization URL:** `https://www.somewhere.com/`
- **Location:** In `<head>` section (line 3-11)
- **Type:** Structured Data (SEO)

### 16. Schema.org JSON-LD (WebPage)
- **Service:** Schema.org (namespace only, not loading resources)
- **Purpose:** Structured data for search engines
- **URL:** `https://schema.org` (namespace identifier only)
- **Page URL:** `https://somewhere.com/`
- **Location:** In `<head>` section (line 20-30)
- **Type:** Structured Data (SEO)

---

## 🌐 **Social Media Links (Footer)**

### 17. Facebook
- **URL:** `https://www.facebook.com/somewheredotcom`
- **Location:** Footer social links section
- **Type:** External Link (not loading scripts)

### 18. Instagram
- **URL:** `https://www.instagram.com/hirewithsomewhere/`
- **Location:** Footer social links section
- **Type:** External Link (not loading scripts)

### 19. X (Twitter)
- **URL:** `https://www.x.com/somewherehiring`
- **Location:** Footer social links section
- **Type:** External Link (not loading scripts)

### 20. LinkedIn
- **URL:** `https://www.linkedin.com/company/somewhere`
- **Location:** Footer social links section
- **Type:** External Link (not loading scripts)

---

## 📋 **Summary by Category**

### **Analytics & Tracking (3 services)**
1. Google Tag Manager
2. HubSpot Analytics
3. Intellimize (A/B Testing)

### **Fonts (1 service)**
4. Google Fonts

### **Video (1 service)**
5. Vimeo (via Embedly)

### **Widgets (2 services)**
6. Senja Testimonials
7. Termly Cookie Consent

### **Forms (1 service)**
8. HubSpot Forms

### **Libraries (2 services)**
9. Splide CSS (CDN)
10. Splide JS (CDN)

### **Custom Scripts (2 services)**
11. Geoblocking Script
12. Savings Splide Script

### **SEO (3 items)**
13. Canonical Link
14. Google Site Verification
15-16. Schema.org JSON-LD (2 instances)

### **Social Links (4 links)**
17-20. Facebook, Instagram, X, LinkedIn (footer links only)

---

## 🔍 **Total Count**

- **Total External Services:** 20
- **Scripts Loading:** 12
- **Stylesheets Loading:** 1 (Splide CSS)
- **Embeds/Iframes:** 2 (Vimeo via Embedly, GTM noscript)
- **Social Links:** 4 (just links, not loading scripts)
- **SEO Meta Tags:** 3 (not loading resources)

---

## ⚠️ **Notes**

1. **Canonical Link** currently points to `https://somewhere.com` - should be updated to `https://arvo34.com`
2. **Google Site Verification** code is specific to the original domain - may need to be regenerated for arvo34.com
3. **Schema.org URLs** are just namespace identifiers - they don't load external resources
4. **Social media links** in footer are just links - they don't load external scripts
5. **Geoblocking script** is hosted on GitHub via jsDelivr - consider hosting locally if needed
6. **Savings-splide script** is hosted on GitHub via jsDelivr - consider hosting locally if needed

---

## 📝 **Action Items**

- [ ] Update canonical link to arvo34.com
- [ ] Update Schema.org URLs to arvo34.com
- [ ] Regenerate Google Site Verification for arvo34.com
- [ ] Decide which external services to keep/remove
- [ ] Consider hosting custom scripts locally instead of from GitHub
- [ ] Review and update HubSpot account IDs if needed
- [ ] Review and update Senja widget ID if needed
- [ ] Review and update Termly resource ID if needed

