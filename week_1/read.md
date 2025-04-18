# 📘 Week 1: HTML + Flexbox - Complete Notes

## ✅ HTML (HyperText Markup Language)
HTML is the standard markup language used to create and structure content on the web.

### 🔹 Basic Structure
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

### 🔹 Common Tags
| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings |
| `<p>` | Paragraph |
| `<a href="">` | Link |
| `<img src="" alt="">` | Image |
| `<div>` | Block container |
| `<span>` | Inline container |
| `<ul>`, `<ol>`, `<li>` | Lists |

---

## ✅ Semantic Tags
Semantic HTML gives meaning to your content and improves accessibility and SEO.

| Tag | Purpose |
|------|---------|
| `<header>` | Page header |
| `<nav>` | Navigation links |
| `<main>` | Main content area |
| `<section>` | Page sections |
| `<article>` | Independent content |
| `<aside>` | Side content |
| `<footer>` | Page footer |

---

## ✅ HTML Forms
Used for collecting user input.

### 🔹 Example
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <input type="submit" value="Submit">
</form>
```

---

## ✅ CSS Box Model
Every HTML element is a box made up of:
```
| Margin |
| Border |
| Padding |
| Content |
```

### 🔹 Example
```css
div {
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
  width: 200px;
  height: 100px;
}
```

---

## ✅ Flexbox (Flexible Box Layout)
Used for creating responsive layouts.

### 🔹 Parent Properties
```css
.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
```

### 🔹 Child Properties
```css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: center;
}
```

---

## ✅ Image Styling in CSS
```css
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

### 🔹 `object-fit` values
| Value | Description |
|--------|-------------|
| `fill` | Stretch to fill |
| `contain` | Fit without crop |
| `cover` | Fill and crop |
| `none` | Keep size |
| `scale-down` | Shrink only |

---

## ✅ Responsive Design with Media Queries
Media queries apply styles based on screen width.

### 🔹 Example
```css
@media (max-width: 768px) {
  .main {
    flex-direction: column;
    padding: 10px;
  }
  .images img {
    width: 100%;
    margin-bottom: 15px;
  }
  .content {
    text-align: center;
  }
}
```

### 🔹 Common Breakpoints
| Device | Max Width |
|--------|-----------|
| Mobile | 480px |
| Tablet | 768px |
| Desktop | 1024px and above |

### 🔹 `min-width` vs `max-width`
- `min-width`: Apply styles **from this width up** (used in mobile-first design)
- `max-width`: Apply styles **up to this width** (used in desktop-first design)

---

## ✅ Types of Display Boxes in CSS

| Type | Description |
|------|-------------|
| Block | Full width, new line (e.g., `div`, `p`) |
| Inline | Fits content, no line break (e.g., `span`, `a`) |
| Inline-block | Inline but allows width/height |
| Flex | Used with `display: flex` |
| Grid | Used with `display: grid` |
| None | Hides element from view |

---

## ✅ Mini Project: Responsive Landing Page
**Features to include:**
- Semantic HTML layout
- Responsive layout with Flexbox
- Mobile and tablet breakpoints using media queries
- Styled image section and a contact form

---

Let me know if you want the project template code added to this file!