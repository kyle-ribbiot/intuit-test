require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const oauthClient = require('./quickbooks/oauth');
const createQBOClient = require('./quickbooks/client');
const getOrCreateCustomer = require('./services/customerService'); // ✅ updated
const createInvoice = require('./services/invoiceService');
const getSampleInvoice = require('./sample-data/detailed-invoice'); // ✅ updated

// Homepage for quick testing
app.get('/', (req, res) => {
  res.send(`
    <h2>🚀 QuickBooks Invoice Integration</h2>
    <ul>
      <li><a href="/authUri">🔐 Start OAuth</a></li>
      <li><a href="/create-detailed-invoice">🧾 Create Sample Invoice</a></li>
    </ul>
  `);
});

// OAuth authorization URL
app.get('/authUri', (req, res) => {
  const authUri = oauthClient.authorizeUri({
    scope: ['com.intuit.quickbooks.accounting'],
  });
  res.redirect(authUri);
});

// OAuth callback handler
app.get('/callback', async (req, res) => {
  try {
    const token = await oauthClient.createToken(req.url);
    oauthClient.token.setToken(token.getJson()); // ✅ Store token for future use
    console.log('🔑 Access Token:', token.getJson());
    res.send('✅ OAuth successful! You can now call /create-detailed-invoice');
  } catch (err) {
    console.error(err);
    res.status(500).send('OAuth failed');
  }
});

// Create a detailed invoice with custom items and notes
app.get('/create-detailed-invoice', async (req, res) => {
  try {
    const tokenSet = oauthClient.getToken();
    const qbo = createQBOClient(tokenSet);

    const customer = await getOrCreateCustomer(qbo);
    const invoiceData = getSampleInvoice(customer.Id);
    const invoice = await createInvoice(qbo, invoiceData);

    res.json({ invoice });
  } catch (e) {
    console.error(e);
    res.status(500).send("❌ Failed to create invoice");
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
