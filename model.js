const mongoose = require("mongoose");
const schema = mongoose.Schema;

const  userSchema = new schema({
  name: {
    type: String,
  },
});

module.exports=mongoose.model('pujitha',userSchema);
