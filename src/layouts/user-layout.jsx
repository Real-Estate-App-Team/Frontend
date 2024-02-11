import { Outlet } from "react-router-dom";
import NavSection from "../components/common/menubar";
import Footer from "../components/common/footer";
import Topbar from "../components/common/topbar";
import Slider from "../components/home-page/slider";


const UserLayout = () => {
  return (
    <>
      <Topbar />
      <NavSection />
      <Outlet />
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>

      <Footer />
    </>
  );
};

export default UserLayout;
