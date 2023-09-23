import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar";

const MainLayout = () => {
	return (
		<div className=" leading-relaxed tracking-tight">
			{/* Navbar ta allways show hobe tai ekhane deya hoyece */}
			<NavBar></NavBar>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
