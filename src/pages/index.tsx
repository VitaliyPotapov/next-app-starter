import Head from 'next/head';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App Starter</title>
        <meta name="description" content="Next App Starter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <h1 className="text-3xl">next app starter</h1>
      </DefaultLayout>
    </>
  );
}
