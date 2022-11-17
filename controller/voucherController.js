const { response } = require("express");
const voucherDetails = require("../models/voucherSchema");

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

  getvouchers = async (req, res) => {
    const response = await voucherDetails.find();
    res.status(200).send(response);
  };

  getvoucher = async (req, res) => {
    const _id = req.query._id;
    const response = await voucherDetails.findOne({ _id: _id });
    res.status(200).send(response);
  };

  updatevoucher = async (req, res) => {
    const id = req.body.id;
    const voucher_name = req.body.voucher_name;
    const response = await voucherDetails.updateMany({ _id: id }, { voucher_name: voucher_name });
    res.status(200).send(response);
  };

  deletevoucher = async (req, res) => {
    const id = req.body.id;
    const response = await voucherDetails.deleteMany({ _id: id });
    res.status(200).send(response);
  };
}

module.exports = new voucher();