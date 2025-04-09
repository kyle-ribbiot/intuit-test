# 🧾 QuickBooks Invoice Integration (Node.js + Express)

This project demonstrates how to connect a sample invoicing system to **Intuit QuickBooks Online** using OAuth2 and the QuickBooks Accounting API. Built with:

- Node.js
- Express
- `intuit-oauth`
- `node-quickbooks`

---

## 🚀 What It Does

✅ Authenticates a user via QuickBooks OAuth 2.0  
✅ Creates a customer (if not already exists)  
✅ Pushes a **sample invoice** based on real-world invoice structure  
✅ Fully tested in the **Intuit Sandbox Environment**

---

## 🔧 Project Setup

### 1. Clone & Install

```bash
git clone https://github.com/kyle-ribbiot/intuit-test
cd intuit-test
npm install
```

### 2. Create a `.env` file

```env
CLIENT_ID=your_quickbooks_client_id
CLIENT_SECRET=your_quickbooks_client_secret
REDIRECT_URI=http://localhost:3000/callback
ENVIRONMENT=sandbox
```

You can get these values from your app in [developer.intuit.com](https://developer.intuit.com).

---

## ▶️ Running Locally

```bash
node server.js
```

Then open your browser and visit:

- `http://localhost:3000/` – Homepage
- `http://localhost:3000/authUri` – Starts the OAuth flow
- `http://localhost:3000/create-detailed-invoice` – Creates a realistic invoice in QuickBooks Sandbox

---

## 🛠 Folder Structure

```
intuit-test/
├── package.json
├── package-lock.json
├── README.md
├── server.js
├── .env
├── sample-data/
│   └── detailed-invoice.js
├── services/
│   ├── customerService.js
│   └── invoiceService.js
├── quickbooks/
│   ├── oauth.js
│   └── client.js
```

## ✅ Moving to Production

For a production rollout, we need to:

- Switch `ENVIRONMENT=production`
- Add `https://yourdomain.com/callback` to your Intuit app's redirect URIs
- Use your **production keys**
- Securely store and refresh access tokens
- Use real customer/item references from your QBO account
