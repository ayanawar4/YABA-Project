import Aboutus from './aboutUs'
import HeroSection from './heroSection'
import { Inter } from 'next/font/google'
import Ourchef from './ourChef'
import Ourmenu from './ourMenu'
import Layout from './layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <div className='px-6'>
        <Aboutus />
        <Ourchef />
        <Ourmenu />
      </div>
    </Layout>
  )
}
