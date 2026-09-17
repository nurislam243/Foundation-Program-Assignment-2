import { Outlet } from "react-router";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Root = () => {
  return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[85vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Root