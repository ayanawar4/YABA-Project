import Layout from './layout';
import Aboutus from '@/components/landing-page-components/aboutUs';
import Ourchef from '@/components/landing-page-components/ourChef';
import Ourmenu from '@/components/landing-page-components/ourMenu';
import HeroSection from '@/components/landing-page-components/heroSection';
import { menuProducts, MenuProductType } from '@/constants/menuProducts';

type Props = {
  menuProducts: MenuProductType;
};

export default function Home(props: Props) {
  return (
    <Layout>
      <HeroSection />
      <div className='px-6'>
        <Aboutus />
        <Ourchef />
        <Ourmenu products={props.menuProducts} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      menuProducts,
    },
  };
};
