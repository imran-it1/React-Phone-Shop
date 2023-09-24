import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRouter from "./Router/router";
import MainLayout from "./Layout/MainLayout";

// To see the use visit login page
// Create of Global Context
export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* You can pass anything as vlue in global context */}
		<GlobalContext.Provider value={"imran"}>
			<RouterProvider router={myCreatedRouter}>
				{/* Eta na dileo problem hoy na. Cause route ei etake root hisabe path declare kore deya ace */}
				<MainLayout></MainLayout>
			</RouterProvider>
		</GlobalContext.Provider>
	</React.StrictMode>,
);
