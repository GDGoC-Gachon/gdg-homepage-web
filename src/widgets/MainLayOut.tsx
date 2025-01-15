import { Outlet } from "react-router-dom";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

function MainLayOut() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow pt-[4.125rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayOut;
