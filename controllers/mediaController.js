const Media = require('../models/mediaModel');
const Review = require('../models/reviewsModel');
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
    // UPDATE watchlist for users who have that media in their watchlist
    // await User.updateMany(
    //   {
    //     $or: [
    //       { watched: { _id: req.params.id } },
    //       { toWatch: { _id: req.params.id } },
    //     ],
    //   },
    //   {
    //     $pull: {
    //       watched: { _id: req.params.id },
    //       toWatch: { _id: req.params.id },
    //     },
    //   }
    // );
    // const users = await User.find({
    //   $or: [
    //     { watched: { _id: req.params.id } },
    //     { toWatch: { _id: req.params.id } },
    //   ],
    // });
    // console.log(users);

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

/*
        "_id": "645b4ac5f245634dd184e296",
        "title": "Apocalypse Now",
        "type": "Movie",
        "yearReleased": 1979,
        "rating": 5,
        "image": "apocalypse-now.jpg",
        "genres": [
            "Adventure",
            "History",
            "Thriller"
        ]
*/
