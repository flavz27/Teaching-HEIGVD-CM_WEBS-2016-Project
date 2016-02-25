/**
 * Created by Sabine on 25.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    citizen: {type: Boolean, required: true},
    staff: {type: Boolean, required: true},
    username: {type: String, required: true},

});


mongoose.model('User', UserSchema);