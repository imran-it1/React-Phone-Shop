import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";
import useGetPhones from "../../Hook/useGetPhones";

const HomePage = () => {
	const phones = useLoaderData();
	console.log(phones);

	// OR using custom hook
	const getPhones = useGetPhones();
	console.log(getPhones);

	return (
		<div>
			<Banner></Banner>
			<Phones phones={phones}></Phones>
		</div>
	);
};

export default HomePage;
