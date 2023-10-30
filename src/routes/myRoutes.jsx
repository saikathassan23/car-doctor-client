import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import BookService from '../pages/BookService/BookService';
import Booking from '../pages/Booking/Booking';
import Login from '../pages/Home/Login/Login';
import Home from './../pages/Home/Home';
import Register from './../pages/Home/Register/Register';
import PrivateRoute from './PrivateRoute';

const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/services/:id',
        element: (
          <PrivateRoute>
            <BookService />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: '/booking',
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default myRoutes;
