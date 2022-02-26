import { FC } from 'react'

import SEO from './SEO'

const Layout: FC = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="max-w-2xl mx-auto">{children}</div>
    </>
  )
}

export default Layout
