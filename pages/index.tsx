import type { NextPage } from 'next';
import Head from 'next/head';

import Button from 'components/atoms/Button';
import Header from 'components/organisms/Header';

import ArrowNarrowRightIcon from '~icons/tabler/arrow-narrow-right.tsx';
import BrandGithubIcon from '~icons/tabler/brand-github.tsx';
import CheckIcon from '~icons/tabler/check.tsx';

const features = [
  'TypeScript',
  'Tailwind CSS with pre-configured colors',
  <span key="atomic-design">
    Basic components following{' '}
    <a
      href="https://bradfrost.com/blog/post/atomic-web-design/"
      rel="noreferrer"
      target="_blank"
    >
      atomic design
    </a>{' '}
    concept
  </span>,
  'Storybook',
  <span key="unplugin-icons">
    Access thousands of icons using{' '}
    <a
      href="https://github.com/antfu/unplugin-icons"
      rel="noreferrer"
      target="_blank"
    >
      unplugin-icons
    </a>
  </span>,
  <span key="commitlint">
    Make sure commit messages meet{' '}
    <a
      href="https://www.conventionalcommits.org"
      rel="noreferrer"
      target="_blank"
    >
      conventional commit
    </a>{' '}
    format using{' '}
    <a
      href="https://github.com/conventional-changelog/commitlint"
      rel="noreferrer"
      target="_blank"
    >
      commitlint
    </a>
  </span>,
  <span key="lefthook">
    Run formatters and linters within Git hooks using{' '}
    <a
      href="https://github.com/evilmartians/lefthook"
      rel="noreferrer"
      target="_blank"
    >
      lefthook
    </a>
  </span>,
  <span key="standard-version">
    Manage release using{' '}
    <a
      href="https://github.com/conventional-changelog/standard-version"
      rel="noreferrer"
      target="_blank"
    >
      standard-version
    </a>
  </span>,
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

      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 top-4 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-10 blur-3xl"></div>

      <Header />

      <section className="container mx-auto py-24 px-6 sm:py-40">
        <h1 className="mb-4">Next.js TS Tailwind Starter</h1>
        <p className="text-dark-600 dark:text-dark-300">
          Starter kit to speed up the development of Next.js project.
        </p>
        <ul className="mb-12">
          {features.map((feature, index) => (
            <li className="mb-3 flex items-start sm:mb-2" key={index}>
              <CheckIcon className="mt-1 mr-2 shrink-0 text-success-500" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-2 space-x-0 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button
            external
            href="https://github.com/surdarmaputra/next-ts-tailwind-starter"
            link
            target="_blank"
            variation="dark"
          >
            View on GitHub <BrandGithubIcon className="ml-2 " />
          </Button>
          <Button
            external
            href={process.env.NEXT_PUBLIC_DEMO_STORYBOOK_URL}
            link
            variation="light"
          >
            Explore The Storybook <ArrowNarrowRightIcon className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="container mx-auto py-8 px-6 text-center sm:text-left">
        &copy; 2022 | Created by{' '}
        <a href="https://github.com/surdarmaputra/">Surya Darma Putra</a>
      </footer>
    </>
  );
};

export default Home;
