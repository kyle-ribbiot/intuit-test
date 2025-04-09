const QuickBooks = require('node-quickbooks');

function createQBOClient(tokenSet) {
  return new QuickBooks(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    tokenSet.access_token,
    false,
    tokenSet.realmId || process.env.REALM_ID,
    process.env.ENVIRONMENT === 'sandbox',
    true,
    4,
    '2.0'
  );
}

module.exports = createQBOClient;
