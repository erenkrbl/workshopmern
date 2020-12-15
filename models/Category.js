const mongoose = require("mongoose");

const {Schema} = mongoose;

const schema = new Schema({
    categoryName:{
        type:String,
        required:true,
    },
    status:{
        style:String,
        default:"created",
    },
    description:{
        type:String,
    },
    createDate:{
        type:Date,
        default:Date.now,
    },
    updatedDate:{
        type:Date,
    },
    deletedDate:{
        type:Date,
    }
});

module.exports = Category = mongoose.model("Category", schema);