import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[96px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
