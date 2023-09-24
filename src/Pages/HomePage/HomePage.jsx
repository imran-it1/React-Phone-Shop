import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";
import { useState } from "react";
// import useGetPhones from "../../Hook/useGetPhones";

const HomePage = () => {
	const phones = useLoaderData();

	// OR using custom hook
	// const getPhones = useGetPhones();

	const [searchText, setSearchText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleInputText = (e) => {
		setSearchText(e.target.value);
	};

	return (
		<div>
			<Banner
				handleSubmit={handleSubmit}
				handleInputText={handleInputText}
			></Banner>
			<Phones phones={phones} searchText={searchText}></Phones>
		</div>
	);
};

export default HomePage;
