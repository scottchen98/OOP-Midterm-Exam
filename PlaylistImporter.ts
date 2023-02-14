import IImportable from "./IImportable";
import { Playlist } from "./Playlist";

export class PlaylistImporter {
  private _importer: IImportable;

  constructor(importer: IImportable) {
    this._importer = importer;
  }

  importPlaylist(): Playlist {
    return this._importer.loadPlaylist(this._importer.getPath());
  }
}
