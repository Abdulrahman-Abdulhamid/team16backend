const Media = require('../models/mediaModel');
const User = require('../models/userModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllMedia = async (req, res) => {
  try {
    const features = new APIFeatures(
      Media.find(),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .search();

    const media = await features.query;

    res.status(200).json({
      status: 'success',
      results: media.length,
      data: media,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: media,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getMediaByImage = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'in process',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getMediaByGenre = async (req, res) => {
  try {
    const genreType = req.params.genreType.replace(
      '-',
      ' '
    );

    const media = await Media.find({
      genres: { $in: genreType },
    });
    res.status(201).json({
      status: 'success',
      data: {
        results: media.length,
        media,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createMedia = async (req, res) => {
  try {
    const newMedia = await Media.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        media: newMedia,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        media,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    await User.updateMany(
      {},
      {
        $pull: {
          watched: { title: media.title },
          toWatch: { title: media.title },
        },
      }
    );

    await Media.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
