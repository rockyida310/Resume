const mongoose = require('mongoose');
const companyOptions = ['ikea','liddy','caressa','marcos'];

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Product name must be provided']
    },
    price: {
        type: Number,
        required: [true,'Product price must be provided']
    },
    featured: {
        type: Boolean,
        default: false 
    },
    rating:{
        type: Number,
        default: 4.5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company : {
        type:String,
        // enum: ['ikea','liddy','caressa','marcos'],
        // enum: companyOptions
        enum: {
            values: companyOptions,
            message: '{VALUE} is not supported'
        }
    }
});

module.exports = mongoose.model('Product',productSchema);