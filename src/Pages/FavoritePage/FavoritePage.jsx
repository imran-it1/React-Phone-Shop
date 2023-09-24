import { useEffect, useState } from "react";
import FavoritePhoneCard from "./FavoritePhoneCard";

const FavoritePage = () => {
	const [favorites, setFavorites] = useState([]);
	const [noDataFound, setNoDataFound] = useState(""); // Ekhane Empty array [], false, empty string "" deya jeto

	useEffect(() => {
		const getFavoritesFromLS = JSON.parse(
			localStorage.getItem("favorites"),
		);

		if (getFavoritesFromLS) {
			setFavorites(getFavoritesFromLS);
		} else {
			setNoDataFound("No Data Found");
		}
	}, []);

	return (
		<div className=" max-w-7xl mx-auto my-10">
			{/* Local Storage a data na thakle */}
			{noDataFound && (
				<div className=" h-[80vh] w-full flex justify-center items-center">
					<h1 className=" text-3xl font-semibold text-pink-600">
						{noDataFound}
					</h1>
				</div>
			)}

			{favorites && (
				<div className=" h-[30vh] bg-pink-100 mb-10 rounded">
					<h1 className=" flex justify-center items-center text-3xl font-medium h-full">
						Your Favorites
					</h1>
				</div>
			)}

			<div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
				{favorites?.map((phone) => (
					<FavoritePhoneCard
						key={phone.id}
						phone={phone}
					></FavoritePhoneCard>
				))}
			</div>
		</div>
	);
};

export default FavoritePage;
