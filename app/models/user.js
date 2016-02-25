/**
 * Created by Sabine on 25.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    citizen: Boolean,
    staff: Boolean,
    username: String

});


mongoose.model('User', UserSchema);