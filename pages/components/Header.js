import Head from 'next/head'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="mb-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <hr className="h-2 bg-green-800"/>
            <div className="container-md mx-auto pt-2 pb-1 px-4 lg:px-0">
                <h1 className="text-4xl font-semibold m-0 text-green-800">
                    <Link href="/">
                        <a className="hover:opacity-75">👨🏾‍💻 Leroy Rosales</a>
                    </Link>
                </h1>
            </div>
        </header>
    )
}
