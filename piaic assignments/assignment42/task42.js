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
var magiciansArray = ['Shan Shah', 'Aamer Peerzada', 'Prakash Puru', 'Maneka Sorcar'];
var greatMagiciansArray = make_great(magiciansArray);
show_magicians(greatMagiciansArray);
