const express = require('express');
const path = require('path');
const Posts = require('../db/models/post');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '../client/dist/', 'index.html'));
});

router.get("/getLatestPosts", async (req,res) => {
  console.log("Awaiting response from DB - getLatestPosts");
  const posts = await Posts.find().sort({_id:-1}).limit(10);
  if(posts == null || posts == undefined){
    console.log("Response sent - getLatestPosts");
    res.status(500);
  }
  res.status(200);
  res.json(posts);
  console.log("Response sent - getLatestPosts");
})

router.post("/createPost", (req,res) => {
  
});

module.exports = router;
