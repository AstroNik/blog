const express = require('express');
const path = require('path');
const Posts = require('../db/models/post');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '../client/dist/', 'index.html'));
});

router.get("/getLatestPosts", async (req,res) => {
  const posts = await Posts.find();
  console.log(posts)
})

router.post("/createPost", (req,res) => {
  
});

module.exports = router;
