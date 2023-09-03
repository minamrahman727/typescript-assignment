var dinnerGuests = ["Sir Ziya", "Sir Imran", "Sir Hamzah"]; // List of dinner guests
var unableToAttend = dinnerGuests[1] = "sir hamzah"; // Guest who can't make it
console.log("Unfortunately, ".concat(unableToAttend, " is unable to attend the dinner."));
dinnerGuests[1] = "Sir Daniyal Nagori"; // Replace with the name of the new person you are inviting
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    // Print an invitation message to each guest
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us on Saturday at 7 PM."));
}
