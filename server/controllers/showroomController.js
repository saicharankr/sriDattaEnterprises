const Showroom = require("../models/showroomModel");

exports.addShowroom = async (req, res) => {
  try {
    console.log(req.body)
    const result = req.body;
    const newShowroom = new Showroom(result);
    newShowroom.save((err) => {
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

exports.listAllShowrooms = async (req,res) =>{
  try {
    Showroom.find((err, showroom) => {
      if (err) {
        return res.status(400).json({
          error: true,
          message: err,
        });
      }
      return res.json({
        success: true,
        data: showroom,
      });
    }).populate('user','userId firstName lastName email active profileImageUrl').select("showroomName phoneNumber location");
  } catch (err) {
    return res.status(400).json({
        error: true,
        message:err
    });
  }
}

exports.searchAllShowrooms = async (req, res) => {
  console.log(req.query)
  var searchString = req.query.search;
  var type = req.query.type;
  try {
    if (type == "name") {
      Showroom.find(
        { showroomName: { $regex: searchString, $options: "i" } },
        (err, result) => {
          if (err) {
            return res.status(400).json({
              error: true,
              message: err,
            });
          }
          return res.json({
            success: true,
            data: result,
          });
        }
      ).populate('user','userId firstName lastName email active profileImageUrl').select("showroomName phoneNumber location");
    }else if(type == "loc"){
      Showroom.find(
        { location: { $regex: searchString, $options: "i" } },
        (err, result) => {
          if (err) {
            return res.status(400).json({
              error: true,
              message: err,
            });
          }
          return res.json({
            success: true,
            data: result,
          });
        }
      ).populate('user','userId firstName lastName email active profileImageUrl').select("showroomName phoneNumber location");
    }
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err,
    });
  }
};