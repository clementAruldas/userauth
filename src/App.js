import "./App.css";
import Login from "./components/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard";
import Layout from "./layout";
import Settings from "./components/settings/index";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import { getSessionData } from "./session";
import Profile from "./components/profile";
function App() {
  // const [userRole, setUserRole] = useState();
  const [admin, setAdmin] = useState(false);
  const [user, setuser] = useState(false);
  useEffect(() => {
    checkUser();
  }, [JSON.parse(sessionStorage.getItem("userdata"))]);
  const checkUser = async () => {
    let dataFetch = await getSessionData();
    // setUserRole(dataFetch);
    if (dataFetch?.active_module === "user") {
      setAdmin(true);
      setuser(true);
    } else {
      setAdmin(false);
      setuser(false);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="login">
          <Login />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: <DashBoard />,
      // loader: loader,
    },
    {
      path: "/settings",
      element: <Layout>{!admin ? <Settings /> : <NotFound />}</Layout>,
      // loader: loader,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
