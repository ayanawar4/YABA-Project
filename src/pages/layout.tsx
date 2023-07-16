import Footer from '@/components/layout-components/footer';
import Header from '@/components/layout-components/navbar';

type LayoutProps = {
  children: React.ReactNode;
};


function Layout({ children }: LayoutProps) {

  return (
    <div className='bg-[#1C1917]'>
      <div className="w-full flex-1 flex flex-col justify-between  max-w-screen-2xl m-auto">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
