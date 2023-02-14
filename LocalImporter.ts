import IImportable from "./IImportable";
const localPlaylist = require("./localPlaylist.json");
import { readFileSync } from "fs";
import { Playlist } from "./Playlist";
import { Artist } from "./Artist";
import { Album } from "./Album";

export class LocalImporter implements IImportable {
  private _filePath: string;

  constructor(filePath: string) {
    this._filePath = filePath;
  }

  loadPlaylist(filePath: string): Playlist {
    console.log(`Your playlist at location ${filePath} will be loaded`);
    const playlistData = readFileSync(filePath, "utf8");
    let pl = new Playlist("fav songs");
    const parsedPlaylist = JSON.parse(playlistData);

    for (const album of parsedPlaylist["albums"]) {
      for (const song of album["tracks"]) {
        pl.addSong(song);
      }
    }

    return pl;
  }

  getPath(): string {
    return this._filePath;
  }
}
