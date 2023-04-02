import { RecentView } from '@/views/RecentView'
import { MainTemplate } from '@/templates/MainTemplate/MainTemplate'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Music Player</title>
        <meta name='description' content='Reproductor de musica ' />
      </Head>
      <MainTemplate>
        <RecentView />
      </MainTemplate>
    </>
  )
}
