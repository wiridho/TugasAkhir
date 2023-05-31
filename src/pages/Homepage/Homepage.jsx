import jwtDecode from "jwt-decode";
import DashboardBorrower from "../Borrower/DashboardBorrower";
import DashboardLender from "../Lender/DashboardLender";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { token } = useSelector((state) => state.auth);
  const accessToken = token.accessToken;
  const decodeToken = jwtDecode(accessToken);
  const roles = decodeToken.roles;
  console.log("token Roles", roles);

  if (roles === "lender") {
    return <DashboardLender />;
  } else if (token === "borrower") {
    return <DashboardBorrower />;
  } else {
    return <DashboardBorrower />;
  }
};

export default Homepage;
