function make_album(artist: string, albumTitle: string, numTracks?: number): Record<string, any> {
    const album: Record<string, any> = {
        artist: artist,
        title: albumTitle
    };

    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }

    return album;
}

const album1 = make_album('Ed Sheeran', 'Divide', 12);
const album2 = make_album('Taylor Swift', 'Fearless');
const album3 = make_album('Coldplay', 'Parachutes', 10);

console.log(album1);
console.log(album2);
console.log(album3);
