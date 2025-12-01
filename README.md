# 📱 Currency Converter – Platform Development Tools Project
**IT 208 – Platform-Based Project Implementation**  
**BSIT 2nd Year • 1st Semester, AY 2025–2026**

---

## 📌 Project Overview
This project is a **Currency Converter Web Application** built using **HTML, CSS, JavaScript, and Bootstrap**.  
It demonstrates the use of **Platform Development Tools**, specifically **API integration**, responsive UI design, and mobile-first development practices.

The app fetches **real-time exchange rates** from the **ExchangeRate API** and converts values between different currencies in a clean, user-friendly interface.

---

## 🎯 Objectives
This project fulfills the objectives of the Platform Development Tools category:

- **Apply programming tools and APIs** — Utilizes a public exchange-rate API to fetch live data.
- **Develop a functional prototype** — Allows users to convert any amount between multiple currencies.
- **Demonstrate front-end platform skills** — Built using mobile-first principles with Bootstrap.
- **Follow secure and organized development practices** — Clean structure, minimal custom CSS, proper API handling, and user input validation.

---

## 🚀 Features
- **Real-time Currency Conversion** using ExchangeRate API  
- **Mobile-first responsive design** (optimized for all screen sizes)  
- **Bootstrap 5 UI** for a clean, modern appearance  
- **Swap button** to quickly switch currencies  
- **Loading spinner** while fetching data  
- **Validation & error handling**  
- **Minimal custom CSS** (follows project constraints)  
- Compact layout (not stretched on desktop)

---

## 🛠️ Tools & Technologies Used
| Tool / Technology | Purpose |
|------------------|---------|
| **HTML5** | App structure |
| **CSS3 + Minimal Custom CSS** | Light styling |
| **Bootstrap 5** | Mobile-first layout, components |
| **JavaScript (ES6)** | Logic, API integration |
| **ExchangeRate API (free)** | Live currency data |
| **Bootstrap Icons** | UI icons |

---

## 📡 API Used
The project uses:

[https://open.er-api.com/v6/latest/USD](https://open.er-api.com/v6/latest/USD)

This provides a JSON list of currency rates relative to USD.

---

## 📱 How It Works
1. On page load, the app fetches all exchange rates via API.  
2. Currencies populate the **From** and **To** dropdowns.  
3. User enters an amount.  
4. When clicking **Convert**, the app:
   - Validates user input  
   - Calculates the converted amount using the latest rates  
   - Displays the result with two-decimal precision  
5. The user can also **swap currencies** with a single click.

---

## 🧩 System Flow
**Input → API Rates → Conversion Formula → Output**

Formula used:

```javascript

convertedAmount = (amount / rate[from]) * rate[to]

```

---

## 📂 Project Structure

```

currency-converter/
│
├── index.html      # Main application file
├── script.js       # Main JavaScript file for functionality
├── style.css       # File that contains styles of the application
└── README.md       # Documentation

```

<!-- *(Add `/screenshots` or extra files if you include them later.)* -->

---

## 🎨 User Interface (UI)
The UI follows these principles:
- Centered, non-stretched card on desktop  
- Touch-friendly spacing  
- Clean layout with recognizable labels  
- Light color palette for readability  
- Professional design using Bootstrap components  

---

<!-- ## 📷 Screenshots (Optional) -->
<!-- Add these when you take screenshots: -->
<!---->
<!-- ``` -->
<!---->
<!-- /screenshots -->
<!-- - home-mobile.png -->
<!-- - home-desktop.png -->
<!-- - conversion-result.png -->
<!---->
<!-- ``` -->

---

## ⚙️ Installation & Usage

### 2. Open the project
Open `index.html` in any modern web browser.

### 3. Ensure internet connection
API requires online access.

---

## 🧪 Testing Procedures
During testing, verify that:

- [x] API loads successfully  
- [x] Dropdown values populate  
- [ ] Amount input validates properly  
- [ ] Conversion is correct  
- [x] Swap button works  
- [ ] App works on mobile, tablet, and desktop  
- [ ] Error messages appear for invalid inputs  

---

## 🛡️ Ethical Considerations
- No personal data collected  
- API used is public and safe  
- Code is original (except Bootstrap & API)  
- Fully compliant with academic integrity  
- No harmful content  

---

## 📚 References
- Bootstrap 5 Documentation  
- ExchangeRate API Documentation  
- MDN Web Docs (JavaScript)  

---

## 👥 Developed By
**Group #: 1**  
**Course:** IT 208 – Platform Technology  
**Instructor:** RANDLY B. MALABAD  
**Semester:** 1st Semester, AY 2025–2026

Roles (sample):
- Developer / API Integration – Kian Ulep
- UI/UX Designer – Name  
- Documentation & Testing – Julius Cayaban

---

## ✅ Status
**✔ Completed – Ready for submission and presentation**

Thank you for checking out this project!
