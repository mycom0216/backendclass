function findAndSaveUser(Users) {
    Users.findOne({}) 
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => {
        return Users.
    })