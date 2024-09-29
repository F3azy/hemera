import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SocialIconList from "../components/SocialIconList";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-x-clip">
      <Navbar />
      <SocialIconList />
      <main className="w-screen px-5 xl:px-40 pt-[96px] pb-5 xl:pb-0 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
