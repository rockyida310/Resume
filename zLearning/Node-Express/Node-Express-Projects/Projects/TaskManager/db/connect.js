const mongoose = require("mongoose");

  
const connectDB = (url) => {
return mongoose
.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
};

module.exports = connectDB;
//it returns promise so then
//and there might be a error also so catch

