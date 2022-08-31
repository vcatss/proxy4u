import Head from 'next/head'
import Layout from '/layouts/main.js'
import Link from 'next/link';
export default function Page() {
  return (
    <>
      <Layout>
        <span className="text-red-500 bg-blue-500">
          <Link href="/post">Page chinh</Link>
        </span>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </Layout>
    </>
  )
}