var express = require('express');
var router = express.Router();

const ctrl = require("./article.ctl");

router.get("/", (req, res) =>{
    res.redirect("/article");  
  });
router.get('/article', ctrl.get.list);
router.get('/article/post', ctrl.get.post);
router.post('/article', ctrl.post.article);
router.post('/article/like/:id', ctrl.post.like);

module.exports = router;
