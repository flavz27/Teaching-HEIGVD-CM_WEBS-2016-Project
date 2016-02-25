/**
 * Created by Sabine on 23.02.2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IssueSchema = new Schema({
    type: {type: String, required: true},
    //user_id
    date_created: {type: Number, required: true},
    coordonate: {
        lat: {type: Number, required: true},
        long: {type:Number, required: true}
    },
    status: {type: String, required: true},
    comments_user: [
        //comment_id
    ],
    action:[
        {
            date: {type: Number, required: true},
            action: {type: String, required: true},
            //comment_id
            current: {type:Boolean, required: true}
        }
    ]


});


mongoose.model('Issue', IssueSchema);