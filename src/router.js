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

const router = createBrowserRouter([
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
        element: <Dashboard />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/order",
        element: <Orders />,
      },
      {
        path: "/transaction",
        element: <Transactions />,
      },
      {
        path: "/promotion",
        element: <Promotions />,
      },
      {
        path: "/message",
        element: <Messages />,
      },
      {
        path: "/review",
        element: <Reviews />,
      },
      {
        path: "/setting",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
