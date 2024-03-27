usernamee = "tester2";
passwordd = "tester123";
const mongoose = require('mongoose');
const dbConnect = () => {
    try {
        const conn = mongoose.connect("mongodb+srv://" + usernamee + ":" + passwordd + "@cluster0.5z0u6ms.mongodb.net/skillsphere?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connection successful");
    }
    catch (error) {
        console.log("database error");
    }
}
//const conn = mongoose.connect("mongodb+srv://" + usernamee + ":" + passwordd + "@cluster0.5z0u6ms.mongodb.net/skillsphere?retryWrites=true&w=majority&appName=Cluster0")
module.exports = dbConnect;