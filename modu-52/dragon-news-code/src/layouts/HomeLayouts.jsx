import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 pt-5">
      <aside className="left col-span-3">
        <LeftNavbar></LeftNavbar>
      </aside>
      <section className="col-span-6">
        <Outlet></Outlet>
        </section>
      <aside className="right col-span-3">
        <RightNavbar></RightNavbar>
      </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
