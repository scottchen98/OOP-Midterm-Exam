import { Album } from "./Album";
import { Artist } from "./Artist";
import { CloudImporter } from "./CloudImporter";
import { LocalImporter } from "./LocalImporter";
import { Playlist } from "./Playlist";
import { PlaylistImporter } from "./PlaylistImporter";
import { Song } from "./Song";
import { User } from "./User";

let artist = new Artist("Muse");
let album = new Album("The 2nd Law", artist, 2012);
let song = new Song("Madness");
album.addTrack(song);

let playlist = new Playlist("Fun songs");
playlist.addAlbum(album);

let localPlaylistImporter = new PlaylistImporter(
  new LocalImporter("localPlaylist.json")
);

let cloudPlaylistImporter = new PlaylistImporter(
  new CloudImporter("www.youtube.com")
);

let localPlaylist = localPlaylistImporter.importPlaylist();
let cloudPlaylist = cloudPlaylistImporter.importPlaylist();

let user = new User("john123", "password123");

user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);

console.log("Getting PLaylists...");
console.log(user.getPlaylists());

console.log("Getting Albums...");
console.log(user.getAlbums());

console.log("Getting Songs...");
console.log(user.getSongs());
