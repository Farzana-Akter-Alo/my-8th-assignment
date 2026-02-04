import App from "../../App";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Install from "../Install/Install";
import CardDetails from "../Pages/CardDetails";
import SingleCardDetails from "../Pages/SingleCardDetails";
import Error from "../Error/Error";

const loadData = async () => {
  const res = await fetch("/data.json");
  if (!res.ok) throw new Response("Failed to load data", { status: 500 });
  return res.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: loadData,
        element: <Home />,
      },
      {
        path: "app",
        loader: loadData,
        element: <CardDetails />,
      },
      {
        path: "app/:id",
        loader: async ({ params }) => {
          const data = await loadData();
          const card = data.find((c) => c.id === parseInt(params.id));
          if (!card) throw new Response("Not Found", { status: 404 });
          return card;
        },
        element: <SingleCardDetails />,
      },
      {
        path: "installization",
        element: <Install />,
      },
    ],
  },
]);
