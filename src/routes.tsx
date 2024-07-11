import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";

import Layout from "@/layout";
import { PaymentPix, PaymentMethod, PaymentCard } from "@/pages";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PaymentMethod />,
      },
      {
        path: "payment-pix",
        element: <PaymentPix />,
      },
      {
        path: "payment-card",
        element: <PaymentCard />,
      },
      {
        path: "*",
        loader: async () => {
          return redirect("/");
        },
      },
    ],
  },
] as RouteObject[];

const router = createBrowserRouter(routes);

export default router;
