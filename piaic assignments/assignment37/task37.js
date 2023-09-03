function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("You've ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
make_shirt('Small', 'Hello, welcome the world of AI'); // Custom-sized shirt with a different message
