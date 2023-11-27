import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-screen flex justify-between items-baseline px-16">
      <Link href={'/aboutus'} className="text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 hover:underline subpixel-antialiased">About Us</Link>
      <Link href={'/music'} className="text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 hover:underline subpixel-antialiased">Music</Link>
      <Link href={'/schedule'} className="text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 hover:underline subpixel-antialiased">Schedule</Link>
      <Link href={'/photos'} className="text-base/4 sm:text-lg/5 md:text-xl/6 lg:text-2xl/7 hover:underline subpixel-antialiased">Photos</Link>
    </header>
  )
}
