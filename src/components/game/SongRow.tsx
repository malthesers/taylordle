interface Song {
  no: number,
  title: string,
  album: string,
  length: number
}

export default function SongRow(song: Song) {
  return (
    <div className="flex flex-row gap-4">
      <p>{song.album}</p>
      <p>{song.title}</p>
      <p>{song.length}</p>
    </div>
  )
}