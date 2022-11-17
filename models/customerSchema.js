const mongoose = require("mongoose");

const customer = new mongoose.Schema({
  name:{ 
    type:String,},
 email: {
  type:String},
  contact_number:{
    type:Number},
    voucher_id:{
      type:String},
});

const customerDetails = new mongoose.model('customer', customer);

module.exports = customerDetails;