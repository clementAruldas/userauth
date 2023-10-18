import "./App.css";
import Login from "./components/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard";
function App() {
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
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
