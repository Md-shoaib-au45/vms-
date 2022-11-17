const mongoose = require("mongoose");

const voucher = new mongoose.Schema({
  voucher_name:{ 
    type:String,
  },
  voucher_id: {
  type:String},
  voucher_status:{
    type:String
  },
  voucher_type:{
    type:String
  },
  brand_name:{
    type:String
  },                             //voucher_name,voucher_id,voucher_status,voucher_type,brand_name
});

const voucherDetails = new mongoose.model('voucher', voucher);

module.exports = voucherDetails;