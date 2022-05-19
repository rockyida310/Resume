const mongoose = require('mongoose');


//https://mongoosejs.com/docs/guide.html
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength: [20,'name cannot be more than 20 characters']
    },
    completed:{
        type: Boolean,
        default: false
    },
});

//properties not in schema will be ignored

module.exports = mongoose.model('Task',TaskSchema);
// here we put 'Task' in mongoose model so collection name will be tasks