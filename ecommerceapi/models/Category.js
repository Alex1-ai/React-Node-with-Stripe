const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema(
    {
        title: { type: String, unqiue:true, required: true},
        img:{type:String, required:true,}
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model("Category",CategorySchema)