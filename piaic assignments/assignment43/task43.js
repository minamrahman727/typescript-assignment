var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magiciansArray = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller', 'Shan Shah', 'Aamer Peerzada', 'Prakash Puru', 'Maneka Sorcar'];
var greatMagiciansArray = make_great(__spreadArray([], magiciansArray, true));
console.log("Original magicians array:");
show_magicians(magiciansArray);
console.log("\nGreat magicians array:");
show_magicians(greatMagiciansArray);
