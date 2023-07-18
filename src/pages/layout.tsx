import Head from 'next/head';
import Footer from '@/components/layout-components/footer';
import Header from '@/components/layout-components/navbar';

type LayoutProps = {
  children: React.ReactNode;
};


function Layout({ children }: LayoutProps) {

  return (
    <>
    <Head>
      <title>YABA</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Discover a New Dimension in Iraqi Cuisine"
      />
      <link rel="icon" href="/logo.jpg" />
    </Head>
    <div className='bg-[#1C1917]'>
      <div className="w-full flex-1 flex flex-col max-w-screen-2xl m-auto min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default Layout;
