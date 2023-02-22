import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App Starter</title>
        <meta name="description" content="Next App Starter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">next app starter</h1>
      </main>
    </>
  );
}
