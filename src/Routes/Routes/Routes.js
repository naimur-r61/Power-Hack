import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Auth/Login';
import SignUp from '../../Auth/SignUp';
import Main from '../../LayOut/Main';



export const Routes = createBrowserRouter([

   // Main Layout 
   {
      path: '/', element: <Main />, children: [
         { path: '/', element: <Login /> },
         { path: '/login', element: <Login /> },
         { path: '/signup', element: <SignUp /> },
         // { path: '/home', element: <Home /> },
         // { path: '/details/:id', element: <PrivetRoutes><Details /></PrivetRoutes>, loader: ({ params }) => fetch(`https://m-server-pi.vercel.app/posts/${params.id}`) },

      ]
   },

])

