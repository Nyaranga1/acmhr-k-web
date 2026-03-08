# ACMHR-K Website

**Alliance for Cardio-Metabolic Health and Research – Kenya**  
Built with React + Vite + Tailwind CSS — same stack as axiom-deploy ✅

---

## 📁 Project Structure

```
acmhr-k-react/
├── index.html                  ← Entry HTML
├── package.json                ← Dependencies
├── vite.config.js              ← Vite config
├── tailwind.config.js          ← Tailwind config + brand colors
├── postcss.config.js           ← PostCSS config
└── src/
    ├── main.jsx                ← React entry point
    ├── index.css               ← Tailwind directives + global styles
    ├── ACMHRKWebsite.jsx       ← 🔑 ALL website content lives here
    └── assets/
        └── logo.png            ← ACMHR-K logo
```

---

## 🚀 Same Workflow as axiom-deploy

### Step 1 — Open in VS Code
```bash
# Unzip the folder, then:
cd acmhr-k-react
code .
```

### Step 2 — Install dependencies
```bash
npm install
```

### Step 3 — Run locally
```bash
npm run dev
# Opens at http://localhost:5173
```

### Step 4 — Edit content
All content is in **`src/ACMHRKWebsite.jsx`** — same as your AxiomWebsite.jsx pattern.
Look for the DATA section at the top — edit arrays like TEAM, PROGRAMS, STATS, FAQS.

---

## ✉️ Set Up the Contact Form (Free)

1. Go to **https://formspree.io** → sign up free
2. Create a form → copy your Form ID (e.g. `xpwzqabc`)
3. Open `src/ACMHRKWebsite.jsx`
4. Find: `https://formspree.io/f/YOUR_FORM_ID`
5. Replace `YOUR_FORM_ID` with your real ID
6. Done — submissions go to your email!

---

## 🌐 Deploy — Exact Same Workflow as axiom-deploy

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — ACMHR-K website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/acmhr-k.git
git push -u origin main
```

### 2. Deploy on Netlify (FREE)
1. Go to **https://netlify.com**
2. Click **"Add new site"** → **"Import from Git"**
3. Connect your GitHub account → Select **acmhr-k** repo
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site** — live in ~60 seconds! ✅

### 3. Connect GoDaddy Domain (same as axiom)
1. In Netlify → Site settings → Domain management → Add custom domain
2. Type: `acmhr-k.org` (or whatever domain you buy)
3. Netlify shows you nameservers:
   ```
   dns1.p07.nsone.net
   dns2.p07.nsone.net
   dns3.p07.nsone.net
   dns4.p07.nsone.net
   ```
4. In GoDaddy → DNS → Change nameservers to the above
5. Wait 24–48 hours → ✅ Live at your domain!

---

## 🎨 Brand Colors (in tailwind.config.js)

| Name       | Hex       | Used for              |
|------------|-----------|-----------------------|
| teal       | `#0A9396` | Primary buttons, tags |
| teal-light | `#94D2BD` | Accents on dark bgs   |
| teal-dark  | `#005F73` | Hover states, hero    |
| navy       | `#001219` | Dark sections, text   |
| gold       | `#E9C46A` | Accent highlights     |

Change any color in `tailwind.config.js` → updates everywhere instantly.

---

## 📸 Adding Real Photos to Gallery

1. Create folder: `src/assets/gallery/`
2. Add your photos: `event1.jpg`, `event2.jpg`, etc.
3. Import them at the top of `ACMHRKWebsite.jsx`:
   ```jsx
   import event1 from './assets/gallery/event1.jpg'
   ```
4. Update the `placeholders` array in the Gallery component with real `src` values.

---

## 🛠 Tech Stack

| Tool        | Purpose              |
|-------------|----------------------|
| React 18    | UI framework         |
| Vite 4      | Build tool & dev server |
| Tailwind 3  | Utility-first CSS    |
| Formspree   | Contact form (free)  |
| Netlify     | Hosting (free)       |
| GoDaddy     | Domain registration  |
| GitHub      | Version control      |
