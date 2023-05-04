const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const Media = require('../../models/mediaModel');
const User = require('../../models/userModel');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewURLParser: true,
  })
  .then(() => console.log('DB connection succesful!'));

// READ JSON FILE

const media = JSON.parse(
  fs.readFileSync(`${__dirname}/media-data.json`, `utf-8`)
);

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/user-data.json`, `utf-8`)
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    if (process.argv[2] == `media`) {
      await Media.create(media);
    } else if (process.argv[2] == `users`) {
      await User.create(users);
    } else {
      throw new Error('Invalid args');
    }
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    if (process.argv[2] == `media`) {
      await Media.deleteMany();
    } else if (process.argv[2] == `users`) {
      await User.deleteMany();
    } else {
      throw new Error('Invalid args');
    }

    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[3] == `--import`) {
  importData();
} else if (process.argv[3] == `--delete`) {
  deleteData();
}

console.log(process.argv);
