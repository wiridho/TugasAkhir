import { useDispatch } from "react-redux";
import { Button, Sidebar } from "flowbite-react";
import { HomeIcon, ChartPieIcon, CurrencyDollarIcon, InformationCircleIcon } from "@heroicons/react/24/outline";



const SidebarDashboard = () => {
  const dispatch = useDispatch();


  const handleLogout = () => {
    console.log("button clicked");
  };

  return (
    <>
      <Sidebar aria-label="Sidebar with content separator example" className="min-h-screen" >
      <Sidebar.Logo
          href="#"
          img="/favicon.svg"
          imgAlt="Flowbite logo"
        >
          Flowbite
      </Sidebar.Logo>
        <Sidebar.Items >
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/funder/beranda" icon={HomeIcon}>Beranda</Sidebar.Item>
            <Sidebar.Item href="/funder/portofolio" icon={ChartPieIcon}>Portofolio</Sidebar.Item>
            <Sidebar.Item href="/funder/pendanaan" icon={CurrencyDollarIcon}>Pendanaan</Sidebar.Item>
            <Sidebar.Item href="/funder/bantuan" icon={InformationCircleIcon}>Bantuan</Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item >
              <Button onClick={() => dispatch(handleLogout)}>Logout</Button>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
      
  );
};

export default SidebarDashboard;
