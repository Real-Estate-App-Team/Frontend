import { Outlet } from "react-router-dom";
import NavSection from "../components/common/menubar";
import Footer from "../components/common/footer";
import Topbar from "../components/common/topbar";

const UserLayout = () => {
  return (
    <>
      <Topbar />
      <NavSection />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
