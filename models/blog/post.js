const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    "_id": { type: Number },
    "time_upload": { type: String },
    "time_update": { type: String },
    "title": { type: String },
    "content": { type: Array },
    "views": { type: Number },
    "like": { type: Number },
    "comment": [
        {
            "user_name": { type: String },
            "content": { type: String },
        }
    ],
    "is_deleted": { type: Boolean, default: false },
    "picture": { type: String },
});

module.exports = mongoose.model("metric", postSchema, "postsTest");
