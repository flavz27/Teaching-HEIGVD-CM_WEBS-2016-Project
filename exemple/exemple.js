/**
 * Created by Sabine on 25.02.2016.
 */
    

var currentUser = {
    name: 'Mary'
};

function getUser() {
    return {code: 200, data: currentUser};
}

function setName (name){
    if(name.length===0) {
        return {code:404, message: 'NameEmptyError'};
    }

    currentUser.name = name;
    return {code:204};
}