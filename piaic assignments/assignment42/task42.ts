function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }

    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magiciansArray: string[] = ['Shan Shah', 'Aamer Peerzada', 'Prakash Puru', 'Maneka Sorcar'];

const greatMagiciansArray = make_great(magiciansArray);

show_magicians(greatMagiciansArray);
