import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TBT Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.banner} src="https://tijucas-bike-team2.s3-sa-east-1.amazonaws.com/tbt-day.jpeg" />
      </main>

      <footer className={styles.footer}>
        <div>
          Tijucas Bike Team - 2020 &copy;
        </div>
      </footer>
    </div>
  )
}
