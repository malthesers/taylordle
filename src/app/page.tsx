"use client"

import { useEffect, useState } from "react"
import { Song } from "../interfaces/song"
import SongRow from "../components/game/SongRow"

export default function Home() {
  const [answer, setAnswer] = useState<Song | null>(null)
  const [songs, setSongs] = useState<Array<Song>>([
    {
      no: 1,
      duration: 234,
      year: 2006,
      album: "Taylor Swift",
      title: "Tim McGraw",
    },
    {
      no: 2,
      duration: 175,
      year: 2006,
      album: "Taylor Swift",
      title: "Picture to Burn",
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
