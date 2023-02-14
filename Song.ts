export class Song {
  private _title: string;

  constructor(title: string) {
    this._title = title;
  }

  setSongName(title: string): void {
    if (title.length > 0) {
      this._title = title;
    } else {
      throw new Error("Must have a song title!");
    }
  }

  getSongTitle(): string {
    return this._title;
  }

  getSongName(): string {
    return this._title;
  }
}
