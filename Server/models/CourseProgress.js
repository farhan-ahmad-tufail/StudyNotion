const mongoose = require('mongoose');

const courseProgress = new mongoose.Schema({
    courseId: {
        type: mongoose.Types.ObjectId,
        ref: 'course',
    },
    completedVideos: {
        type: mongoose.Types.ObjectId,
        ref: 'subSection',
    },

});

module.exports = mongoose.model("CourseProgress", courseProgress);