const router  =  require('express').Router();
const voucher = require("../controller/voucherController.js");

router.post("/", voucher.create);
router.get("/", voucher.getvouchers);
router.get("/voucher", voucher.getvoucher);
router.put("/update", voucher.updatevoucher);
router.delete("/delete", voucher.deletevoucher);


module.exports = router;