import Head from 'next/head';
import HomeSection from '../components/HomeComponents/HomeSection';

export const getServerSideProps = async () => {
  const res = await fetch('https://dev.to/api/articles?username=iftakher_hossen')
  const blogs = await res.json()
  return {
    props: {
      blogs,
    }
  }
}

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Learn with Iftakher</title>
        <meta name="Learn with Iftakher" content="Learn new technologies with Iftakher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSection blogs={blogs} />

    </div>
  )
}