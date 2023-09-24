import { Link } from "react-router-dom";

const FavoritePhoneCard = ({ phone }) => {
	const { image, phone_name, brand_name, price } = phone || {};
	console.log(phone);
	return (
		<div className=" mt-10">
			<div className="flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
				<div className="mx-4 mt-2 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
					<img src={image} className="h-[350px] w-full" />
				</div>
				<div className="p-2">
					<div className="mb-2 flex items-center justify-between">
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							{brand_name}
						</p>
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							{phone_name}
						</p>
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							$ {price}
						</p>
					</div>
				</div>
				<div className="p-6 pt-0">
					<Link>
						<button className="block normal-case w-full select-none rounded-lg bg-pink-200 hover:bg-pink-300 py-3 px-6 text-center align-middle text-sm font-bold text-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85]">
							Buy Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FavoritePhoneCard;
