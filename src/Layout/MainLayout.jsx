import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar";

const MainLayout = () => {
	return (
		<div>
			{/* Navbar ta allways show hobe tai ekhane deya hoyece */}
			<NavBar></NavBar>
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;
