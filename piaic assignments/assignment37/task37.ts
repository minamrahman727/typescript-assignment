function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt(); // Large shirt with default message
make_shirt('Medium'); // Medium shirt with default message
make_shirt('Small', 'Hello, welcome the world of AI'); // Custom-sized shirt with a different message
