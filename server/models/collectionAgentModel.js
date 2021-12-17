const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const collectionAgentSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  
  name: {
    type: String,
    require: true,
  },

  phoneNumber: {
    type: String,
    default: null,
    required: true,
  },

  location: {
    type: String,
    default: null,
    required: true,
  },

  pincode: {
    type: Number,
    default: null,
  },

  fullAddress: {
    type: String,
    default: null,
    required: true,
  },

  vehicleDetails: [
    {
      dlNo: {
        type: String,
        required: true,
      },
      vehicleNumber: {
        type: String,
        required: true,
      },
    }],

  documentUrls: [
    {
      aadhar: {
        type: String,
        required: true,
      },
      panCard: {
        type: String,
        required: true,
      },
      dl: {
        type: String,
        required: true,
      },
    }],

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

module.exports = mongoose.model("CollectionAgent", collectionAgentSchema);
