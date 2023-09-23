import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import FavoritePage from "../Pages/FavoritePage/FavoritePage";
import LoginPage from "../Pages/LoginPage/LoginPage";

const myCreatedRouter = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,

		children: [
			{
				path: "/",
				element: <HomePage></HomePage>,
			},
			{
				path: "/favorite",
				element: <FavoritePage></FavoritePage>,
			},
			{
				path: "/login",
				element: <LoginPage></LoginPage>,
			},
		],
	},
]);

export default myCreatedRouter;
