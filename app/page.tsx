import Image from 'next/image'
import Header from '../components/Header'
import TitleCard from '@/components/TitleCard'
import AudioPlayer from '@/components/AudioPlayer'

export default function Home() {

  const songs = [
    {
      title: 'Living Room',
      url: '/songs/livingroom.mp3',
    },
    {
      title: 'Song 2',
      url: '/songs/moonmission.mp3',
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">

      <section className="my-10">
        <Header />
      </section>

      <section className="mt-20">
        <TitleCard />
      </section>

      <section className="player">
        <AudioPlayer songs={songs} />
      </section>

    </main>
  )
}
