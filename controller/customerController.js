const { response } = require("express");
const customerDetails = require("../models/customerSchema");

class customer {
  create = async (req, res) => {
    try {
      const { name, email, contact_number ,voucher_id} = req.body;
      if (!name) {
        throw {
          message: "Please re_enter a name",
        };
      }
      if(!email){
         throw {
           message: "Please re_enter a email",
         };
      }
      if(!contact_number){
        throw {
          message: "Please re_enter a contact_number",
        };  
     }
     if(!voucher_id){
      throw {
        message: "Please re_enter a voucher_id",
      };  
   }
      const response = await customerDetails.create({ name, email, contact_number,voucher_id });
      res.status(200).send({
        status: true,
        response: response,
       message: "Successfully Created customer",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getcustomers = async (req, res) => {
    const response = await customerDetails.find();
    res.status(200).send(response);
  };

  getcustomer = async (req, res) => {
    const _id = req.query._id;
    const response = await customerDetails.findOne({ _id: _id });
    res.status(200).send(response);
  };

  updatecustomer = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const response = await customerDetails.updateMany({ _id: id }, { name: name });
    res.status(200).send(response);
  };

  deletecustomer = async (req, res) => {
    const id = req.body.id;
    const response = await customerDetails.deleteMany({ _id: id });
    res.status(200).send(response);
  };
}

module.exports = new customer();