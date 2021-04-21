import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
    return <div>
            <Header />
            <section>
                <h2>トップページ</h2>
                <p>Next.jsの世界にようこそ！</p>
                <Link href="/other"><a>別ページへ</a></Link>
            </section>
            <Footer />
        </div>;
  }

  export default HomePage;