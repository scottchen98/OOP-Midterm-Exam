import { Playlist } from "./Playlist";
import { Album } from "./Album";
import { Song } from "./Song";

export class User {
  private _username: string;
  private _password: string;
  private _playlists: Playlist[] = [];
  private _albums: Album[] = [];

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
  }

  setUsername(username: string): void {
    if (username.length > 0) {
      this._username = username;
    } else {
      throw new Error("Must have an album title!");
    }
  }

  getUserName(): string {
    return this._username;
  }

  setPassword(password: string): void {
    if (password.length > 0) {
      this._password = password;
    } else {
      throw new Error("Must have an album title!");
    }
  }

  getPassword(): string {
    return this._password;
  }

  addPlaylist(playlist: Playlist) {
    this._playlists.push(playlist);
  }

  addAlbum(album: Album): void {
    this._albums.push(album);
  }

  getSongs(): Song[] {
    const listOfSongs = [];
    const songLists = this._albums.map((album) => album.getAlbumTracks());
    for (const songList of songLists) {
      listOfSongs.push(...songList);
    }
    return listOfSongs;
  }

  getAlbums(): Album[] {
    return this._albums;
  }

  getPlaylists(): Playlist[] {
    return this._playlists;
  }
}
