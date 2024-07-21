import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./store/index.js";
import Home from "./routes/Home.jsx";
import Concrete from "./routes/Concrete.jsx";
import Brickwork from "./routes/Brickwork.jsx";
import Plaster from "./routes/Plaster.jsx";
import Mortar from "./routes/Mortar.jsx";
import Putty from "./routes/Putty.jsx";
import Paint from "./routes/Paint.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Concrete",
        element: <Concrete />,
      },
      {
        path: "/Brickwork",
        element: <Brickwork />,
      },
      {
        path: "/Plaster",
        element: <Plaster />,
      },
      {
        path: "/Mortar",
        element: <Mortar />,
      },
      {
        path: "/Putty",
        element: <Putty />,
      },
      {
        path: "/Paint",
        element: <Paint />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myStore} >
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
