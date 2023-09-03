var dinnerGuests = ["Sir Zia", "Sir Imran", "Sir Hamzah", "Sir Daniyal", "Sir Arif Alvi", "Team PIAIC"]; // List of dinner guests
console.log("Unfortunately, the new dinner venue won't arrive in time. We can only invite two people for dinner.");
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop(); // Remove a guest from the end of the array
    console.log("Sorry, ".concat(removedGuest, ", we won't be able to invite you to dinner."));
}
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner. Please join us on thursday at 8 PM."));
}
dinnerGuests = []; // Empty the list
console.log(dinnerGuests); // Print the list to confirm it is empty
