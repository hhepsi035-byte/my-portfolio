# Hepsi — Full Stack Developer Portfolio

A modern, high-performance portfolio website built for **Hepsi**, highlighting real-world production projects, technical skills, downloadable ATS-friendly resume, and contact links.

---

## 🌟 Key Features

1. **Modern UI/UX & Responsive Layout**
   - Dark mode by default with light/dark theme toggle (`localStorage` persistence).
   - Glassmorphic card design, ambient glowing gradients, and smooth scroll progress indicator.
   - Dynamic typewriter effect highlighting core developer roles.
   - High-resolution profile avatar with animated gradient aura and orbital tech badges.

2. **In-Depth Project Analysis Showcase**
   - **SmartQueue (Public Office Appointment & Token Management System)**:
     - Architecture breakdown: Multi-tier role access (Citizen, Officer, Admin), OTP & Reference code validation, 10m-30m appointment arrival window enforcement, real-time AJAX queue tracking.
     - **Interactive Live Queue Simulator**: Test token issuance, OTP generation, and queue state directly on the website.
   - **DocuTwin AI (Document Duplicate Finder & NLP Clustering Suite)**:
     - Architecture breakdown: TF-IDF vectorization, Cosine Similarity matrix calculation, NetworkX graph-based clustering, differential vocabulary analysis (`get_missing_content`), batch merging, speech recognition & conversational AI assistant.
     - **Interactive Live NLP Similarity Calculator**: Compare text snippets, tune the similarity threshold slider (70% - 95%), and inspect vocabulary differences in real time.

3. **Skills Matrix with Dynamic Filtering**
   - Categorized skills: Frontend, Backend, Databases, AI/NLP & Data, Tools & DevOps.
   - Instant category filtering with smooth transition animations.

4. **Interactive & Downloadable ATS-Friendly Resume**
   - Recruiter-ready, ATS-compliant `resume.html` with clean typography and zero parser-breaking styles.
   - Built-in one-click **Print / Save as PDF** (`window.print()`).

5. **Contact & Social Connectivity**
   - Direct Email: `hepsi9706@gmail.com` with one-click copy toast notification.
   - LinkedIn: [https://www.linkedin.com/in/hepsi70](https://www.linkedin.com/in/hepsi70)
   - GitHub: [https://github.com/hhepsi035-byte](https://github.com/hhepsi035-byte)
   - Interactive Contact Form with automated `mailto` bridge.

---

## 📁 Project Structure

```
hepsi-portfolio/
├── index.html            # Main portfolio webpage
├── resume.html           # Standalone ATS-friendly, printable PDF resume
├── css/
│   └── style.css         # Complete responsive design & theme styles
├── js/
│   └── main.js           # Interactive simulations, typewriter, theme & filters
├── assets/
│   └── hepsi_profile.jpg # Profile photo
└── README.md             # Project documentation
```

---

## 🚀 How to Run & Preview

### Option 1: Double-click to open
Simply double-click `index.html` in your file explorer to open it in Google Chrome, Edge, or Firefox.

### Option 2: Run with local HTTP server
Open PowerShell or your terminal in this directory:
```powershell
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🌐 How to Deploy for Free

### GitHub Pages (Recommended)
1. Initialize git in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Create a repository on GitHub (e.g., `hepsi-portfolio` or `<username>.github.io`).
3. Push your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/hhepsi035-byte/hepsi-portfolio.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages** > Set branch to `main` and save. Your site will be live at `https://hhepsi035-byte.github.io/hepsi-portfolio/`!
