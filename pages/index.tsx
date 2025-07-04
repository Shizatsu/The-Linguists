// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Linguists</title>
      </Head>
      <main className="flex items-center justify-center h-screen text-white bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to The Linguists 🎓</h1>
          <p className="mt-4 text-lg">Please log in to begin your duel.</p>
        </div>
      </main>
    </>
  );
}
