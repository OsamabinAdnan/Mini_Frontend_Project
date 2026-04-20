# Executive Sales Dashboard

A high-performance, single-page interactive dashboard for analyzing sales data. This project demonstrates advanced data visualization techniques using Chart.js, custom CSS animations, and synthetic data generation.

## 🚀 Features

- **Interactive Filtering**: Filter 1,000+ records by Year, Region, Segment, Category, and Shipping Mode.
- **Dynamic KPIs**: Real-time calculation of Revenue, Profit, Margin, Total Orders, and Average Order Value (AOV) with animated counters and sparklines.
- **Advanced Visualizations**:
  - **Revenue & Profit Trend**: Multi-view line chart (Monthly/Quarterly/Yearly).
  - **Category Share**: Donut chart with custom center labels.
  - **Geographic Analysis**: Top 10 States bar chart and Regional performance.
  - **Operational Metrics**: Shipping mode volume and Segment growth.
  - **Strategic Insights**: Sales vs. Profit bubble chart and Discount Impact analysis.
  - **Heatmaps & Treemaps**: Monthly revenue intensity and Sub-category proportions.
- **AI-Styled Insights**: Automatically computed business insights highlighting leads, risks, and growth patterns.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile viewing.
- **Dark Mode UI**: Sleek, modern interface using CSS variables and JetBrains Mono typography.

## 🛠️ Tech Stack

- **HTML5/CSS3**: Custom layout using Flexbox and CSS Grid.
- **JavaScript (ES6+)**: Vanilla JS for data processing and DOM manipulation.
- **[Chart.js](https://www.chartjs.org/)**: Powering all 10+ data visualizations.
- **Google Fonts**: Inter & JetBrains Mono.

## 📂 Project Structure

```text
dashboard/
└── index.html    # All-in-one SPA (HTML, CSS, JS)
```

## 🚥 Getting Started

Since this is a client-side application with no external dependencies (all libraries are loaded via CDN), you can run it directly:

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.

## 📊 Data Generation

The dashboard uses a built-in synthetic data engine that generates 1,000 unique order records. It includes:
- Weighted random distribution for regions, categories, and segments.
- Year-over-Year (YoY) growth multipliers (2018–2026).
- Seasonal Q1–Q4 adjustments.
- Realistic profit margin calculations based on category and discount impact.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
