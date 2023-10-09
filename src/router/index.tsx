import { createHashRouter } from "react-router-dom";
import About from "../pages/About";
import Layout from "../components/Layout";
import Menu from "../pages/Menu";
import Contacts from "../pages/Contacts";

const BrowserRouter = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        Component: About
      },
      {
        path: "/menu",
        Component: Menu
      },
      {
        path: "/contacts",
        Component: Contacts
      },
    ],
  },
]);

export default BrowserRouter;