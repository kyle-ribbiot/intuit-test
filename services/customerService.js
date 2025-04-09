module.exports = async function getOrCreateCustomer(qbo) {
    const displayName = "Lakeshore Industries";
  
    return new Promise((resolve, reject) => {
      qbo.findCustomers([{ field: 'DisplayName', value: displayName, operator: '=' }], (err, result) => {
        if (err) return reject(err);
  
        if (result.QueryResponse.Customer && result.QueryResponse.Customer.length > 0) {
          console.log("✅ Customer already exists");
          return resolve(result.QueryResponse.Customer[0]);
        }
  
        const newCustomer = {
          DisplayName: displayName,
          PrimaryEmailAddr: { Address: "sally.r@lakeshoreindustries.com" },
          BillAddr: {
            Line1: "950 Progress St",
            City: "Pittsburgh",
            CountrySubDivisionCode: "PA",
            PostalCode: "15210",
          },
          PrimaryPhone: { FreeFormNumber: "412 492 9870" },
          Notes: "Contact: Sally Roethlisberger",
        };
  
        qbo.createCustomer(newCustomer, (err, customer) => {
          if (err) return reject(err);
          console.log("✅ Created new customer");
          resolve(customer);
        });
      });
    });
  };
  