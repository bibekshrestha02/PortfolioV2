const detailsModel = require("./../model/detailsModel");

exports.getDetails = async (req, res, next) => {
  try {
    const data = await detailsModel.findOne({});
    res.json({
      status: true,
      data,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};

exports.postDetails = async (req, res, next) => {
  try {
    const { email, name, id } = res;

    const data = {
      email: email,
      name: name,
      introduction: req.body.introduction,
      tags: req.body.tags,
      introDetails: req.body.introDetails,
      about: req.body.about,
      skills: req.body.skills,
      projects: req.body.projects,
      admin: id,
    };

    const result = await detailsModel.create(data);
    res.json({
      status: true,
      result,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};
exports.updateDetails = async (req, res, next) => {
  try {
    const { id } = res;

    const data = {
      introduction: req.body.introduction,
      tags: req.body.tags,
      introDetails: req.body.introDetails,
      about: req.body.about,
      skills: req.body.skills,
      projects: req.body.projects,
    };

    const result = await detailsModel.findOneAndUpdate({ admin: id }, data, {
      multi: true,
    });
    res.json({
      status: true,
      result,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};
exports.updatePhoto = async (req, res) => {
  try {
    const { id } = res;
    const fileName = "/Images/" + req.file.filename;
    const result = await detailsModel.findOneAndUpdate(
      { admin: id },
      { photo: fileName },
      {
        useFindAndModify: false,
      }
    );
    res.json({
      status: true,
      result,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};
