interface Song {
  no: number,
  title: string,
  album: string,
  length: number
}

export default function SongRow(props: {song: Song}) {
  return (
    <div className="flex flex-row gap-4">
      <p>{props.song.album}</p>
      <p>{props.song.title}</p>
      <p>{props.song.length}</p>
    </div>
  )
}