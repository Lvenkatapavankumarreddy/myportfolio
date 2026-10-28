# Venkata Pavan Kumar Reddy Lokasani — Student Portfolio

A modern, high-performance portfolio built for **Venkata Pavan Kumar Reddy Lokasani** (B.Tech Artificial Intelligence and Data Science student at **KL University**), styled using the **Nova Astro** design reference ([ThemeWagon Nova Astro](https://preview.themewagon.com/nova-astro/#contact)).

---

## ✨ Features & Design Highlights

1. **Nova Astro Editorial Design System**:
   - **Color Palette**: Warm editorial ivory/cream base (`#fffdf9` / `#f4f0e9`), obsidian dark accents (`#161616`), and bronze camel tones (`#b98b6e`).
   - **Typography**: Editorial typography using the **Satoshi** font family with tight letter tracking and uppercase eyebrow tags flanked by horizontal divider lines (`— Label —`).
   - **Curved Editorial Cards**: Modern rounded containers (`rounded-3xl` / `2.5rem`) with subtle borders and soft elevations.

2. **Signature Nova Astro `#contact` Section**:
   - Mountain background backdrop with high-contrast obsidian overlay.
   - Distinctive centered headline: *"Let's create together"*.
   - Direct interactive message form.
   - Direct reach-out channels for Email (`l.pavanreddy9989@gmail.com`), Phone (`+91 8309627779`), LinkedIn, GitHub, and Location (`Vijayawada, India`).
   - One-click copy buttons for email address and phone number with feedback toasts.

3. **Nova Astro Floating Bottom Dock (`#floating-bar`)**:
   - Smoothly floats into view as visitors scroll past the hero section.
   - Instant jump links to *About*, *Education*, *Skills*, and *Contact*.
   - Quick one-click *Scroll to Top* arrow button.

4. **Complete Profile Data from Resume**:
   - **Hero Section**: High-resolution portrait, current CGPA badge (**8.95 / 10** at KL University), and direct action buttons to download resume or reach out.
   - **Metrics Strip**: Key academic indicators (8.95 CGPA, 2029 graduation, 15+ tech skills).
   - **About Section**: Detailed academic narrative, portrait photo, quick specs, and 3 core engineering pillars (*AI & Data Science*, *Modern Web Systems*, *Agile & Collaborative*).
   - **Education Milestones**:
     - **K L E F Deemed To Be University**: B.Tech in Artificial Intelligence and Data Science (2025 – 2029 | CGPA: 8.95 / 10 | Vijayawada, India | *Pursuing*).
     - **Dvsa Arka Institutions**: Class XII (2023 – 2025 | GPA: 8.3 / 10 | Guntur, India | *Completed*).
   - **Technical Skills**:
     - *Programming Languages*: Python, Java, JavaScript, C/C++
     - *Web Technologies*: HTML5, CSS3, JavaScript, Front-End Development, Responsive Web Design, REST APIs
     - *Core CS*: Data Structures & Algorithms, Object-Oriented Programming (OOP), Programming Fundamentals, Problem Solving, Debugging, Complexity Analysis
     - *OOP Concepts*: Classes & Objects, Encapsulation, Inheritance, Polymorphism, Abstraction
     - *Tools & Technologies*: Git, GitHub, VS Code, Linux, JSON, REST APIs, SQL/MySQL
     - *Software Development & Soft Skills*: Testing, Version Control, Leadership, Collaboration, Adaptability
   - **Resume**: Direct integration and download of `Resume.pdf`.

5. **Theme & Responsiveness**:
   - Light (Warm Editorial) and Dark (Obsidian) theme toggle with `localStorage` memory.
   - Fully responsive across mobile, tablet, and widescreen desktop displays.

---

## 🚀 How to Run Locally

You can run the portfolio in any of the following ways:

### Option A: Direct Browser Preview
Double-click `index.html` in your file explorer or open it in any web browser. All styles, fonts, and assets are locally bundled and linked.

### Option B: Local Web Server
If you have Node.js installed:
```bash
# Using npx serve
npx serve .

# Or via npm script
npm start
```
Then visit `http://localhost:3000` (or the URL displayed in your terminal).

---

## 📁 File Structure

```
New portfolio/
├── assets/
│   ├── css/
│   │   └── style.css            # Nova Astro design tokens & styling
│   ├── images/
│   │   ├── logo.jpeg            # Site logo
│   │   ├── My_Pic.jpeg          # Hero portrait
│   │   ├── Pic.jpeg             # About section photo
│   │   ├── university.jpg       # KL University image
│   │   ├── college.jpg          # Dvsa Arka Institutions image
│   │   └── cta-mountains.webp   # Nova Astro contact footer background
│   ├── js/
│   │   └── main.js              # Theme toggle, dock & interactions
│   └── satoshi.css              # Satoshi font stylesheet
├── index.html                   # Main single-page portfolio
├── package.json                 # Scripts and metadata
├── Resume.pdf                   # Downloadable resume
└── README.md                    # Project documentation
```
