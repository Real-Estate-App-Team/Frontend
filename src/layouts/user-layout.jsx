import { Outlet } from "react-router-dom";
import NavSection from "../components/common/navbar";
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
