import Image from 'next/image'
import Header from '../components/Header'
import TitleCard from '@/components/TitleCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">

      <section className="my-10">
        <Header />
      </section>

      <section className="mt-20">
        <TitleCard />
      </section>

    </main>
  )
}
