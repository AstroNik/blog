const express = require('express');
const path = require('path');
const Posts = require('../db/models/post');
const router = express.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const fileEndpoint = "https://" + process.env.DO_SPACE_NAME + "." + process.env.DO_SPACE_ENDPOINT + "/blog/";

const space = new aws.S3({
  endpoint: process.env.DO_SPACE_ENDPOINT,
  useAccelerateEndpoint: false,
  credentials: new aws.Credentials(process.env.DO_SPACE_KEY, process.env.DO_SPACE_SECRET, null)
});

const bucket = process.env.DO_SPACE_NAME;

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '../client/dist/', 'index.html'));
});

router.get("/getLatestPosts", async (req, res) => {
  console.log("Awaiting response from DB - getLatestPosts");
  const posts = await Posts.find().sort({ _id: -1 }).limit(10);
  if (posts == null || posts == undefined) {
    console.log("Response sent - getLatestPosts");
    res.status(500);
  }
  res.status(200);
  res.json(posts);
  console.log("Response sent - getLatestPosts");
});

router.post("/createPost", upload.single('img'), (req, res) => {
  let uploadParams = {
    Bucket: bucket,
    Body: req.file.buffer,
    ACL: 'public-read',
    Key: "blog/" +req.file.originalname
  }

  space.upload(uploadParams, function (error, data) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    }
    console.log("Successfully uploaded Image to DO");
  });

  let currDate = new Date().toISOString();
  let post = req.body;
  post.postId = Math.floor((Math.random() * 9999999) + 1000000);
  post.date = currDate;
  post.img = fileEndpoint + req.file.originalname;
  post = new Posts(post);
  console.log(req.body);

  post.save().then(() => {
    res.status(200).send("Post has been uploaded");
  })
    .catch(() => {
      res.status(400).send("unable to post");
    });

});


module.exports = router;
