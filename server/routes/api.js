const express = require('express');
const path = require('path');
const Posts = require('../db/models/post');
const router = express.Router();


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

router.post("/createPost", (req, res) => {
  let currDate = new Date().toISOString();
  let post = req.body;
  post.postId = Math.floor((Math.random() * 9999999) + 1000000)
  post.date = currDate;
  post = new Posts(post)
  console.log(req.body)

  post.save().then( () => {
    res.status(200).send("Post has been uploaded");
  })
  .catch( () => {
    res.status(400).send("unable to post");
  })

});

module.exports = router;
