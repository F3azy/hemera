import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SocialIconList from "../components/SocialIconList";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <SocialIconList />
      <main className="w-screen px-40 pt-[96px] flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
