import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import Contact from './components/Contact';
import ServicesPictureCard from './components/ServicesPictureCard';
import ServicesColorCard from './components/ServicesColorCard';
import ServicesMotionCard from './components/ServicesMotionCard';
import ServicesPostCard from './components/ServicesPostCard';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(50);
  const loadingH1 = useRef();

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoading(false);
        // setIndex(0);
      }, 3000);
      // setCount((currentCount) => currentCount++);
    });
  }, []);

  function LoadingComponent() {
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3,
        type: 'spring',
      }}
      className={`flex fixed top-0 left-0 bg-black w-screen h-screen z-50`}
    >
      <motion.h1
        ref={loadingH1}
        initial={{
          // right: '-123px',
          scale: 0.7,
          opacity: 0.7,
          fontSize: '1.5rem',
        }}
        animate={{
          // right: '0px',
          scale: 1,
          opacity: 1,
          fontSize: ` 2.5rem`,
        }}
        transition={{
          delay: 2,
          type: 'spring',
        }}
        className="relative transition-all flex justify-center  text-center items-center h-4/5 font-bold text-transparent bg-[linear-gradient(41deg,_rgb(168_43_55)_0%,_rgb(255_208_190)_100%)] bg-clip-text w-fit p-10 text-xl capitalize md:text-4xl"
      >
        Wow Welcome At last you came to the right place{' '}
      </motion.h1>
    </motion.div>;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: loading ? <LoadingComponent /> : <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          children: [
            {
              path: '/',
              element: <ServicesPictureCard />,
            },
            {
              path: '/mot',
              element: <ServicesMotionCard />,
            },
            {
              path: '/col',
              element: <ServicesColorCard />,
            },
            {
              path: '/pos',
              element: <ServicesPostCard />,
            },
          ],
        },
        {
          path: '/projects',
          element: <ProjectsPage />,
        },
        {
          path: '/services',
          element: <ServicesPage />,
          children: [
            {
              path: '/services/pic',
              element: <ServicesPictureCard />,
            },
            {
              path: '/services/mot',
              element: <ServicesMotionCard />,
            },
            {
              path: '/services/col',
              element: <ServicesColorCard />,
            },
            {
              path: '/services/pos',
              element: <ServicesPostCard />,
            },
          ],
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
