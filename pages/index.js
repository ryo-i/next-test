import Link from 'next/link';

function HomePage() {
    return <div>
            <p>ねくすと・じぇいえす事始め!</p>
            <Link href="/other">
                <a>別ページへ</a>
            </Link>
      </div>;
  }

  export default HomePage;