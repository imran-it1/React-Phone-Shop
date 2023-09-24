import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Components/Header/NavBar";
import { useEffect } from "react";

const MainLayout = () => {
	const location = useLocation();
	console.log(location);

	useEffect(() => {
		if (location.pathname === "/") {
			document.title = `phone - home`;
		} else {
			if (!location.state) {
				document.title = `phone ${location.pathname.replace(
					"/",
					"- ",
				)}`;
			} else {
				document.title = `${location.state}`;
			}
		}
	}, [location.pathname]);

	return (
		<div className=" leading-relaxed tracking-tight">
			{/* Navbar ta allways show hobe tai ekhane deya hoyece */}
			<NavBar></NavBar>
			<Outlet context={"imran"}></Outlet>
		</div>
	);
};

export default MainLayout;
