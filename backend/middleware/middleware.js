import jwt from 'jsonwebtoken';

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
