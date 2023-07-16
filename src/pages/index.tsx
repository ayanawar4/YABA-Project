import Layout from './layout'
import Aboutus from '@/components/landing-page-components/aboutUs'
import Ourchef from '@/components/landing-page-components/ourChef'
import Ourmenu from '@/components/landing-page-components/ourMenu'
import HeroSection from '@/components/landing-page-components/heroSection'


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
