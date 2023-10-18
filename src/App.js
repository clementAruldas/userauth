import "./App.css";
import Login from "./components/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard";
import Layout from "./layout";
import { useEffect, useState } from "react";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="login">
          <Login />
        </div>
      ),

      // loader: checkUser,
    },
    {
      path: "/dashboard",
      element: <DashBoard />,
      // loader: checkUser,
    },
    {
      path: "/settings",
      element: <Layout>Settings</Layout>,
      // loader: checkUser,
    },

    // loader: checkUser,
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
