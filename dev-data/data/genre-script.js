const fs = require('fs');

const rawMediaData = require('./raw-media-data');

const mediaData = fs.readFileSync(
  `${__dirname}/media-data.json`,
  'utf-8'
);

const addGenresField = (mediaList) => {
  return mediaList.map((media) => {
    const rawMediaIndex = rawMediaData.findIndex(
      (rawMedia) => rawMedia.title === media.title
    );
    const genres = rawMediaData[rawMediaIndex].genres;
    return {
      ...media,
      genres,
    };
  });
};

const removeGenresField = (mediaList) => {
  const newMediaList = [...mediaList];
  newMediaList.map((media) => delete media.genres);
  return newMediaList;
};

const mediaList = JSON.parse(mediaData);
let updatedMedia;
let flag = true;
let message;

if (process.argv[2] === '--add') {
  updatedMedia = addGenresField(mediaList);
  message = 'Genre field succesfully added!';
} else if (process.argv[2] === '--delete') {
  updatedMedia = removeGenresField(mediaList);
  message = 'Genre field succesfully deleted!';
} else {
  flag = false;
}

if (flag) {
  fs.writeFileSync(
    `${__dirname}/media-data.json`,
    JSON.stringify(updatedMedia),
    (err) => {
      console.log(err);
    }
  );
  console.log(message);
} else {
  console.log('Incorrect arguments');
}
