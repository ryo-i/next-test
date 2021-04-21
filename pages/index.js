import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const text = {
    title: 'トップページ',
    desctiption: 'Next.jsの世界にようこそ！'
};

function HomePage() {
    return (
        <div>
            <Head>
                <title>{ text.title }</title>
                <meta name="description" content={ text.desctiption } />
            </Head>
            <Header />
            <section>
                <h2>{ text.title }</h2>
                <p>{ text.desctiption }</p>
                <Link href="/other"><a>別ページへ</a></Link>
            </section>
            <Footer />
        </div>
    );
  }

  export default HomePage;