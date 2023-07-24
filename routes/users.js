var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/chattask").then(function(){
  console.log("database connected")
})

const chatSchema = mongoose.Schema({
      user : String,
    
})

module.exports = mongoose.model("chat",chatSchema)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
