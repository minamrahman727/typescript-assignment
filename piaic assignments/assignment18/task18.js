var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Skardu", "Deosai", "Islamabad", "Swat", "Gawadar"]; // List of places to visit
console.log("Original Order:");
console.log(placesToVisit); // Print array in its original order
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort()); // Print array in alphabetical order without modifying the original list
console.log("\nOriginal Order (Still):");
console.log(placesToVisit); // Print array to show it's still in its original order
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse()); // Print array in reverse alphabetical order without modifying the original list
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
