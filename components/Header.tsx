import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-screen flex justify-between items-baseline px-16">
      <Link href={'/aboutus'}>About Us</Link>
      <Link href={'/music'}>Music</Link>
      <Link href={'/schedule'}>Schedule</Link>
      <Link href={'/photos'}>Photos</Link>
    </header>
  )
}
