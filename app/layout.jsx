import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Based Loans',
    template: '%s | Based Loans',
  },
  description:
    'Official documentation for Based Loans. Zero-liquidation DeFi lending on Base.',
  openGraph: {
    title: 'Based Loans Documentation',
    description:
      'Official documentation for Based Loans. Zero-liquidation DeFi lending on Base.',
    siteName: 'Based Loans Docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Based Loans Documentation',
    description:
      'Official documentation for Based Loans. Zero-liquidation DeFi lending on Base.',
  },
  metadataBase: new URL('https://docs.based.loans'),
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.15rem' }}>
        Based Loans
      </span>
    }
    projectLink="https://github.com/basedloans"
  />
)

const footer = (
  <Footer>
    <span>
      © {new Date().getFullYear()} Based Loans. All rights reserved.
    </span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
          darkMode={true}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
