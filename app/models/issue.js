/**
 * Created by Sabine on 23.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IssueSchema = new Schema({
    type: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user", //mongoose sait que c'est une référence à un autre modèèle. Methode "populate"
    },

    date_created: {type: Number, required: true},
    coordonate: {
        lat: {type: Number, required: true},
        long: {type: Number, required: true}
    },
    status: {type: String, required: true},
    comments_user: [
        {
            comment: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: "comment", //mongoose sait que c'est une référence à un autre modèèle. Methode "populate"
            },

        }

    ],
    action: [
        {
            date: {type: Number, required: false},
            action: {type: String, required: false},
            comment: {
                type: Schema.Types.ObjectId,
                required: false,
                ref: "comment", //mongoose sait que c'est une référence à un autre modèèle. Methode "populate"
            },
            current: {type: Boolean, required: false}
        }
    ],

    tags: [
        {
            name: {type: String, required: false}
        }
    ]


});


mongoose.model('Issue', IssueSchema);