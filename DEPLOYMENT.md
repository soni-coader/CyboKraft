# Hostinger Deployment Guide - CyboKraft Project

## ✅ प्रोजेक्ट तैयार है! अब आप इसे deploy कर सकते हैं।

## Build Generate करने के Steps:

### 1. Build Generate करें:

```bash
npm run build
```

यह command `out` folder में static files generate करेगी।

### 2. Deploy करने के लिए:

#### Option A: File Manager से Upload करें

1. Hostinger के File Manager में जाएं
2. `public_html` folder खोलें
3. `out` folder की सभी files को upload करें (folder को नहीं, सिर्फ उसके अंदर की files को)
4. `.htaccess` file को भी upload करना न भूलें

#### Option B: FTP से Upload करें

1. FileZilla या कोई FTP client खोलें
2. Hostinger के FTP credentials का use करें
3. `public_html` में navigate करें
4. `out` folder की सभी files upload करें

## Important Files जो Deploy करनी हैं:

```
out/
├── index.html
├── 404.html
├── _next/
│   ├── static/
│   └── ...
├── about/
├── contact/
├── domain/
├── services/
└── ... (सभी generated files)

public/
└── .htaccess (यह file root में होनी चाहिए)
```

## Deploy के बाद Check करें:

1. ✅ Homepage load हो रहा है
2. ✅ सभी pages काम कर रहे हैं
3. ✅ Images show हो रही हैं
4. ✅ Navigation working है

## Troubleshooting:

### अगर 404 error आए:

- Check करें कि `.htaccess` file properly upload हुई है
- File को `public_html` में root level पर रखें

### अगर images load न हों:

- सभी files properly upload हुई हैं check करें
- `_next/static/` folder complete upload हुआ है verify करें

### अगर styles load न हों:

- Browser cache clear करें
- CSS files की path check करें

## Production Optimizations जो हमने किए हैं:

✅ Static Export Configuration
✅ Image Optimization (unoptimized: true for static hosting)
✅ Trailing Slash Support
✅ Compression enabled in .htaccess
✅ Browser Caching configured
✅ Clean URLs with proper routing
✅ CSS Nesting support added
✅ Browserslist updated

## Build Size Summary:

- Total Pages: 18
- First Load JS: ~96.2 kB (shared)
- All routes are static (○)
- Optimized for production ✓

## Next Steps:

1. `npm run build` run करें
2. `out` folder की files Hostinger पर upload करें
3. `.htaccess` file root में upload करें
4. Test करें!

---

**Note:** यह project पूरी तरह static export के लिए configured है, इसलिए किसी Node.js server की जरूरत नहीं है। सिर्फ generated files को upload करें।
