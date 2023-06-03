import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useSelector } from "react-redux";
import Register from "./pages/authentication/Register";
import RegisterRoles from "./pages/authentication/RegisterRoles";
import Login from "./pages/authentication/Login";
import VerifyLogin from "./pages/authentication/VerifyLogin";
import Homepage from "./pages/Homepage/Homepage";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import VerifyEmail from "./pages/authentication/VerifyEmail";
import RegisterVerifySucess from "./pages/authentication/RegisterVerifySucess";

// Lender
import DashboardLender from "./components/DashboardLender/DashboardLender";
import Portofolio from "./components/DashboardLender/Portofolio";
import Pendanaan from "./components/DashboardLender/Pendanaan";
import Bantuan from "./components/DashboardLender/Bantuan";
import Beranda from "./components/DashboardLender/Beranda";
import Lending from "./pages/Lending/Lending";
// End Lender

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="funder" element={<DashboardLender />}>
          <Route path="beranda" element={<Beranda />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route path="pendanaan" element={<Pendanaan />} />
          <Route path="bantuan" element={<Bantuan />} />
        </Route>

        {/* <Route
          path="/homepage"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Homepage />
            </PrivateRoute>
          }
        ></Route> */}
        {/* VERIFY EMAIL ACCOUNT FROM EMAIL LINK */}
        <Route
          path="/authentication/verification/email/:userId/:token"
          element={<VerifyEmail />}
        />
        {/* END */}

        <Route path="/lending" element={<Lending />} />
        <Route path="/register" element={<RegisterRoles />} />
        <Route path="register/:roles" element={<Register />} />
        <Route path="/register/success" element={<RegisterVerifySucess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifylogin" element={<VerifyLogin />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
