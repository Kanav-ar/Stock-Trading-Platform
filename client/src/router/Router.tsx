import { createBrowserRouter, Navigate } from "react-router";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Products from "../pages/Products";
import Signup from "../pages/Signup";
import Support from "../pages/Support";
import NotFound from "../pages/NotFound";
import EquityTable from "../components/pricing/dynamicTables-pricing/EquityTable";
import CurrencyTable from "../components/pricing/dynamicTables-pricing/CurrencyTable";
import CommodityTable from "../components/pricing/dynamicTables-pricing/CommodityTable";
import FandOTable from "../components/pricing/dynamicTables-pricing/F&O";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
        children: [
          {
            index: true,
            element: <Navigate to="equities" replace />,
          },
          {
            path: "equities",
            element: <EquityTable />,
          },
          {
            path: "F&O",
            element: <FandOTable />,
          },
          {
            path: "currency",
            element: <CurrencyTable />,
          },
          {
            path: "commodity",
            element: <CommodityTable />,
          },
        ],
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
