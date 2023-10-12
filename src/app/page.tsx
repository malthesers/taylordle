"use client"

import { useState } from "react"

interface Song {
  no: number,
  title: string,
  album: string,
  length: number
}

export default function Home() {

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

  return (
    <main>
      <h1>Main</h1>
      { songs.map((song) =>
        <p key={song.title}>{song.title}</p>
      )}
    </main>
  )
}
