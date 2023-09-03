var dinnerGuests = ["Sir Zia", "Sir Imran", "Sir Hamzah"]; // List of dinner guests
for (var i = 0; i < dinnerGuests.length; i++) {
    var guest = dinnerGuests[i];
    // Print an invitation message to each guest
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us on Thursday at 8 PM."));
}
