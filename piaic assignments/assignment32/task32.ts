const current_users: string[] = ['John', 'Alice', 'Eric', 'Sarah', 'Bob']; // List of current usernames
const new_users: string[] = ['John', 'Megan', 'Chris', 'Amanda', 'Sarah']; // List of new usernames

for (const newUsername of new_users) {
    const isUsernameTaken = current_users.some(username => username.toLowerCase() === newUsername.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Username '${newUsername}' is already taken. You'll need to enter a new username.`);
    } else {
        console.log(`Username '${newUsername}' is available.`);
    }
}
