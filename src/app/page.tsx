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
      length: 234,
    },
    {
      no: 2,
      title: "Picture to Burn",
      album: "Taylor Swift",
      length: 175
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
