"use client"

import { useEffect, useState } from "react"

interface Song {
  no: number,
  title: string,
  album: string,
  length: number
}

export default function Home() {
  const [answer, setAnswer] = useState<Song>()
  const [songs, setSongs] = useState<Array<Song>>([
    {
      no: 1,
      title: "Tim McGraw",
      album: "Taylor Swift",
      length: 234
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
      <h1>Main</h1>
      { songs.map((song) =>
        <p key={song.title}>{song.title}</p>
      )}
    </main>
  )
}
