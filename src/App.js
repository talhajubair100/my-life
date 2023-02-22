import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/Signup/SignUp';
import Login from './Pages/Login/Login';
import Main from './Routes/Main';
import Home from './Pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {
        path: '/',
        element: <Home></Home>
      },
      
      
    ]},
    {path: '*', element: <div>404</div>},
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
  ])
  return (
    <div className='container'>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
