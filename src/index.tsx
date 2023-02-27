import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Landing from "./routes/Landing";
import Signup from "./routes/Signup";
import Organizers from "./routes/Organizers";
import FAQ from "./routes/FAQ";
import Rules from "./routes/Rules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "organizers",
        element: <Organizers />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);