import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  customMeta?: any
}

const SEO: FC<Props> = ({ ...customMeta }) => {
  const router = useRouter()

  const getTitle = () => {
    const siteName = 'SITE NAME'

    switch (router.pathname) {
      case '/':
        return `Home | ${siteName}`
      case '/404':
        return `404 | ${siteName}`
      default:
        return `404 | ${siteName}`
    }
  }

  const meta = {
    site_name: 'SITE NAME',
    title: getTitle(),
    description: `SITE DESCRIPTION`,
    keywords: `SITE KEYWORDS`,
    author: `SITE AUTHOR`,
    type: 'website',
    ...customMeta
  }

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={meta.author} />
      <link rel="icon" href="/static/images/logo.png" />
      {/* <meta property="og:url" content={`/${router.asPath}`} /> */}
      {/* <link rel="canonical" href={`/${router.asPath}`} /> */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      {/* <meta property="og:image" content={meta.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.site_name} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {/* <meta name="twitter:image" content={meta.image} /> */}
    </Head>
  )
}

export default SEO
