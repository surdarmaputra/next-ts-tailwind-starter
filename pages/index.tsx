import type { NextPage } from 'next';
import Head from 'next/head';

const documentationLinks = [
  {
    title: 'Next.js Documentation',
    description: 'Find in-depth information about Next.js features and API.',
    href: 'https://nextjs.org/docs',
  },
  {
    title: 'Tailwind CSS Documentation',
    description:
      'Find in-depth information about Tailwind CSS features and API.',
    href: 'https://tailwindcss.com/docs',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js TS Tailwind Starter</title>
        <meta
          content="Starter kit for Next.js project using Typescript and Tailwind CSS"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="w-4/5 mx-auto">
        <h1 className="text-2xl text-center">Next.js TS Tailwind Starter</h1>

        <div className="grid grid-cols-2 gap-2">
          {documentationLinks.map(({ title, description, href }, index) => (
            <div className="mt-16 border-2 rounded-md p-4" key={index}>
              <a className="w-" href={href} rel="noreferrer" target="_blank">
                <h2>{title} &rarr;</h2>
                <p>{description}</p>
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
