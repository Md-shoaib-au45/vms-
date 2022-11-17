const router  =  require('express').Router();
const voucher = require("../controller/voucher_redemption_Controller.js");

router.post("/add_voucher", voucher.create);
router.get("/get_voucher",voucher.getVouchers)


module.exports = router;