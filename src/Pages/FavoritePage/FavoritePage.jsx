import { useEffect, useState } from "react";
import FavoritePhoneCard from "./FavoritePhoneCard";

const FavoritePage = () => {
	const [favorites, setFavorites] = useState([]);
	const [noDataFound, setNoDataFound] = useState(""); // Ekhane Empty array [], false, empty string "" deya jeto
	const [seeMore, setSeeMore] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

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

	useEffect(() => {
		const calculateTotalPrice = favorites.reduce(
			(pre, currentItem) => pre + currentItem.price,
			0,
		);
		console.log(calculateTotalPrice);
		setTotalPrice(calculateTotalPrice);
	}, [favorites]);

	const handleDeleteAll = () => {
		localStorage.clear();
		setFavorites([]);
		setNoDataFound("No Data Found");
		setTotalPrice(0);
	};

	return (
		<div className=" max-w-7xl mx-auto my-10">
			<div className=" h-[30vh] bg-pink-100 mb-10 rounded">
				<h1 className=" flex justify-center items-center text-3xl font-medium h-full">
					Your Favorites
				</h1>
			</div>

			{/* Local Storage a data na thakle */}
			{noDataFound && (
				<div className=" h-[30vh] w-full flex justify-center items-center">
					<h1 className=" text-3xl font-semibold text-pink-600">
						{noDataFound}
					</h1>
				</div>
			)}

			{favorites.length > 0 && (
				<div className=" flex justify-center items-center ">
					<button
						onClick={handleDeleteAll}
						className="inline-block font-medium px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded duration-300"
					>
						Delete All
					</button>
				</div>
			)}

			<h1 className="text-2xl font-medium text-center mt-5">
				Total Price: $ {totalPrice}
			</h1>

			<div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
				{seeMore
					? favorites?.map((phone) => (
							<FavoritePhoneCard
								key={phone.id}
								phone={phone}
							></FavoritePhoneCard>
					  ))
					: favorites
							?.slice(0, 3)
							.map((phone) => (
								<FavoritePhoneCard
									key={phone.id}
									phone={phone}
								></FavoritePhoneCard>
							))}
			</div>

			{favorites.length > 3 && (
				<div className="flex justify-center items-center mt-5">
					<button
						onClick={() => setSeeMore(!seeMore)}
						className=" inline-block  px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded duration-300 font-medium"
					>
						{seeMore ? "See Less" : "See More"}
					</button>
				</div>
			)}
		</div>
	);
};

export default FavoritePage;
