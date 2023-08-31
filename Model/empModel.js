const mongoose = require("mongoose")

const empModel= mongoose.model("emps",

{
    empid:{type:Number},
    fname:{type:String},
    lname:{type:String},
    emailid:{type:String},
    mobile:{type:Number},
    city:{type:String}
}
)
module.exports=empModel