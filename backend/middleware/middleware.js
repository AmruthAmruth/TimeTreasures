import jwt from 'jsonwebtoken';
import multer from 'multer'
import path from 'path'

export const verifyToken = (req, res, next) => {
    let authHeader = req.headers.authorization; 
    if (!authHeader) {
        return res.status(401).json({ message: "No Token Provided" });
    }
    
    let token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Authentication Failed" });
        } else {
            req.user = decoded; 
            next(); 
        }
    });
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

 export const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg'
        ) {
            callback(null, true);
        } else {
            console.log("Only jpg and png Files Are Supported");
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2 // 2 MB
    } 
});