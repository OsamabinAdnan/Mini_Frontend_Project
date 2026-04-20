# 🏋️ FitZone Pro — Complete E-Commerce Website Prompt

## 📌 TASK

Build a **100% complete, production-ready, single HTML file e-commerce website** for a Pakistani fitness brand called **FitZone Pro**.

Everything must be in ONE file:

* HTML + CSS + JavaScript
* No external files except CDN links

---

## ⚙️ TECH STACK

* **TailwindCSS**: https://cdn.tailwindcss.com
* **Font Awesome 6**
* **Google Fonts**:

  * Bebas Neue (headings)
  * Inter (body)
* ❌ No frameworks (React, Vue, etc.)
* ✅ Pure Vanilla JavaScript

---

## 🎨 BRAND

* **Name:** FitZone Pro
* **Tagline:** *"Build Strength. Build Discipline."*
* **WhatsApp:** +923001234567

### Colors

* Primary: `#DC2626` (Red)
* Secondary: `#111827` (Dark)
* Accent: `#22C55E` (Green)
* Light BG: `#F9FAFB`
* Dark BG: `#020617`

---

## 🖼️ IMAGE FILES (LOCAL)

* logo.png
* hero.png
* gym.png
* product1.png → product10.png
* gallery1.png → gallery4.png

### ❗ CRITICAL RULE

* Product & gallery images MUST use:

```css
object-fit: contain;
```

* Never crop equipment
* Use soft gradient backgrounds

---

## 📦 PRODUCTS DATA

```js
const products = [
  { id:1, name:'Adjustable Dumbbells', price:28000, cat:'strength', img:'product1.png', weight:'20kg', use:'Home Gym', rating:4.9, desc:'Space-saving adjustable dumbbells perfect for full-body workouts.' },
  { id:2, name:'Treadmill Pro X', price:145000, cat:'cardio', img:'product2.png', weight:'120kg capacity', use:'Running', rating:4.8, desc:'High-performance treadmill with LCD display and heart-rate tracking.' },
  { id:3, name:'Olympic Barbell Set', price:52000, cat:'strength', img:'product3.png', weight:'100kg', use:'Weightlifting', rating:4.9, desc:'Professional barbell set with plates for serious strength training.' },
  { id:4, name:'Exercise Bike', price:68000, cat:'cardio', img:'product4.png', weight:'100kg capacity', use:'Cycling', rating:4.7, desc:'Smooth indoor cycling experience with adjustable resistance.' },
  { id:5, name:'Yoga Mat Premium', price:3500, cat:'yoga', img:'product5.png', weight:'Lightweight', use:'Yoga', rating:4.8, desc:'Non-slip, comfortable mat for yoga and stretching.' },
  { id:6, name:'Resistance Bands Set', price:4200, cat:'strength', img:'product6.png', weight:'Multi-level', use:'Workout', rating:4.7, desc:'Set of resistance bands for strength and flexibility.' },
  { id:7, name:'Bench Press Station', price:75000, cat:'strength', img:'product7.png', weight:'Heavy Duty', use:'Chest', rating:4.9, desc:'Complete bench press station with adjustable incline.' },
  { id:8, name:'Rowing Machine', price:98000, cat:'cardio', img:'product8.png', weight:'130kg capacity', use:'Full Body', rating:4.8, desc:'Full-body cardio workout with smooth rowing action.' },
  { id:9, name:'Kettlebell Set', price:12000, cat:'strength', img:'product9.png', weight:'5–20kg', use:'Functional', rating:4.7, desc:'Durable kettlebells for dynamic strength training.' },
  { id:10, name:'Pull-Up Bar', price:6500, cat:'strength', img:'product10.png', weight:'Door Mount', use:'Upper Body', rating:4.6, desc:'Easy-to-install pull-up bar for home workouts.' }
];
```

---

## 🧩 ALL SECTIONS (16 TOTAL)

### 1. Header

* Sticky navbar
* Logo + brand name
* Navigation links
* Cart icon with badge
* "Join Now" button
* Mobile hamburger menu

---

### 2. Hero Section

* Dark background + texture
* Glow effects
* Left:

  * Badge: Pakistan’s #1 Fitness Store
  * Heading: Train Hard / Stay Strong
  * Feature pills
  * CTA buttons
* Right:

  * Featured product card

---

### 3. Trust Marquee

* Infinite scrolling bar
* Items:

  * Premium Quality
  * Fast Delivery
  * Gym Certified
  * COD Available

---

### 4. Products Section

* Filters: All / Strength / Cardio / Yoga
* Responsive grid (3/2/1)

**Card includes:**

* Image (contain)
* Rating stars
* Name + description
* Specs
* Price
* Add to Cart / Buy Now
* Quick View

---

### 5. Countdown Offer

* Sale banner
* Countdown timer (3 days)
* CTA button

---

### 6. Why Choose Us

* 3 feature cards

---

### 7. About Section

* Image + text
* Checklist
* Floating badges

---

### 8. Stats Counter

* Animated numbers

---

### 9. Gallery

* 2×2 grid
* Hover overlay

---

### 10. Membership Plans

* 3 pricing cards
* Middle highlighted

---

### 11. Reviews

* 3 testimonials
* Verified badge

---

### 12. Social Grid

* Instagram-style layout

---

### 13. FAQ Accordion

* One open at a time
* Smooth animation

---

### 14. Final CTA

* Strong conversion section

---

### 15. Footer

* Brand info
* Links
* Contact
* Social icons

---

## ⚡ JAVASCRIPT FEATURES

* Cart system (localStorage: `fz_cart`)
* Product filtering
* Quick View modal
* WhatsApp checkout
* Countdown timer
* Toast notifications
* Scroll animations
* FAQ accordion
* Counter animation

---

## 🎯 CSS REQUIREMENTS

* Smooth animations
* Hover effects
* Card shadows
* Gradient backgrounds

---

## 🚫 STRICT RULES

1. Single HTML file only
2. No frameworks
3. Images must not crop
4. Fully working cart system
5. All sections must exist
6. Fully responsive
7. No incomplete code
8. WhatsApp integration required
9. Smooth animations
10. Clean modern UI

---

## 🚀 OPTIONAL FEATURES

* Dark mode toggle
* BMI calculator
* Workout generator
* Floating WhatsApp button

---
