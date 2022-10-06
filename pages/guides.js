import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import PreviewWarning from '../components/preview-warning'
import Sidebar from '../components/sidebar'

const navigation = [
  { name: 'Overview', href: '/guides', current: true },
  { name: 'TODO', href: '#', current: false },
]

export default function Guides() {
  return (
    <div>
      <Head>
        <title>Guides | at:// protocol</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex border-b border-gray-100">
        <Sidebar navigation={navigation} />
        <div className="flex-1 px-4 py-4">
          <div className="mb-4">
            <PreviewWarning rounded />
          </div>
          TODO
        </div>
      </div>
      <Footer />
    </div>
  )
}
