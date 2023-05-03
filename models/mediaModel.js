const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Media must have a title"],
    unique: [true, "Media must have a unique title"],
    trim: true,
  },
  type: {
    type: String,
    required: [true, "Media must have a type"],
  },
  yearReleased: {
    type: Number,
    required: [true, "Media must have a release year"],
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;

/*
        title: "2001 A Space Odyssey",
        type: "Movie",
        yearReleased: 1968,
        rating: 5,
        image: require("./imgs/media-covers/2001_a_space_odyssey.jpg"),
        genres: ["Adventure", "Drama", "Science Fiction", "Thriller"],
        movieId: nanoid()
*/
