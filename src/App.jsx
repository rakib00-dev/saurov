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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
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
