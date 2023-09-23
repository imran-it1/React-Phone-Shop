import { Link } from "react-router-dom";
import Swal from "sweetalert2";

//Phone Detail card name dile besi relavant hoto
const PhoneDetailsPage = ({ phone }) => {
	const { id, image, phone_name, brand_name } = phone || {};

	const handleAddToFavorite = (id) => {
		const addFavoriteArray = [];

		const getSavedFavorite = JSON.parse(localStorage.getItem("favorites"));
		// console.log(getSavedFavorite); //array [{}]
		if (!getSavedFavorite) {
			addFavoriteArray.push(phone);
			localStorage.setItem("favorites", JSON.stringify(addFavoriteArray));
			Swal.fire({
				icon: "success",
				title: "Added To Favorites",
				text: "Visit favorites section to see your added products!",
			});
		} else {
			const isSimillar = getSavedFavorite?.find(
				(phone) => phone.id === id,
			);

			if (!isSimillar) {
				addFavoriteArray.push(...getSavedFavorite, phone);
				localStorage.setItem(
					"favorites",
					JSON.stringify(addFavoriteArray),
				);
				Swal.fire({
					icon: "success",
					title: "Added To Favorites",
					text: "Visit favorites section to see your added products!",
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Already Added",
					text: "Can't added multiple times!",
				});
			}
		}
	};

	return (
		<div className=" max-w-7xl mx-auto my-10">
			<div className=" h-[30vh] bg-pink-100 mb-10 rounded">
				<h1 className=" flex justify-center items-center text-3xl font-medium h-full">
					Phone Details
				</h1>
			</div>

			<div className=" flex justify-center items-center">
				<div className="relative flex items-center max-w-[42rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
					<div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
						<img
							src={image}
							alt="image"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="flex flex-col justify-center items-center p-6">
						<h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
							{brand_name}
						</h6>
						<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
							{phone_name}
						</h4>
						<a className="inline-block" href="#">
							<button
								onClick={() => handleAddToFavorite(id)}
								className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all bg-pink-100 hover:bg-pink-100/50 hover:text-pink-600 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
								type="button"
							>
								Add To Favorites
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
									className="h-4 w-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									></path>
								</svg>
							</button>
						</a>
					</div>
				</div>
			</div>

			<div className="p-6 pt-0 flex justify-center items-center mt-10">
				<Link to={"/"}>
					<button className="block normal-case select-none rounded-lg bg-pink-200 hover:bg-pink-300 py-3 px-6 text-center align-middle text-sm font-bold text-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85]">
						Go Back
					</button>
				</Link>
			</div>

			<div className=" flex justify-center items-center mt-10">
				<h1>All Rights Reserved &reg; Phone Shop &trade;</h1>
			</div>
		</div>
	);
};

export default PhoneDetailsPage;
