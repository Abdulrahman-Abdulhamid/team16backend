const express = require("express");
const mediaController = require("../controllers/mediaController");

const router = express.Router();

router
  .route("/")
  .get(mediaController.getAllMedia)
  .post(mediaController.createMedia);

router
  .route("/:id")
  .get(mediaController.getMedia)
  .patch(mediaController.updateMedia)
  .delete(mediaController.deleteMedia);

module.exports = router;
