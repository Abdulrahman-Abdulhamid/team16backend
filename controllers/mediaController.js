const Media = require('../models/mediaModel');

exports.getAllMedia = async (req, res) => {
  try {
    // 1) FILTERING
    let query = Media.find(req.query);

    // 2) Sorting
    if (req.query.sort) {
      query = query.sort(req.query.sort);
    } else {
      query = query.sort('-rating');
    }

    // 3) Limiting Fields - NOT WORKING
    // if (req.query.fields) {
    //   const fields = req.query.fields.split(',').join(' ');
    //   console.log(fields);
    //   query = query.select(fields);
    // } else {
    //   query = query.select('-__v');
    // }

    const media = await query;

    res.status(200).json({
      status: 'success',
      results: media.length,
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

exports.getMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

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
