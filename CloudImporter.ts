import { Album } from "./Album";
import { Artist } from "./Artist";
import IImportable from "./IImportable";
import { Playlist } from "./Playlist";

export class CloudImporter implements IImportable {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  loadPlaylist(url: string): Playlist {
    console.log(`Importing playlist from ${url}`);
    let pl = new Playlist("cool songs");
    pl.addAlbum(new Album("Fun", new Artist("Jojo"), 2022));
    return pl;
  }

  getPath(): string {
    return this._url;
  }
}
