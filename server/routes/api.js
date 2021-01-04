const express = require('express');
const path = require('path');
const Posts = require('../db/models/post');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  }
  else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limit: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

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
})

router.post("/createPost",upload.single('img'), (req, res) => {
  let currDate = new Date().toISOString();
  let post = req.body;
  post.postId = Math.floor((Math.random() * 9999999) + 1000000);
  post.date = currDate;
  post.img = req.file.path;
  post = new Posts(post);
  console.log(req.body);

  post.save().then(() => {
    res.status(200).send("Post has been uploaded");
  })
    .catch(() => {
      res.status(400).send("unable to post");
    })

});

module.exports = router;
