const mongoose = require('mongoose')

const productSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Product name must be provided"],
    },
    price: {
        type: Number,
        required: [true, "Product price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    CreatedAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['abans', 'singer', 'huwawei', 'panasonic'],
            message: `{VALUE} is not supported`
        }
    }
})