let placesToVisit: string[] = ["Skardu", "Deosai", "Islamabad", "Swat", "Gawadar"]; // List of places to visit

console.log("Original Order:");
console.log(placesToVisit); // Print array in its original order

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort()); // Print array in alphabetical order without modifying the original list

console.log("\nOriginal Order (Still):");
console.log(placesToVisit); // Print array to show it's still in its original order

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse()); // Print array in reverse alphabetical order without modifying the original list

console.log("\nOriginal Order (Still):");
console.log(placesToVisit); // Print array to show it's still in its original order

console.log("\nReversed Order:");
console.log(placesToVisit.reverse()); // Reverse the order of the list and print it to show the changed order

console.log("\nReversed Order (Again):");
console.log(placesToVisit.reverse()); // Reverse the order of the list again to bring it back to the original order

console.log("\nAlphabetical Order (Sorted):");
console.log(placesToVisit.sort()); // Sort the array to store it in alphabetical order and print it to show the changed order

console.log("\nReverse Alphabetical Order (Sorted):");
console.log(placesToVisit.sort().reverse()); // Sort the array to store it in reverse alphabetical order and print it to show the changed order
