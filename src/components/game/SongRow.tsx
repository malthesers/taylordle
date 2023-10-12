import { Song } from "@/src/interfaces/song"

export default function SongRow({ song }: { song: Song}) {
  const min:number = Math.floor(song.time / 60)
  const sec:number = Math.floor(song.time % 60)

  return (
    <div className="flex flex-row gap-4">
      <p>{song.album}</p>
      <p>{song.year}</p>
      <p>{song.title}</p>
      <p>{min}:{sec}</p>
    </div>
  )
}