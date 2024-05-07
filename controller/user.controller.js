const User = require("../models/user.model")
const jwt = require("jsonwebtoken")






exports.getUserById = async (req, res, next) => {

    try {
        const user = await User.findById(req.params?.id);
        if (!user) return res.status(404).send("user not found ")
        res.status(200).send(user)
    } catch (error) { res.status(404).send("user not found by this id") }


}





exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params?.id)
        console.log(user);

        //console.log("hello");  
        //console.log(user._id);
        if (req.userId !== user._id.toString()) { return res.status(403).send("you can delete only your account") }
        await User.findByIdAndDelete(req.params?.id);
        res.status(200).send("deleted");
    }
    catch (err) {
        return res.status(404).send("user not found by this id");
    }

}








exports.updateUser = async (req, res) => {
    try {
        // Extract userId from the authentication token
        const userId = req.userId;

        // Extract updates from the request body
        const updates = req.body;

        // Find and update the user based on their ID
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

        // Check if user exists
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        // Update session cookie with updated user information
        const tokenPayload = {
            id: updatedUser._id,
            isSeller: updatedUser.isSeller,
        };

        const updatedToken = jwt.sign(tokenPayload, process.env.JWT_KEY);

        res.cookie("accessToken", updatedToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });

        // Send updated user details in the response
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(500).send("User updation unsuccessful");
    }
};







// exports.updateUser = async (req, res) => {
//     try {
//         // Extract userId from the authentication token
//         const userId = req.userId;

//         // Extract updates from the request body
//         const updates = req.body;

//         // Find and update the user based on their ID
//         const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

//         // Check if user exists
//         if (!updatedUser) {
//             return res.status(404).send("User not found");
//         }

//         // Send updated user details in the response
//         res.status(200).send(updatedUser);
//     } catch (error) {
//         res.status(500).send("User updation unsuccessful");
//     }
// };









exports.getAllUsers = async (req, res) => {
    try {
        // Parse query parameters for pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10; // Default limit to 10 users per page

        // Calculate skip value for pagination
        const skip = (page - 1) * limit;

        // Fetch users with pagination
        const users = await User.find({})
            .skip(skip)
            .limit(limit);

        if (!users || users.length === 0) {
            return res.status(404).send("Users not found");
        }

        res.status(200).send(users);

    } catch (error) {
        res.status(404).send("can't able to fetch users");
    }
};




