import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";

function App() {
  const { roles, is_auth } = useSelector((state) => state.auth);
  console.log(is_auth);
  console.log(roles);
  let is_public = is_auth ? false : true;

  return (
    <BrowserRouter>
      <Routes>
        {roles === "lender" && (
          // Dahboard Lender
          <>
            <Route
              path="*"
              element={<Navigate to={"/funder"} replace={true} />}
            />
            <Route
              path="/"
              element={<Navigate to={"/funder"} replace={true} />}
            />
            <Route
              path="funder"
              element={
                <ProtectRoute
                  valid={is_auth}
                  to={"/login"}
                  children={<DashboardLender />}
                />
              }
            >
              <Route path="" element={<Beranda />} />
              <Route path="beranda" element={<Beranda />} />
              <Route path="portofolio" element={<Portofolio />} />
              <Route path="pendanaan" element={<Pendanaan />} />
              <Route path="bantuan" element={<Bantuan />} />
            </Route>
          </>
        )}

        {roles === "borrower" && (
          // Dashboard Borrower
          <>
            <Route
              path="borrower"
              element={
                <ProtectRoute
                  valid={is_auth}
                  to={"/login"}
                  children={"Borrower Dashboard"}
                />
              }
            />
          </>
        )}

        {/* Public Route */}
        <Route path="*" element={<Navigate to={"/login"} replace={true} />} />
        <Route
          path="/"
          element={<ProtectRoute valid={is_public} children={<Lending />} />}
        />

        <Route
          path="/register"
          element={
            <ProtectRoute valid={is_public} children={<RegisterRoles />} />
          }
        />

        <Route
          path="/register/:roles"
          element={<ProtectRoute valid={is_public} children={<Register />} />}
        />
        <Route
          path="/authentication/verification/email/:userId/:token"
          element={
            <ProtectRoute valid={is_public} children={<VerifyEmail />} />
          }
        />
        <Route
          path="/register/success"
          element={
            <ProtectRoute
              valid={is_public}
              children={<RegisterVerifySucess />}
            />
          }
        />
        <Route
          path="/login"
          element={<ProtectRoute valid={is_public} children={<Login />} />}
        />
        <Route
          path="/verifylogin"
          element={
            <ProtectRoute valid={is_public} children={<VerifyLogin />} />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectRoute valid={is_public} children={<ForgotPassword />} />
          }
        />

        {/* VERIFY EMAIL ACCOUNT FROM EMAIL LINK */}
        {/* <Route
          path="/authentication/verification/email/:userId/:token"
          element={<VerifyEmail />}
        /> */}
        {/* END */}
        {/* <Route path="/register/success" element={<RegisterVerifySucess />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
          path="/verifylogin"
          element={
            <ProtectRoute valid={isPublic} to={"/"}>
              <VerifyLogin />
            </ProtectRoute>
          }
        /> */}
        {/* <Route path="/verifylogin" element={<VerifyLogin />} />
        <Route path="/reset-password" element={<ForgotPassword />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
