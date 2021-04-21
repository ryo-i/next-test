import Link from 'next/link';

function Other() {
    return <div>
            <p>ここは別のページだよ〜ん!</p>
            <Link href="/">
                <a>戻る</a>
            </Link>
        </div>;
  }

  export default Other;