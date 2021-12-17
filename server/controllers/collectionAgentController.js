const CollectionAgent = require('../models/collectionAgentModel');

exports.addCollectionAgent = async (req, res) => {
    try {
      console.log(req.body)
      const result = req.body;
      const newCollectionAgent = new CollectionAgent(result);
      CollectionAgent.save((err) => {
        if (err) {
          console.log(err)
          return res.status(500).json({
            error: true,
            message: "Cannot save to database",
          });
        } else {
          return res.status(200).json({
            success: true,
            message: "saved to database successfully",
          });
        }
      });
    } catch (err) {
      return res.status(500).json({
        error: true,
        message: err,
      });
    }
  };
  
  exports.listAllCollectionAgents = async (req,res) =>{
    try {
        CollectionAgent.find((err, collectionAgent) => {
        if (err) {
          return res.status(400).json({
            error: true,
            message: err,
          });
        }
        res.json({
          success: true,
          data: showroom,
        });
      }).populate('user','userId firstName lastName email active profileImageUrl').select("user name phoneNumber location pincode fullAddress vehicleDetails documentUrls");
    } catch (err) {
      return res.status(400).json({
          error: true,
          message:err
      });
    }
  }
  