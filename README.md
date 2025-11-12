# 🌍 MyOpenSource

Welcome to **MyOpenSource** — a beginner-friendly open-source project by [Manu Omar](https://github.com/Manuomar)!  
This repository is designed to help developers learn **how to contribute to open source**, step by step.  
No matter your skill level — everyone is welcome to contribute!

---

## 📘 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Steps to Contribute](#steps-to-contribute)
- [Contribution Rules](#contribution-rules)


---

## 💡 About the Project

**MyOpenSource** is an open space for contributors to:
- Learn the process of open-source collaboration  
- Practice Git & GitHub  
- Submit their small projects, scripts, or documentation improvements  
- Build a contribution history on GitHub  

The goal is to **make your first open-source contribution simple and enjoyable** 🚀

---

## 🧰 Tech Stack

- **Languages:** HTML,CSS,JavaScript
- **Tools:** Git & GitHub


---

## ⚙️ Getting Started

To contribute, you’ll need:
- A **GitHub account**
- **Git** installed on your computer
- A basic understanding of **Git commands**

---

## 🪜 Steps to Contribute

Follow these steps carefully 👇

### **Step 1: Fork the Repository**
Click the **Fork** button (top right corner) to make a personal copy of this repository under your GitHub account.

---

### **Step 2: Clone Your Forked Repository**
Copy the URL of your forked repo, then open your terminal and run:
```bash
git clone https://github.com/<your-username>/myopenSource.git
Example: git clone https://github.com/Manuomar/myopenSource.git
```

### Step 3: Move into the Project Directory
```
cd myopenSource
```
### Step 4: Create a New Branch
```
git checkout -b feature-yourName
Example:
git checkout -b feature-manu
```
### Step 5: Make Your Changes

Now you can:
- Add your project inside /projects
- Add your profile info in /contributors
- Improve documentation or fix typos
- Suggest features or enhancements

---

## ✅ What I added (improvements)

I implemented a set of small, high-value features to modernize this static site:

- Responsive header with a mobile menu (hamburger) and accessible navigation.
- Dark / Light theme toggle (persisted in localStorage) and CSS variable-based theming.
- Contact form (static) wired to Formspree — update the `action` on the form in `index.html` with your Formspree form ID.
- Basic PWA support: `manifest.json` and a minimal `sw.js` service worker that caches the site shell.
- `scripts.js` containing the interactive behavior (menu, theme toggle, form submit handler, SW registration).
- Small CSS improvements: focus states, theme variables, and contact form styles.

## 🔧 How to test locally

1. Open `index.html` in your browser (double-click or drag into browser).
2. On small screen widths, click the ☰ button to open the mobile navigation.
3. Click the moon/sun icon to toggle theme — your choice is saved between reloads.
4. Test the contact form: replace the `action="https://formspree.io/f/your-form-id"` in `index.html` with your Formspree endpoint or another form backend. The client-side JS uses `fetch` and shows basic status messages.
5. To test PWA and the service worker, serve the site over a local static server (browsers block SWs on file://). A simple way with Node is below.

## 🧪 Quick local server (optional)

If you have Node installed, you can run a simple static server. From the project root run:

```powershell
npx http-server -c-1 .
```

Then open the served URL (usually `http://127.0.0.1:8080`) to test service worker registration and PWA install.

## ⚠️ Notes & next steps

- Add real PWA icons at `icons/icon-192.png` and `icons/icon-512.png` for installability.
- Replace the Formspree form ID in `index.html` with your own endpoint to receive form messages.
- If you want, I can add CI (GitHub Actions) to lint CSS/JS and auto-deploy to GitHub Pages.


### Step 6: Stage and Commit Your Changes
```
git add .
git commit -m "Added my contribution - <your name>"

```
### Step 7: Push Changes to Your Fork
```
git push origin feature-yourName

```
###  Step 8: Create a Pull Request (PR)
Go to your forked repository on GitHub.

- Click Compare & pull request.
- Add a clear title and short description of your changes.
- Click Create Pull Request.
- Wait for review — once approved, your changes will be merged!

### Contribution Rules
- ✅ Use meaningful commit messages

- ✅ Don’t remove or modify others’ work without reason

- ✅ Keep files in correct folders (projects/, contributors/)

- ✅ Don’t submit irrelevant or spam PRs

- ✅ Be respectful and collaborative
