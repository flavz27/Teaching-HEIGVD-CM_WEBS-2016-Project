/**
 * Created by Sabine on 25.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    date_created: {type: Number, required: true},
    description: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user", //mongoose sait que c'est une référence à un autre modèèle. Methode "populate"
    },

});


mongoose.model('Comment', CommentSchema);