const contactModel = require("./../model/contactModel");

exports.getMessage = async (req, res) => {
  try {
    const message = await contactModel.find({}).sort({ date: 1 });
    res.json({
      status: true,
      message,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};
exports.postMessage = async (req, res) => {
  try {
    const data = {
      email: req.body.email,
      name: req.body.name,
      message: req.body.message,
    };
    await contactModel.create(data);
    res.json({
      status: true,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};
exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await contactModel.findByIdAndDelete({ _id: id });
    res.json({
      status: true,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};
