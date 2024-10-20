import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Statistic from "./Pages/Statistic";
import Product from "./Pages/Products"
import Orders from "./Pages/Orders"
import Transactions from "./Pages/Transactions"
import Promotions from "./Pages/Promotions"
import Messages from "./Pages/Messages"
import Reviews from "./Pages/Reviews"
import Settings from "./Pages/Settings"
import Login from "./Pages/PublicPages/Login";
import SignUp from "./Pages/PublicPages/SignUp";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,

  },
  {
    path: "/signup",
    element: <SignUp />,

  },
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),

    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
           <Dashboard />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
      {
        path: "/statistic",
        element: (
          <ProtectedRoute>
           <Statistic />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
      {
        path: "/product",
        element: (
          <ProtectedRoute>
           <Product />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
      {
        path: "/order",
        element: (
          <ProtectedRoute>
           <Orders />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
      {
        path: "/transaction",
        element: (
          <ProtectedRoute>
           <Transactions />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
      {
        path: "/promotion",
        element: (
          <ProtectedRoute>
           <Promotions />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
      {
        path: "/message",
        element: (
          <ProtectedRoute>
           <Messages />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
      {
        path: "/review",
        element: (
          <ProtectedRoute>
           <Reviews />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
      {
        path: "/setting",
        element: (
          <ProtectedRoute>
           <Settings />   {/* I wrapped the routes i want to protect with the protected routes */}
          </ProtectedRoute>
        )
      },
    ],
  },
]);

export default router;
