'use client'

import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full px-6 py-4 font-semibold">
      <nav className="max-w-7xl mx-auto flex justify-between">
        <Link href="/" className="text-xl">taylordle</Link>
        <div className="flex gap-4">
          <Link href="/">Game</Link>
          <Link href="/albums">Albums</Link>
        </div>
      </nav>
    </header>
  )
}