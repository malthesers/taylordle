import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='h-full'>
      <h2>Not Found</h2>
      <Link href="/">To home</Link>
    </main>
  )
}