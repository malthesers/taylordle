import { Song } from "@/src/interfaces/song"

export default function SongRow({ song }: { song: Song}) {
  return (
    <div className="flex flex-row gap-4">
      <p>{song.album}</p>
      <p>{song.title}</p>
      <p>{song.length}</p>
    </div>
  )
}