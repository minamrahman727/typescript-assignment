function order_sandwich(...items: string[]): void {
    console.log("You have ordered a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

order_sandwich('salmon', 'Lettuce', 'Tomato', 'Mayonnaise');
order_sandwich('Chicken', 'mayo garlic', 'cheddar cheese');
order_sandwich('beef steak', 'Swiss Cheese');
