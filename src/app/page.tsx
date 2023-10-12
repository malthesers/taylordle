"use client"

import { useEffect, useState } from "react"
import { Song } from "../interfaces/song"
import SongRow from "../components/game/SongRow"

export default function Home() {
  const [answer, setAnswer] = useState<Song | null>(null)
  const [songs, setSongs] = useState<Array<Song>>([
    {
      no: 1,
      title: "Tim McGraw",
      album: "Taylor Swift",
      duration: 234,
      releaseYear: 2006
    },
    {
      no: 2,
      title: "Picture to Burn",
      album: "Taylor Swift",
      duration: 175,
      releaseYear: 2006
    }
  ])

  useEffect(() => {
    setAnswer(songs[Math.floor(Math.random() * songs.length)])
  }, [])

  return (
    <main>
      <h1 className="text-2xl">Main</h1>
      <p>Answer</p>
      { answer && <SongRow song={answer}/>}
      <p>Guesses</p>
      { songs.map((song) =>
        <SongRow key={song.title} song={song}/>
      )}
    </main>
  )
}
