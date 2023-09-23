import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import FavoritePage from "../Pages/FavoritePage/FavoritePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Pages/PhoneDetailsPage/Phone";

const myCreatedRouter = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,

		children: [
			{
				path: "/",
				element: <HomePage></HomePage>,
				loader: () => fetch("../../public/phones.json"),
			},
			{
				path: "/favorite",
				element: <FavoritePage></FavoritePage>,
			},
			{
				path: "/login",
				element: <LoginPage></LoginPage>,
			},
			{
				path: "/phones/:id",
				element: <Phone></Phone>,
				loader: () => fetch("../../public/phones.json"),
			},
		],
	},
]);

export default myCreatedRouter;
