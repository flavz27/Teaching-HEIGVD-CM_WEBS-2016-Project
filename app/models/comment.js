/**
 * Created by Sabine on 25.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    Date_created: {type: Number, required: true},
    Description: {type: String, required: true},
    userId: {
        type: Schema.Types.ObjectId, required: true,
        //ref: "user",
    },

});


mongoose.model('Comment', CommentSchema);