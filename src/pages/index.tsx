import Footer from '@/components/Footer';
import Table from '@/components/Table';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App Starter</title>
        <meta name="description" content="Next App Starter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="tabs tabs-boxed">
          <a className="tab tab-active">Contract Request</a>
          <a className="tab">Purchase Request</a>
          <a className="tab">Purchase Order</a>
        </div>
      </header>
      <main className="p-4">
        <Table />
      </main>
      <Footer />
    </>
  );
}
