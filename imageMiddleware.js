const multer = require("multer")
const path = require("path")
const fs = require("fs")


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "frontend/src/assets/uploads")
    },
    filename: function(req,file, cb){
        let fileN = file.originalname;
        const ext = path.extname(file.originalname);
        if(ext == '.tiff' || ext == '.jpeg')
        {
            fileN = fileN.slice(0, -5); 
            
        }
        else{
            fileN = fileN.slice(0, -4);

        }
        const myFileName = fileN+path.extname(file.originalname)
        cb(null, myFileName)
    }
})
const upload= multer ({
    storage,
    limits:{fileSize:20000000},
    
    fileFilter: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        //Return Error if the file already exists 
        /*const mypath = `frontend/src/assets/uploads/${file.originalname}`;
        try{
            if(fs.existsSync(mypath))
            {
                console.log("exists:", mypath);
                return cb(new Error("Image already Uploaded exists"));
            }
            else{
                console.log("DOES NOT exist:", mypath);
                if(ext !== '.png' && ext !== '.jpg' && ext !== '.tiff' && ext !== '.jpeg') {
                    return cb(new Error('Only images are allowed'))
                }
                cb(null, true)
                
            }
        }catch(err){
            console.log("Error! Existed")
            return cb(new Error("File already exists"));
        }*/
        try{
            if(ext !== '.png' && ext !== '.jpg' && ext !== '.tiff' && ext !== '.jpeg') {
                return cb(new Error('Only images are allowed'))
            }
            cb(null, true)
        }catch(e){
            return cb(true,null)
        }
        },

        
    
})

module.exports=upload