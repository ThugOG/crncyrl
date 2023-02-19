import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Body from "./components/Body";
// import Favourites from "./components/Favourites";
import DetailPage from "./components/DetailPage";
import  Search  from "./components/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Favourites = lazy(()=> import("./components/Favourites"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/favourites",
        element: <Suspense><Favourites /></Suspense>,
      },
      {
        path: "/getDetails/:name",
        element: <DetailPage />
      },
      {
        path: "/search",
        element: <Search />
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
