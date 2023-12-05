import { smooch } from '../app/fonts'
import React from 'react'

export default function TitleCard() {
  return (
    <section>
      <div className="card w-full mx-auto p-8">
        <h1 className={`${smooch.className} underline underline-offset-4 decoration-2 text-center subpixel-antialiased`}>Ellington Willoughby</h1>
      </div>
    </section>
  )
}
