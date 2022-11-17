const mongoose = require('mongoose');

function DBConnection(){
    mongoose
      .connect("mongodb+srv://mdshoaib:7714131214@cluster0.ljmxc6v.mongodb.net/checking")
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch(() => {
        console.log("Failed to connect to MongoDB");
      });
}

module.exports = DBConnection;