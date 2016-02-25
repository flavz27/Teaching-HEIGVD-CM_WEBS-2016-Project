/**
 * Created by Sabine on 25.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    Date_created: Number,
    Description: String,
    

});


mongoose.model('Comment', CommentSchema);