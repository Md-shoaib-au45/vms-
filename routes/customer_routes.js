const router  =  require('express').Router();
const customer = require("../controller/customerController.js");

router.post("/", customer.create);
router.get("/", customer.getcustomers);
router.get("/customer", customer.getcustomer);
router.put("/update", customer.updatecustomer);
router.delete("/delete", customer.deletecustomer);


module.exports = router;