
import { useRouteError } from 'react-router-dom';
import "@lottiefiles/lottie-player";
const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);
  
    return (
        
      <main  id="error-page" className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-bold text-indigo-600">404</p>
          <iframe src="https://lottie.host/embed/a524572f-f7e8-47b4-89a4-5cc116163128/q7MeMgmHsQ.json"></iframe>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <p  className="mt-6 text-base leading-7 text-gray-600"><i>{error.statusText || error.message}</i></p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
          
    );
};

export default ErrorPage;