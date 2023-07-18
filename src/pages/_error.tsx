import Layout from "./layout"


export default function ErrorPage() {

  return (
    <Layout>
      <div className="container mx-auto">
        <main className="mx-auto flex w-full flex-auto flex-col justify-center px-6 py-24 sm:py-32 lg:px-8">
          <p className="text-base font-semibold leading-8 text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-white">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10">
            <a href="/" className="text-sm font-semibold leading-7 text-primary  hover:text-white">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </main>
        </div>
    </Layout>
  )
}
