var current_users = ['John', 'Alice', 'Eric', 'Sarah', 'Bob']; // List of current usernames
var new_users = ['John', 'Megan', 'Chris', 'Amanda', 'Sarah']; // List of new usernames
var _loop_1 = function (newUsername) {
    var isUsernameTaken = current_users.some(function (username) { return username.toLowerCase() === newUsername.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("Username '".concat(newUsername, "' is already taken. You'll need to enter a new username."));
    }
    else {
        console.log("Username '".concat(newUsername, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUsername = new_users_1[_i];
    _loop_1(newUsername);
}
