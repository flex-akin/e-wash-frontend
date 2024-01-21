import { Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Loader from "../components/Loader";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register";
import LoginLayout from "../layouts/LoginLayout";
import GuestLayout from "../layouts/GuestLayout";
import GuestOrder from "../pages/Guest/GuestOrder";
import GuestOrderStatus from "../pages/Guest/GuestOrderStatus";
import Dashboard from "../pages/User/Dashboard";
import Verify from "../pages/Verify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/user" element={<LoginLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify" element={<Verify />} />
      </Route>

      <Route path="/dashboard" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="/">
        <Route index element={<Home />} />
      </Route>

      <Route path="/guest" element={<GuestLayout />} >
        <Route path="order" element={<GuestOrder />} />
        <Route path="status" element={<GuestOrderStatus />} />
      </Route>

    </>
  )
);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
