//Upload Image, processing , preview image,output image
const multer = require('multer');
const fs=require('fs');
const path=require('path');
const sharp = require('sharp');
const axios = require('axios');
const FormData = require('form-data');
const remover=require('remove.bg');
const removeBackgroundFromImageFile = remover.removeBackgroundFromImageFile;
class Image{
    static ResizeImage = async  (req, res) => {
        try{
            const imageSec=`../../assets/uploads/${req.file.originalname}`
            const imageName=`${req.file.originalname}`
            const imagePath=path.join(__dirname,`${req.file.path}`);
            let fileN = req.file.originalname;
            const ext = path.extname(req.file.originalname);
            if(ext == '.tiff' || ext == '.jpeg'){fileN = fileN.slice(0, -5);}else{fileN = fileN.slice(0, -4);}
            const myFileName = fileN
            const imageP = "./frontend/src/assets/ResizedImages/";
            const myimagePath=path.join(__dirname,`${req.file.path}`);
            const imgWidth = Number.parseInt(req.body.width);
            const imgHeight = Number.parseInt(req.body.height);
            const imageAfterResize = `${myFileName}-resize-${imgWidth}X${imgHeight}${ext}`
            const ResizedImage = await sharp(myimagePath)
                .resize({
                    width: imgWidth,
                    height:imgHeight,
            })
                 .toFile(`${imageP}${imageAfterResize}`);
            res.status(200).send({
                apiStatus: true,
                imageName: imageName,
                imageAfterResize:imageAfterResize,
                imagePath: imagePath,
                imageSec: imageSec,
                data: req.file, 
                ResizedImage:ResizedImage,
                message: "Image Uploaded and Resized Successfully"
            })
        }catch(e){
            res.status(500).send({
                apiStatus: false,
                data:e,
                message: "Only images are allowed (.png, .jpg, .tiff, .jpeg)"
            })
        }
    }
    static RotateImage = async (req, res) => {
        try{
            const imageSec=`../../assets/uploads/${req.file.originalname}`
            const imageName=`${req.file.originalname}`
            let fileN = req.file.originalname;
            const ext = path.extname(req.file.originalname);
            if(ext == '.tiff' || ext == '.jpeg'){fileN = fileN.slice(0, -5);}else{fileN = fileN.slice(0, -4);}
            const myFileName = fileN
            const myimagePath = path.join(__dirname,`${req.file.path}`);
            const imageP = "./frontend/src/assets/RotateImages/";
            const imgAngle = Number.parseInt(req.body.angle);
            const color =  req.body.color;
            const imageAfterRotate = `${myFileName}-rotateWithAngle-${imgAngle}degree${ext}`
            const RotateImage = await sharp(myimagePath)
             .rotate(imgAngle,{
                background: color ,
             })
    
             .toFile(`${imageP}${imageAfterRotate}`);
            res.status(200).send({
                apiStatus: true,
                myAngle:req.body.angle,
                imageName: imageName,
                imageAfterRotate:imageAfterRotate,
                imageSec: imageSec,
                data: req.file,
                RotateImage:RotateImage,
                message: "Image Uploaded and Rotated Successfully"
            })
        }catch(e){
            res.status(500).send({
                apiStatus: false,
                data:e,
                message: "Error In Rotating Image"
            })
        }
    }
    static ImageTransparency = async (req,res) =>{
        const mypath = `./frontend/src/assets/uploads/${req.file.originalname}`;
        const outputImagePath=`./frontend/src/assets/TransparencyImages/TransparencyDoneOn-${req.file.originalname}`
        const imageAfterTransparency = `TransparencyDoneOn-${req.file.originalname}`
        const imageName=`TransparencyDoneOn-${req.file.originalname}`
        const formData = new FormData();
        formData.append('size', 'auto');
        formData.append('type', 'auto');
        formData.append('image_file', fs.createReadStream(mypath));
        axios({
          method: 'post',
          url: 'https://api.remove.bg/v1.0/removebg',
          data: formData,
          responseType: 'arraybuffer',
          headers: {
            ...formData.getHeaders(),
            'X-Api-Key': 'xgUvTmgFtL5xgdyoqpMRi8wu',
          },
          encoding: null
        })
        .then((response) => {
          if(response.status != 200) return console.error('Error:', response.status, response.statusText);
          fs.writeFileSync(outputImagePath, response.data);
        })
        .catch((error) => {
            return console.error('Request failed:', error);
        });
    
        try{
            res.status(200).send({
                apiStatus: true,
                mypath:mypath,
                data: req.file,
                outputImagePath:outputImagePath,
                imageName:imageName,
                imageAfterTransparency:imageAfterTransparency,
                message: "Image Uploaded and Transparent Successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                data:e,
                message: "Error In Transparent Image"
            })
        }
    }
    static BlurImage = async (req, res) => {
        try{
            const imageSec=`../../assets/uploads/${req.file.originalname}`
            const imageName=`${req.file.originalname}`
            let fileN = req.file.originalname;
            const ext = path.extname(req.file.originalname);
            if(ext == '.tiff' || ext == '.jpeg'){fileN = fileN.slice(0, -5);}else{fileN = fileN.slice(0, -4);}
            const myFileName = fileN
            const myimagePath = path.join(__dirname,`${req.file.path}`);
            const imageP = "./frontend/src/assets/BlurImages/";
            const imgBlur = Number.parseInt(req.body.blur);
            const imageAfterBlur = `BlurDoneOn-${myFileName}-${imgBlur}-blursigma${ext}`
            const BlurImage = await sharp(myimagePath)
                .blur(imgBlur)
             .toFile(`${imageP}${imageAfterBlur}`);
            res.status(200).send({
                apiStatus: true,
                imageName: imageName,
                imageAfterBlur:imageAfterBlur,
                imageSec: imageSec,
                data: req.file,
                BlurImage:BlurImage,
                message: "Image Uploaded and Blured Successfully"
            })
        }catch(e){
            res.status(500).send({
                apiStatus: false,
                data:e,
                message: "Error In Bluring Image"
            })
        }
    }
}
module.exports=Image;
