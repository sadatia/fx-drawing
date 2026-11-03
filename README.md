# 📈 SADATIA FX Drawing Board

A lightweight, high-performance financial technical analysis whiteboard and annotation tool built with **React**, **Tailwind CSS**, and **SVG**. Designed for quick Smart Money Concepts (SMC) charting, technical markup, and position risk modeling.

---

## ✨ Features

- **🎯 SMC Annotation Ribbon:** One-click tags for `BOS`, `CHoCH`, `FVG`, `OB`, `MB`, `SSL`, `BSL`, `EQH/EQL`, and `PO3`.
- **🖐️ Dynamic Infinite Canvas:** Smooth pan and zoom capabilities using the **Hand Tool (`H`)** or **`Spacebar` + Click & Drag**.
- **📐 Smart Fibonacci Retracement:** Dynamic Fibonacci level rendering ($0.0\%, 23.6\%, 38.2\%, 50.0\%, 61.8\%, 78.6\%, 100.0\%$).
- **⚖️ Position Risk/Reward Calculator:** Visual Long/Short position tool with real-time portfolio risk calculation ($ and % target/stop metrics).
- **✍️ Freehand & Vector Drawing Tools:**
  - Freehand Line Sketch & Freehand Candlestick Pen
  - Multi-point Trend Path Tool
  - Trend Lines, Horizontal Lines & Rays
  - Parallel Channels & Rectangle Zones
  - Price Distance Ruler
- **🎨 Theme Customization:** Dark and light canvas themes with grid snap support.
- **📸 Snapshot Export:** High-resolution PNG chart export directly from SVG rendering.

---

## ⌨️ Keyboard Shortcuts

| Tool / Action | Shortcut |
| :--- | :--- |
| **Select & Move** | `V` |
| **Pan / Hand Tool** | `H` *(or hold `Space` + Drag)* |
| **Text Note / SMC Tag** | `T` |
| **Freehand Pencil** | `P` |
| **Candlestick Pen** | `C` |
| **Risk / Reward Setup** | `R` |
| **Price Distance Ruler** | `M` |
| **Trend Line** | `L` |
| **Trend Path Tool** | `W` |
| **Horizontal Ray** | `Y` |
| **Parallel Channel** | `A` |
| **Rectangle Zone** | `E` |
| **Fibonacci Grid** | `F` |
| **Eraser** | `X` |
| **Cancel / Reset** | `Esc` |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.x or later)
- **npm** (v9.x or later)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/sadatia/fx-drawing.git](https://github.com/sadatia/fx-drawing.git)
   cd fx-drawing



   Install dependencies:
   Bash
    npm install
    Start development server:

    Bash
    npm run dev

    Bash
    npm install
    Start development server:

    Bash
    npm run dev
    Build for production:

    Bash
    npm run build


---
## 🌐 Production Deployment (Nginx Example)
    To build and deploy on an Ubuntu server running Nginx:

    Bash
    # Build production bundle
    npm run build

    # Deploy to Nginx web root
    sudo rm -rf /var/www/sadatia/*
    sudo cp -r dist/* /var/www/sadatia/
    sudo chown -R www-data:www-data /var/www/sadatia
    sudo systemctl reload nginx

---
## 🛠️ Built With
React - UI Component Library

Tailwind CSS - Utility-first CSS framework

Vite - Next-generation frontend tooling


---
## 📄 License
This project is open-source and available under the MIT License.


    ---

    ### Step-by-Step Instructions to Save It to Your Server & GitHub

    Run the following commands in your Ubuntu terminal (`~/sadatia-app`):

    ```bash
    cd ~/sadatia-app

    # 1. Create/Overwrite README.md with the content above
    nano README.md
    # (Paste the markdown content, press Ctrl+O, Enter, Ctrl+X)

    # 2. Stage, commit, and push to GitHub
    git add README.md
    git commit -m "docs: add detailed README.md file"
    git push