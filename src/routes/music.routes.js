const express=require("express");
const multer=require('multer');
const musicController = require("../controllers/music.controller");
const authMiddleware= require("../middlewares/auth.middleware")
const upload=multer({
    storage:multer.memoryStorage()
});
const router=express.Router();

router.post("/upload",authMiddleware.authArtist,upload.single("music"),musicController.createMusic);

router.post("/album",authMiddleware.authArtist,musicController.createAlbum)

router.get("/",authMiddleware.authuser,musicController.getallMusics);
router.get("/albums",authMiddleware.authuser,musicController.getallAlbums);

router.get("/albums/:albumId",authMiddleware.authuser,musicController.getAlbumById)

module.exports=router;