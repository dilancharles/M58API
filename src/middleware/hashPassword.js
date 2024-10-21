const bcrypt = require("bcrypt");
require("dotenv").config();
 
async function hashPassword(req,res,next) {
    try {
        const plainTextPassword = req.body.password;
        const saltRounds = process.env.SALT_ROUNDS;
        const hashedPassword = await bcrypt(plainTextPassword,saltRounds);
        req.body.password = hashedPassword;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}