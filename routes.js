const router = require('express').Router();
const imageController = require('./imageController');
const multer  = require('multer')
const upload = multer({ dest: '/frontend/src/assets/uploads' })

const uploadImgMiddleware= require('./imageMiddleware')
router.post("/ResizeImage", uploadImgMiddleware.single('authimage'),imageController.ResizeImage);
router.post("/RotateImage", uploadImgMiddleware.single('authimage'),imageController.RotateImage);
router.post("/ImageTrans",uploadImgMiddleware.single('authimage'),imageController.ImageTransparency);
router.post("/ImageBlur",uploadImgMiddleware.single('authimage'),imageController.BlurImage);
module.exports = router;
