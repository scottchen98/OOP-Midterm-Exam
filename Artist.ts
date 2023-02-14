import { Album } from "./Album";

export class Artist {
  private _name: string;
  private _albums!: Album[];

  constructor(name: string) {
    this._name = name;
  }

  addAlbum(album: Album): void {
    this._albums.push(album);
  }

  getArtistAlbums(): Album[] {
    return this._albums;
  }
}
