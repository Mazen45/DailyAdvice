# Daily Advice 🎯

A lightweight web app that delivers a fresh piece of advice every time you reload the page.

## Live Demo

[dailyadvice.onrender.com](https://dailyadvice.onrender.com)

## About

Daily Advice fetches a random advice slip from the [Advice Slip API](https://api.adviceslip.com) on every page load and displays it to the user. Simple, fast, and always something new.

## Tech Stack

- **Node.js** — runtime environment
- **Express** — web server and routing
- **EJS** — server-side templating
- **Axios** — HTTP client for API requests
- **CSS** — styling

## How It Works

1. User loads the page
2. Express server makes a GET request to `https://api.adviceslip.com/advice` via Axios
3. The API returns a random advice slip as JSON
4. Express passes the advice to the EJS template
5. The rendered page is sent to the user

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/daily-advice.git

# Navigate into the project
cd daily-advice

# Install dependencies
npm install

# Start the server
node index.js
```

Then open your browser and go to `http://localhost:3000`

## API Reference

This project uses the [Advice Slip API](https://api.adviceslip.com) — a free, open API that requires no authentication.

| Endpoint | Method | Description |
|---|---|---|
| `/advice` | GET | Returns a random advice slip |

Example response:
```json
{
  "slip": {
    "id": 117,
    "advice": "Don't forget to drink water."
  }
}
```

## Project Structure

```
daily-advice/
├── views/
│   └── index.ejs       # Main template
├── public/             # Static assets (CSS)
├── index.js            # Express server
└── package.json
```

## License

This project is open source and available under the [MIT License](LICENSE).
