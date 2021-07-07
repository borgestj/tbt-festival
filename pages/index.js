import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TBT Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.banner} src="https://tijucas-bike-team2.s3.sa-east-1.amazonaws.com/tbt-2021.jpeg" />
        <div>
          <h4>Mais informações siga nossas redes sociais</h4>
          <div>
            <a href="https://www.instagram.com/tijucasbiketeam/" target="_blank">
              <img style={{ width: '36px', marginRight: '10px' }} src='https://tijucas-bike-team2.s3.sa-east-1.amazonaws.com/instagram-icon.svg' alt='Instagram' />
            </a>
            <a href="https://www.facebook.com/tijucasbiketeam/" target="_blank">
              <img style={{ width: '36px' }} src='https://tijucas-bike-team2.s3.sa-east-1.amazonaws.com/facebook-icon.svg' alt='Facebook' />
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          Tijucas Bike Team - 2021 &copy;
        </div>
      </footer>
    </div>
  )
}
