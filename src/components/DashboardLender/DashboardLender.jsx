// import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import SidebarDashboard from "./Sidebar";

const DashboardLender = () => {
  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //   console.log("button logout clicked");
  // };

  return (
    <div>
      <div className="flex min-h-screen">
            <SidebarDashboard />
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLender;
