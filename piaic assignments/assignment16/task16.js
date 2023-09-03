var dinnerGuests = ["Sir Zia", "Sir Imran", "Sir Hamzah"]; // List of dinner guests
console.log("Good news for all! We found a bigger dinner venue.");
dinnerGuests.unshift("Sir Daniyal Nagori"); // Add a new guest to the beginning of the array
dinnerGuests.splice(2, 0, "team PIAIC"); // Add a new guest to the middle of the array
dinnerGuests.push("ARIF ALVI"); // Add a new guest to the end of the array using append()
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    // Print an invitation message to each guest
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us on thursday at 8 PM."));
}
