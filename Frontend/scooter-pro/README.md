# ScootyPro - E-Commerce Scooter Dealership Website

A complete, production-ready single-file e-commerce website for a Pakistani scooter dealership called **ScootyPro**. Built with pure HTML, CSS (TailwindCSS via CDN), and Vanilla JavaScript — no external frameworks.

![ScootyPro](logo.png)

---

## Features

### Core Functionality
- **Product Catalog** — 10 scooters across 3 categories (Commute, Sport, Ladies)
- **Shopping Cart** — Persistent cart with localStorage, quantity controls, and real-time totals
- **Quick View Modal** — Product details with image gallery, specs, and add-to-cart
- **Checkout Flow** — Order form with WhatsApp integration for COD orders
- **Category Filtering** — Filter products by type

### Sections (16 Total)
1. Sticky Header with navigation and cart icon
2. Hero Section with featured product and stats bar
3. Trust Marquee (infinite scroll)
4. Products Grid with filtering
5. Countdown Offer (limited time promotion)
6. Why Choose Us (trust badges)
7. About Section
8. Specs/Stats Counter (animated)
9. Gallery Section
10. Installment Plans
11. Customer Reviews
12. Instagram/Social Grid
13. FAQ Accordion
14. Final CTA
15. Footer with contact info

---

## Tech Stack

- **HTML5** — Single file structure
- **TailwindCSS** — Via CDN: `https://cdn.tailwindcss.com`
- **Font Awesome 6** — Icons via CDN
- **Google Fonts** — Rajdhani (headings) + Inter (body)
- **Vanilla JavaScript** — No frameworks

---

## Project Structure

```
scooter-pro/
├── index.html          # Complete single-file website
├── logo.png            # Brand logo
├── hero.png            # Hero section background
├── premium.png         # About section image
├── product1.png       # Product images (1-10)
├── gallery*.png       # Gallery images (1-4)
└── README.md           # This file
```

---

## Products

| ID | Name | Category | Price (PKR) | Engine | Mileage | Speed |
|----|------|----------|-------------|--------|---------|-------|
| 1 | Breeze 100 | Commute | 85,000 | 100cc | 45km/L | 65km/h |
| 2 | Sport 125 | Sport | 105,000 | 125cc | 38km/L | 90km/h |
| 3 | Classic 100 | Commute | 88,000 | 100cc | 48km/L | 65km/h |
| 4 | Thunder 150 | Sport | 125,000 | 150cc | 35km/L | 110km/h |
| 5 | Petal 100 | Ladies | 80,000 | 100cc | 45km/L | 65km/h |
| 6 | Urban 125 | Commute | 95,000 | 125cc | 40km/L | 85km/h |
| 7 | Eco 100 | Commute | 82,000 | 100cc | 55km/L | 65km/h |
| 8 | Turbo 150 | Sport | 130,000 | 150cc | 32km/L | 115km/h |
| 9 | Blossom 110 | Ladies | 86,000 | 110cc | 44km/L | 70km/h |
| 10 | Swift 100 | Commute | 83,000 | 100cc | 50km/L | 65km/h |

---

## How to Run

1. Place all files in the same folder
2. Ensure image files are present (logo.png, product*.png, gallery*.png, hero.png, premium.png)
3. Open `index.html` in any modern browser

```
# Simply open in browser
index.html
```

No build step or server required.

---

## Key Functionality

### Cart System
- Add products to cart from product cards or quick view modal
- Cart persists in browser localStorage (`sp_cart` key)
- Quantity adjustment (+/-) in cart sidebar
- Remove items from cart
- Checkout generates WhatsApp message with order details

### WhatsApp Integration
- Orders are submitted via WhatsApp message
- Customer fills form → message formatted → opens WhatsApp
- Number: `+923022311916`

### Animations
- Hero section staggered fade-in animations
- Scroll reveal for sections (fade-up)
- Product card hover effects (lift + shadow)
- Image zoom on hover
- Marquee scroll with pause on hover
- Animated counters in specs section
- FAQ accordion with smooth transitions

---

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1D4ED8` | Buttons, links, accents |
| Yellow | `#EAB308` | Highlights, badges |
| Red | `#DC2626` | Errors, alerts |
| Dark BG | `#0F172A` | Dark sections |
| Light BG | `#F8FAFC` | Light sections |

---

## Contact

- **WhatsApp:** +923022311916
- **Email:** info@scootypro.pk
- **Address:** Lahore, Pakistan

---

## License

This project is for demonstration/educational purposes.

---
