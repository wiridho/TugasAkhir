// import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import SidebarDashboard from "./Sidebar";
import { Button } from "flowbite-react";

const DashboardLender = () => {
  // const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("button logout clicked");
  };

  return (
    <div>
      <div className="flex min-h-screen">
        {/* Siderbar */}
        <div className="flex flex-col justify-between py-8 px-8 w-1/6">
          <div className="flex flex-col">
            <Link to={"/funder/beranda"} className="px-4 py-2 bg-slate-400">
              Beranda
            </Link>
            <Link to={"/funder/portofolio"} className="px-4 py-2 bg-slate-400">
              Portofolio
            </Link>
            <Link to={"/funder/pendanaan"} className="px-4 py-2 bg-slate-400">
              Pendanaan
            </Link>
            <Link to={"/funder/bantuan"} className="px-4 py-2 bg-slate-400">
              Bantuan
            </Link>
          </div>
          <div>
            <button className="px-4 py-2 bg-slate-400 w-full">Logout</button>
          </div>
        </div>
        {/* End Sidebar */}
        <div className="grow p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLender;
