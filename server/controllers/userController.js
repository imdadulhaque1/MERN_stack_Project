import UserModel from "../models/UserModel";


const secret = 'test';
export const signup = async(req, res) =>{
    const {email, password, firstName, lastName} = req.body;
    try{
        const oldUser = await UserModel.findOne({email});

        if(oldUser){
            return res.status(400).json({message: "User already exists!"})
        }

        const hashPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create({
            email,
            password: hashPassword,
            name: `${firstName} ${lastName}`
        });
        const token = jwt.sign({email: result.email, id:result._id}, secret, {expireIn:"1h"});
        res.status(201).json({result, token});
    }
    catch(err){
        res.status(500).json({message: "Something went wrong!"});
        console.log(err);
    }
}