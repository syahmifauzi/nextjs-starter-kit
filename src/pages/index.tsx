import { NextPage } from 'next'
import { FaBeer } from 'react-icons/fa'

import { Layout } from '@components'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Next.js Starter Kit</h1>
      <p className="mt-4 mb-2 font-bold">This Starter Kit Includes:</p>
      <ul className="list-disc pl-4">
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>Prettier</li>
        <li>Absolute Import</li>
        <li>SEO &amp; Layout Components</li>
        <li>Custom 404 Page</li>
        <li>
          React Icons <FaBeer className="inline" />
        </li>
      </ul>
      <p className="mt-4 mb-2 font-bold">Quick Start</p>
      <code>
        <pre>
          npx create-next-app -e
          https://github.com/syahmifauzi/nextjs-starter-kit my-app
          <br />
          cd my-app
          <br />
          npm run dev
          <br /># open http://localhost:3000
        </pre>
      </code>
    </Layout>
  )
}

export default HomePage
