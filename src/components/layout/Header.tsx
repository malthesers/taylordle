'use client'

import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href="/">taylordle</Link>
        <nav>
          <Link href="/albums">Albums</Link>
        </nav>
      </div>
    </header>
  )
}