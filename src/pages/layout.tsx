import Footer from './footer';
import Header from './navbar';

type LayoutProps = {
  children: React.ReactNode;
  custom?: React.FC;
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
