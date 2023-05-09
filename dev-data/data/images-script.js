const fs = require('fs');
const slugify = require('slugify');

const mediaData = fs.readFileSync(
  `${__dirname}/media-data.json`,
  'utf-8'
);

const slugifyTitle = (title) => {
  return slugify(title, {
    lower: true,
  });
};

const addMediaField = (mediaList) => {
  return mediaList.map((media) => {
    return {
      ...media,
      image: `${slugifyTitle(media.title)}.jpg`,
    };
  });
};

const removeMediaField = (mediaList) => {
  const newMediaList = [...mediaList];
  newMediaList.map((media) => delete media.image);
  return newMediaList;
};

const mediaList = JSON.parse(mediaData);
let updatedMedia;
let flag = true;
let message;

if (process.argv[2] === '--add') {
  updatedMedia = addMediaField(mediaList);
  message = 'Image field succesfully added!';
} else if (process.argv[2] === '--delete') {
  updatedMedia = removeMediaField(mediaList);
  message = 'Image field succesfully deleted!';
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
