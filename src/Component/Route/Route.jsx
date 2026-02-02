import App from "../../App";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Install from "../Install/Install";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("./data.json"),
        Component: Home,
      },
      {
        path: "app",
        Component: About,
      },
      {
        path: "installization",
        Component: Install,
      },
    ],
  },
]);
