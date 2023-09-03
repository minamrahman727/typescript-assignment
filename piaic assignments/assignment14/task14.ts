const dinnerGuests: string[] = ["Sir Zia", "Sir Imran", "Sir Hamzah"]; // List of dinner guests

for (let i = 0; i < dinnerGuests.length; i++) {
  const guest = dinnerGuests[i];

  // Print an invitation message to each guest
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on Thursday at 8 PM.`);
}
