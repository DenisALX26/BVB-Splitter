# 📊 BVB Splitter

A web application that calculates the optimal investment distribution across the companies in the BET index, based on the official weights published by the Bucharest Stock Exchange (BVB).

---

## 🧱 Project Structure

```
.
├── backend/           # FastAPI + Selenium Web Scraper
├── frontend/          # React + Tailwind CSS
├── .gitignore
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Python 3.10+](https://www.python.org/downloads/)
- [Node.js + npm](https://nodejs.org/)
- (Optional) [nvm](https://github.com/nvm-sh/nvm)
- [Git](https://git-scm.com/)
- [ChromeDriver / GeckoDriver / EdgeDriver](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/) (required by Selenium)

---

## 🔧 Backend Setup

```bash
cd backend
```

1. **Create and activate a virtual environment:**

```bash
python -m venv venv
source venv/bin/activate    # on Linux/macOS
venv\Scripts\activate     # on Windows
```

2. **Install required packages:**

```bash
pip install -r requirements.txt
```

3. **Run the FastAPI server:**

```bash
cd app
uvicorn main:app --reload
```

> The backend will be available at: http://127.0.0.1:8000

---

## 🖥️ Frontend Setup

```bash
cd frontend
```

1. **Install npm dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

> The frontend will be available at: http://localhost:5173

---

## 🚀 How It Works

- The Selenium-based web scraper fetches official BET index data from BVB’s site and generates `companies.json`.
- The backend provides an API with two endpoints:
  - `/minimum` → returns the minimum required investment
  - `/results` → receives an amount and returns the optimal investment distribution
- The frontend lets the user input an amount and shows a company-wise breakdown table.

---

## 📎 Additional Notes

- Uses `react-toastify` for frontend notifications.
- Tailwind CSS manages all styling.
- React uses `Vite` for optimal performance.
- `.vite` and other cache folders are ignored via `.gitignore`.

---

## 👨‍💻 Author

Built by Neacșa-Serafimescu Denis-Alexandru
