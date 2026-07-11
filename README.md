# 📱 Modern Responsive vCard & Personal Portfolio Template

A sleek, premium, and fully responsive single-page personal portfolio website built using semantic HTML5, custom CSS3 architectures, and lightweight Vanilla JavaScript. Designed as an optimized vCard template for tech professionals to showcase their engineering background.

---

## 🛠️ Technical Stack & Frameworks
* **Frontend:** Semantic HTML5 layouts.
* **Styling:** Custom CSS3 architectures utilizing global variables for seamless theme configuration.
* **Scripting:** Lightweight Vanilla JavaScript for client-side navigation handling.
* **Iconography:** Cloud-based vector graphics via Ionicons CDN integration.

---

## 🚀 Core Software Features & Architecture

### 1. Single-Page Application (SPA) Routing
* Implemented optimized client-side routing logic using JavaScript event listeners bound to `data-nav-btn` and `data-portfolio-page` attributes[cite: 2].
* Switches sections instantly without full page reloads, enhancing user experience (UX) and asset optimization.

### 2. Multi-Breakpoint Responsive Grid
The layout incorporates responsive media query breakpoints ranging from mobile viewports to ultra-wide desktop monitors:
* **Mobile Layout:** Optimized vertical stack with a toggleable responsive sidebar for contacts.
* **Desktop Layout:** Transformed into a stable two-column architecture with a fixed/sticky sidebar configuration.

### 3. GPU-Accelerated Animations
* Features a smooth dynamic rendering block triggered natively on visibility to fill out skill progress bars progressively.

---

## 📁 Project Directory Structure (Root-Level Layout)
All core production files are deployed directly within the repository's root directory for optimal path resolution and seamless hosting:
```text
├── index.html                 # Main semantic HTML structure & page views
├── style.css                  # Production stylesheet with global variables & media queries
├── script.js                  # Navigation scripting & mobile sidebar toggle logic
├── my-logo.png                # Personal brand logo asset
└── README.md                  # Project technical documentation
