const mongoose = require("mongoose")


const OrderSchema = new mongoose.Schema(
    {
        userId:{
            type:String, required: true

        },
        products: [
            {
                productId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    default:1,
                }
            }
        ],
        amount: {type:Number, required: true},
        address: {type: Object, required: true},
<<<<<<< HEAD
        status:{type:String, default: "pending"}
=======
        status:{type:String, default: "pending"},
>>>>>>> new
    
       
    
    }, {
        timestamps: true
    }
)


module.exports = mongoose.model("Order", OrderSchema)  