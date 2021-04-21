import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Other() {
    return <div>
            <Header />
            <section>
                <h2>別ページ</h2>
                <p>ここは別のページだよ〜ん!</p>
                <Link href="/"><a>戻る</a></Link>
            </section>
            <Footer />
        </div>;
  }

  export default Other;