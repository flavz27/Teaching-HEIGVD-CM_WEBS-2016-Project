/**
 * Created by Sabine on 23.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IssueSchema = new Schema({
    type: String
});


mongoose.model('Issue', IssueSchema);