module.exports = async function createInvoice(qbo, invoiceData) {
    return new Promise((resolve, reject) => {
      qbo.createInvoice(invoiceData, (err, invoice) => {
        if (err) return reject(err);
        resolve(invoice);
      });
    });
  };
  