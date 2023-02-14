import { Album } from "./Album";
import { Song } from "./Song";

export class Playlist {
  private _name: string = "";
  private _songs: Song[] = [];

  constructor(name: string) {
    this.setPlaylistName(name);
  }

  setPlaylistName(name: string): void {
    if (name.length > 0) {
      this._name = name;
    } else {
      throw new Error("Must have a playlist name!");
    }
  }

  addSong(song: Song): void {
    this._songs.push(song);
  }

  addAlbum(album: Album): void {
    this._songs.push(...album.getAlbumTracks());
  }

  getPlaylistSongs(): Song[] {
    return this._songs;
  }
}
