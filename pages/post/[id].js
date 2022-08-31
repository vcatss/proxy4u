import Head from 'next/head'
import Layout from '/layouts/main.js'
import 'tailwindcss/tailwind.css'
import Link from 'next/link';
import { useRouter } from "next/router";

export default function handler(req, res) {
    const router = useRouter();
    const query = router.query;
    const uid = query.id;

    return (
        <>
        <Layout>
            <span className="text-red-500 bg-blue-500">
            <Link href="/">Page post</Link>
            </span>
            <h1 className="text-3xl font-bold underline">
            {uid}
            </h1>
        </Layout>
    </>
  )
}