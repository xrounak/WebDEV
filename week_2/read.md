
# 📚 Week 2: CSS Grid – Full Notes + Mini Project

---

## 📌 Topics Covered

- CSS Grid Layout
- CSS Transitions
- Media Queries for Responsiveness
- Mini Project: Responsive Pricing Table
- AI-Generated Reference Image
- Complete Markdown Summary

---

## 🔳 CSS Grid Basics

CSS Grid is a **2-dimensional layout system** for web layouts (rows + columns).

### ➕ Enable Grid:

```css
.container {
  display: grid;
}
```

---

## 🧱 Key CSS Grid Properties

### 1. `grid-template-columns` / `grid-template-rows`

Define how many columns/rows and their size.

```css
.container {
  grid-template-columns: 200px 200px 200px;
  /* OR */
  grid-template-columns: 1fr 1fr 1fr; /* Equal width */
}
```

### 2. `gap`, `row-gap`, `column-gap`

Spacing between grid items:

```css
.container {
  gap: 20px;
}
```

### 3. `grid-column`, `grid-row`

Span items across columns or rows:

```css
.item {
  grid-column: 1 / 3;
}
```

### 4. `grid-template-areas`

Name zones in the grid:

```css
.container {
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}

.header {
  grid-area: header;
}
```

---

## 🎨 CSS Transitions

Add animations to property changes:

```css
.button {
  background: blue;
  transition: background 0.3s ease;
}
.button:hover {
  background: green;
}
```

---

## 📱 Media Queries

Make layouts responsive for different devices.

```css
/* Tablet View */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

/* Mobile View */
@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

### 📌 `min-width` vs `max-width`

- `min-width`: Mobile-first
- `max-width`: Desktop-first

---

## 💡 Pro Grid Tips

### Auto-fit with `minmax` for dynamic grids:

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

---

## 🎯 Mini Project: Responsive Pricing Table

### ✅ Features:
- Three pricing cards (`Free`, `Pro`, `Enterprise`)
- Responsive design using media queries
- Hover effect using transitions

### 📄 HTML:

```html
<div class="pricing-table">
  <div class="card">
    <h2>Free</h2>
    <p>$0/month</p>
    <p>Feature 1</p>
    <p>Feature 2</p>
    <p>Feature 3</p>
  </div>
  <div class="card">
    <h2>Pro</h2>
    <p>$15/month</p>
    <p>Feature 1</p>
    <p>Feature 2</p>
    <p>Feature 3</p>
  </div>
  <div class="card">
    <h2>Enterprise</h2>
    <p>$29/month</p>
    <p>Feature 1</p>
    <p>Feature 2</p>
    <p>Feature 3</p>
  </div>
</div>
```

### 🎨 CSS:

```css
.pricing-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .pricing-table {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .pricing-table {
    grid-template-columns: 1fr;
  }
}
```

---

## 🖼️ Reference Image Summary (AI Generated)

A clean and modern **3-column pricing table** with:

- 💰 Free: $0/month
- 💼 Pro: $15/month
- 🏢 Enterprise: $29/month
- Each with 3 bullet-point features
- Styled with soft gray background and white cards

_This image helps visualize what your final project should look like._

---

## 📚 Resources

- [CSS Grid Course – Kevin Powell](https://youtu.be/rg7Fvvl3taU)
- [MDN CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [Media Queries – W3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

---

## ✅ Weekly Checklist

- [x] Learn CSS Grid layout basics
- [x] Understand transitions and apply hover effects
- [x] Use media queries for responsive design
- [x] Build and test pricing table layout
- [x] Generate visual reference image
- [x] Save full notes in Markdown format

---
