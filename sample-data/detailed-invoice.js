
module.exports = (customerId) => ({
    CustomerRef: { value: customerId },
  
    TxnDate: "2025-01-01", // Invoice Date
    DueDate: "2025-02-16", // Net 30 Terms
  
    Line: [
      {
        Amount: 5000,
        Description: "Mobilization and Demobilization - Includes transportation of crane and related equipment to and from the site",
        DetailType: "SalesItemLineDetail",
        SalesItemLineDetail: {
          ItemRef: { value: "1", name: "Mobilization and Demobilization" },
          Qty: 1,
          UnitPrice: 5000,
          ServiceDate: "2025-01-01",
        },
      },
      {
        Amount: 10000,
        Description: "200 Ton Crane - Includes operator, setup, and rigging crew for lifting power skids to the second story",
        DetailType: "SalesItemLineDetail",
        SalesItemLineDetail: {
          ItemRef: { value: "2", name: "200 Ton Crane" },
          Qty: 1,
          UnitPrice: 10000,
          ServiceDate: "2025-01-01",
        },
      },
      {
        Amount: 1500,
        Description: "Rolling Blocks and Chain Falls - Used to safely drift power skids into position inside the building.",
        DetailType: "SalesItemLineDetail",
        SalesItemLineDetail: {
          ItemRef: { value: "3", name: "Rolling Blocks and Chain Falls" },
          Qty: 1,
          UnitPrice: 1500,
          ServiceDate: "2025-01-01",
        },
      },
    ],
  
    PrivateNote:
      "Tower Crane Erect job for Lakeshore Industries. Division: Crane Service. Branch: Long Beach.\n\n" +
      "Job Notes:\n" +
      "Set girders on the south bound & north bound I-5 freeway\n" +
      "Los Aliso Bridge:\n" +
      "Night One:\n" +
      "7:30 pm Crane, oiler, and Y guy installed in Laguna Hills mall\n" +
      "8:30 pm Crane and oiler roll into median HOV and #1 lane to build up\n" +
      "8:45 pm Other 3rd men show up in HOV lane to building up on I-5 freeway\n" +
      "10:45 pm Ironworkers show up",
  });
  