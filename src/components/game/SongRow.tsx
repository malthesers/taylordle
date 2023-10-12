import { Song } from "@/src/interfaces/song"

interface Props {
  song: Song
}

export default function SongRow({ song }: Props) {
  return (
    <div className="flex flex-row gap-4">
      <p>{song.album}</p>
      <p>{song.title}</p>
      <p>{song.length}</p>
    </div>
  )
}