import Head from 'next/head';
import HomeSection from '../components/HomeComponents/HomeSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learn with Iftakher</title>
        <meta name="Learn with Iftakher" content="Learn new technologies with Iftakher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSection />

    </div>
  )
}