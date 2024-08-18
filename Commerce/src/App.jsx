import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./y/Layout/Layout";
import Home from "./y/Home/Home";
import Products from "./y/Products/Products";
import Cart from "./y/Cart/Cart";
import Brands from "./y/Brands/Brands";
import Categories from "./y/Categories/Categories";
import Register from "./y/Register/Register";
import NotFound from "./y/NotFound/NotFound";
import Error from "./y/Error/Error"
import Login from './y/Login/Login';
import AuthContextProvider from './context/AuthContext';
import CartContextProvider from './context/CartContext';
import ProtectedRoute from './y/ProtectedRoute/ProtectedRoute';
import ProductDetails from './y/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import NavBar from './y/NavBar/NavBar';

function App() {


  const router = createBrowserRouter([

    {
      path : "", 
      element : <Layout/>,
      errorElement : <Error/>,
      children : [

        {
          index: true,
          element : <Home/> 
        },
        {
          path : "/products",
          element : <ProtectedRoute>
            <Products/> 
          </ProtectedRoute>
        },
        {
          path : "/cart",
          element : <ProtectedRoute>
            <Cart/> 
          </ProtectedRoute>
        },
        {
          path : "/brands",
          element : <ProtectedRoute>
            <Brands/>
          </ProtectedRoute> 
        },
        
        {
          path : "/categories",
          element : <ProtectedRoute>
            <Categories/> 
          </ProtectedRoute>
        },
        {
          path : "/product-details/:id/:category",
          element : 
            <ProductDetails/> 
        
        },
        {
          path : "/register",
          element : <Register/> 
        },
        {
          path : "/login",
          element : <Login/> 
        },
        {
          path : "*",
          element : <NotFound/> 
        },


      ]
    }

  ])

  return (
    <>

    <AuthContextProvider>
    <CartContextProvider>

    <RouterProvider router = {router}/>
    <ToastContainer />

    </CartContextProvider>


    </AuthContextProvider>
    </>
  )
}

export default App
