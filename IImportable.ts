import { Playlist } from "./Playlist";

interface IImportable {
  loadPlaylist(path: string): Playlist;
  getPath(): string;
}

export default IImportable;
