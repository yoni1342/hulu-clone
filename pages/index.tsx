import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/hulu.png" />
      </Head>

      <main className="">
        {/* Header */}
        <Header />

        {/* NavBar */}
        <Nav/>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}

export default Home
