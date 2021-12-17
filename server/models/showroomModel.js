const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const showroomSchema = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:'User',
        required:true
    },
    showroomName:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        default:null,
        required:true
    },
    location:{
        type:String,
        default:null,
        required:true
    },
    pincode:{
        type:Number,
        default:null
    },
    fullAddress:{
        type:String,
        default:null,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    documentUrls:[{
        aadhar:{
            type:String,
            required:true
        },
        panCard:{
            type:String,
            required:true
        },
        others:{
            type:String,
        }        
    }],
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updated:Date,
});

module.exports = mongoose.model("Showroom", showroomSchema);