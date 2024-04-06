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
import About from "../pages/About";
import Service from "../pages/Service";
import Location from "../pages/FindLocation";
import Prices from "../pages/Price";
import UserOrder from "../pages/User/UserOder";
import Feedback from "../pages/User/Feedback";
import SubsPlan from "../pages/User/SubsPlan";
import Settings from "../pages/User/Settings";
import ForgotPassword from "../pages/ForgotPassword";
import ViewFeedback from "../pages/Admin/ViewFeedback";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/user">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify" element={<Verify />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Route>

      <Route path="/dashboard" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="user-order" element={<UserOrder />} />
        <Route path="confirm-order" element={<Dashboard />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="subscribe" element={<SubsPlan />} />
        <Route path="settings" element={<Settings />} />
        <Route path="view-feedback" element={< ViewFeedback />} />
      </Route>

      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="location" element={<Location />} />
        <Route path="prices" element={<Prices/>} />
      </Route>

      <Route path="/guest" element={<GuestLayout />}>
        <Route path="order" element={<GuestOrder />} />
        <Route path="status" element={<GuestOrderStatus />} />
      </Route>
    </>,
  ),
);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
