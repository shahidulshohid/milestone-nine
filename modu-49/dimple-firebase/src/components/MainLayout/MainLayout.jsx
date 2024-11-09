import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
    return (
        <div>
            <h1>Dimple firebase project</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;