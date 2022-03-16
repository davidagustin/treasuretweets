import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Message from './components/Message'
import MessageFeed from './components/MessageFeed'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treasure Tweets</title>
        <meta name="description" content="Social Network for TreasureDAO" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main className={styles.main}>
        <Message />
        <MessageFeed />
      </main>
    </div>
  )
}
