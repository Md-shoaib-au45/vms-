const { response } = require("express");
const voucherDetails = require("../models/voucher_redemption_Schema");

class voucher {
  create = async (req, res) => {
    try {
      const { voucher_name,voucher_id,voucher_status,voucher_type,brand_name } = req.body;
      if (!voucher_name) {
        throw {
          message: "Please re_enter a voucher_name",
        };
      }
      if(!voucher_id){
         throw {
           message: "Please re_enter a voucher_id",
         };
      }
      if(!voucher_type){
        throw {
          message: "Please re_enter a voucher_type",
        };
     }
     if(!brand_name){
      throw {
        message: "Please re_enter a brand_name",
      };
   }
      if(!voucher_status){
        throw {
          message: "Please re_enter a voucher_status",
        };
   
     }
      const response = await voucherDetails.create({ voucher_name,voucher_id,voucher_status,voucher_type,brand_name });
      res.status(200).send({
        status: true,
        response: response,
        message: "Successfully Created voucher",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };
 
  getVouchers = async(req,res) =>{
    const response = await voucherDetails.find().populate()
    res.status(200).send(response)
  }

  
}

module.exports = new voucher();