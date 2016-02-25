/**
 * Created by Sabine on 25.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    Date_created: {type: Number, required: true},
    Description: {type: String, required: true},
    //user_id

});


mongoose.model('Comment', CommentSchema);