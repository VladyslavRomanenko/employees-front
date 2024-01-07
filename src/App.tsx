import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./paths/paths";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { ConfigProvider, theme } from "antd";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <HomePage />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
  {
    path: Paths.employeeAdd,
    element: <h1>employeeAdd</h1>,
  },
  {
    path: Paths.employeeEdit,
    element: <h1>employeeEdit</h1>,
  },
  {
    path: Paths.employee,
    element: <h1>employee</h1>,
  },
  {
    path: Paths.status,
    element: <h1>Status</h1>,
  },
]);
function App() {
  return (
    <div>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
