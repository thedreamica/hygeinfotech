import React, { Fragment } from 'react'
import Head from 'next/head'
import styles from '@styles/Home.module.css'
import { Footer, Navbar,Preface } from '@components'


const Home = () => {
  return (
    <Fragment>
        <Head>
            <title>Hyge</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.PNG" />
        </Head>
        <main className={styles.main}>
            <Navbar />
            <Preface />
            <Footer />
        </main>
    </Fragment>
  )
}

export default Home