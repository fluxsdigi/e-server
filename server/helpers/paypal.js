const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASC2RWdlAe6cmheruI3Gjnv0PW7z10lFqmzpIaCjTU246MvFgOg9sTxA4dlGbJ8CNPufHkET3Khsasxy",
  client_secret: "EP0ajP27MPoW06bL-j0cFPylnXjvmx1fqqO-vt2jJzH4xWc8yOeD1cp1Uffl3MenTXr2iLgQnh2AImUt",
});

module.exports = paypal;
