import Link from 'next/link';

function Header() {
    return <header>
            <h1>ねくすと・じぇいえす事始め!</h1>
            <p>Menu：
                <Link href="/"><a>トップ</a></Link>｜
                <Link href="/other"><a>別ページ</a></Link>
            </p>
      </header>;
  }

  export default Header;