const Media = require('../models/mediaModel');
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getUserWatchlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    let watchlist;
    if (req.params.watchlist === 'toWatch') {
      watchlist = user.toWatch;
    } else if (req.params.watchlist === 'watched') {
      watchlist = user.watched;
    }

    if (!watchlist) {
      throw new Error('Invalid watchlist type');
    }

    const watchedMedia = await Media.find()
      .where('_id')
      .in(watchlist);

    res.status(200).json({
      status: 'success',
      data: {
        watchedMedia,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getUserWatchlists = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        watched: user.watched,
        toWatch: user.toWatch,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateUserWatched = async (req, res) => {
  try {
    const updateduser = await User.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        watched: req.body,
      }
    );

    res.status(201).json({
      status: 'success',
      data: {
        updateduser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.addtoWatched = async (req, res) => {
  try {
    const media = await Media.findById(req.params.mediaid);

    const updateduser = await User.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: {
          watched: {
            ...media,
          },
        },
      }
    );

    res.status(201).json({
      status: 'success',
      data: {
        updateduser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.removeFromWatchlist = async (req, res) => {
  try {
    const watchlist = req.params.watchlist;
    if (watchlist === 'watched') {
      await User.updateOne(
        {
          _id: req.params.id,
        },
        {
          $pull: {
            watched: req.params.mediaid,
          },
        }
      );
    } else if (watchlist === 'toWatch') {
      await User.updateOne(
        {
          _id: req.params.id,
        },
        {
          $pull: {
            toWatch: req.params.mediaid,
          },
        }
      );
    } else {
      throw new Error('Invalid watchlist');
    }

    const updatedUser = await User.findById(req.params.id);

    res.status(201).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
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
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

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
