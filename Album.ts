import { Artist } from "./Artist";
import { Song } from "./Song";

export class Album {
  private _title: string = "";
  private _artist: Artist;
  private _yearReleased: number;
  private _tracks: Song[] = [];

  constructor(title: string, artist: Artist, yearReleased: number) {
    this.setAlbumName(title);
    this._artist = artist;
    this._yearReleased = yearReleased;
  }

  setAlbumName(title: string): void {
    if (title.length > 0) {
      this._title = title;
    } else {
      throw new Error("Must have an album title!");
    }
  }

  getAlbumTitle(): string {
    return this._title;
  }

  getAlumArtist(): Artist {
    return this._artist;
  }

  addTrack(track: Song): void {
    this._tracks.push(track);
  }

  getAlbumTracks(): Song[] {
    return this._tracks;
  }
}

// const one = new Album("The 2nd Law", new Artist("Scott"), 2012);
// one.addTrack(new Song("Hello"));
// console.log(one.getAlbumTracks());
