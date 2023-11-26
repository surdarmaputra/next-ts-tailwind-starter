import { Card, CardBody } from '@nextui-org/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Next.js Tailwind Starter</h1>
      <div className="mb-32 grid gap-3 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          className="group"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Card className="shadow-2xl shadow-gray-200">
            <CardBody className="p-6">
              <h2 className="mb-3 text-xl font-semibold">
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Find in-depth information about Next.js features and API.
              </p>
            </CardBody>
          </Card>
        </a>

        <a
          className="group"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Card className="h-full shadow-2xl shadow-gray-200">
            <CardBody className="p-6">
              <h2 className="mb-3 text-xl font-semibold">
                Learn{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </CardBody>
          </Card>
        </a>

        <a
          className="group"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Card className="h-full shadow-2xl shadow-gray-200">
            <CardBody className="p-6">
              <h2 className="mb-3 text-xl font-semibold">
                Templates{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Explore starter templates for Next.js.
              </p>
            </CardBody>
          </Card>
        </a>

        <a
          className="group"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Card className="h-full shadow-2xl shadow-gray-200">
            <CardBody className="p-6">
              <h2 className="mb-3 text-xl font-semibold">
                Deploy{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </p>
            </CardBody>
          </Card>
        </a>
      </div>
    </main>
  );
}
