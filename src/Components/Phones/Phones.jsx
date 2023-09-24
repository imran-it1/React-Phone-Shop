import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";

const Phones = ({ phones, searchText }) => {
	const [searchPhone, setSearchphone] = useState([]);

	useEffect(() => {
		const filterPhone = phones?.filter((phone) =>
			phone.phone_name.includes(searchText),
		);
		setSearchphone(filterPhone);
	}, [searchPhone]);

	return (
		<div className=" max-w-7xl mx-auto">
			<h1 className="text-2xl text-center font-semibold">
				All Categories Phones
			</h1>

			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* All Phone */}
				{searchPhone?.map((phone) => (
					<PhoneCard key={phone.id} phone={phone}></PhoneCard>
				))}
			</div>
		</div>
	);
};

export default Phones;
