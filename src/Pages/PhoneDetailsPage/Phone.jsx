import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsPage from "./PhoneDetailsPage";
import { useEffect, useState } from "react";

const Phone = () => {
	const [phone, setPhone] = useState([]);

	const phones = useLoaderData();
	const { id } = useParams();

	useEffect(() => {
		const phoneById = phones?.find((phone) => phone.id === id);
		setPhone(phoneById);
	}, [phone, id]);

	return (
		<div className=" max-w-7xl mx-auto my-10">
			<PhoneDetailsPage phone={phone}></PhoneDetailsPage>
		</div>
	);
};

export default Phone;
