import { createBrowserRouter } from "react-router";

import DashboardLayout from "../layouts/Dashboard";

import Summary from "../pages/Summary";
import Orders from "../pages/Orders";
import Holdings from "../pages/Holdings";
import Positions from "../pages/Positions";
import Funds from "../pages/Funds";
import Apps from "../pages/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children: [
      {
        path: "Dashboard",
        element: <Summary />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "holdings",
        element: <Holdings />,
      },
      {
        path: "positions",
        element: <Positions />,
      },
      {
        path: "funds",
        element: <Funds />,
      },
      {
        path: "apps",
        element: <Apps />,
      },
    ],
  },
]);