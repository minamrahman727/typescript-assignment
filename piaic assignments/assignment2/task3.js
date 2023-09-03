var personName = "Minam";
console.log(personName.toLocaleLowerCase()); // Output: minam
console.log(personName.toLocaleUpperCase()); // Output: MINAM
console.log(personName.toLocaleUpperCase()); // Output: MINAM (Alternative to touppercase())
console.log(personName.toLocaleLowerCase()); // Output: MINAM (Alternative to tolowercase())
console.log(personName.replace(/\b\w/g, function (c) { return c.toLocaleLowerCase.(); })); // Output: minam
