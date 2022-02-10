const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.userRegister = async (req, res) => {
	try {
		const { username, password, userphone } = req.body;
        const isUserExists = await User.findOne({username:username})
        if(isUserExists){
            return res.json({message:"UserName already taken"}).status(400)
        }
		const userData = await User.create({
			username,
			userphone,
			password: bcrypt.hashSync(password, 15),
		});
		if (userData) {
			return res.json({ message: ' user register success...!' }).status(200);
		}
		res.json({ message: 'Error in User register...!' }).status(400);
	} catch (err) {
		if (err) {
			throw err;
		}
		res.json({ serverMsg: serverErrorMessage }).status(500);
	}
};
exports.login = async(req,res) => {
    try {
        const { username,password } = req.body
        const user = await User.findOne({username:username})
        if(!user){
            return res.json({message:"User not found"}).status(400)
        }
       const isMatch = await bcrypt.compareSync(password,user.password)
       if(!isMatch){
           return res.json({message:"Password is incorrect"}).status(400)
       }
       const userAuthToken = jwt.sign({ _id: user._id }, 'keyboradcat', {
        expiresIn: '4000',
    });
    const userLoginData = {
        _id: user._id,
        username: user.username,
        userphone: user.userphone,
    };
    res.header('userAuthToken', userAuthToken)
        .json({
            userAuthToken,
            logginedUser: userLoginData,
        })
        .status(200);
    } catch (err) {
        if(err) throw err;
    }
}