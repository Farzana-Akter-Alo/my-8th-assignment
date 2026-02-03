import App from "../../App";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Install from "../Install/Install";
import CardDetails from "../Pages/CardDetails";
import SingleCardDetails from "../Pages/SingleCardDetails";
import Error from "../Error/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        loader: () => fetch("./data.json"),
        Component: Home,
      },
      {
        path: "/app",
        loader: () => fetch("./data.json"),
        Component: CardDetails,
      },
      {
        path: "/app/:id",
        loader: () => fetch("./data.json"),
        Component: SingleCardDetails,
      },
      {
        path: "/installization",
        Component: Install,
      },
      
    ],
  },
]);
