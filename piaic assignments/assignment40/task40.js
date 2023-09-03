function make_album(artist, albumTitle, numTracks) {
    var album = {
        artist: artist,
        title: albumTitle
    };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}
var album1 = make_album('Ed Sheeran', 'Divide', 12);
var album2 = make_album('Taylor Swift', 'Fearless');
var album3 = make_album('Coldplay', 'Parachutes', 10);
console.log(album1);
console.log(album2);
console.log(album3);
