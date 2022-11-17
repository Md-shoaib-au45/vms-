const express = require("express");
const app = express();
const port = 3000;

const DBConnection = require("./db/db_connection")


const voucherRouter = require("./routes/voucher_routes");
const costumerRouter = require("./routes/customer_routes");
const voucherGenRouter = require("./routes/voucher_redemption_routes")

DBConnection();
app.use(express.json());

app.use(voucherRouter);
app.use(costumerRouter);
app.use(voucherGenRouter)


// app.listen(port, () => {
//   console.log(` app listening on port ${port}`);
// });

module.exports={
  app
}