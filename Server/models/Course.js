const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    CourseName:{
        type: String,
        trim:true,
        required: true,
    },
    courseDescription:{
        type: String,
        trim:true,
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    whatYouWillLearn: {
        type: [String],
        
    },
    courseContent: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    }],

    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReviews",
            
        }
    ],

    price:{
        type:number,
        required: true,
    },

    thumbnail:{
        type: String,
        
    },

    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    },

    studentsEnrolled:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User" , 
            required: true,  
        }
],
    
});

module.exports = mongoose.model("Course", courseSchema);