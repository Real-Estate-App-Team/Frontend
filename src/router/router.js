import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import UserLayout from '../layouts/user-layout';
import { SignUp } from '../pages/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
         path:"signUp",
         element:<SignUp/> 
      },
    ],

  },
]);
