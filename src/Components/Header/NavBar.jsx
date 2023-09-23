import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
	return (
		<div className="py-5 shadow-lg">
			<div className=" max-w-7xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<Logo></Logo>
				<nav>
					<ul className=" flex gap-14">
						{/* Home Route */}
						<li className="hover:underline hover:text-pink-600">
							<NavLink
								to="/"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "text-pink-600 underline"
										: ""
								}
							>
								Home
							</NavLink>
						</li>
						{/* Favorirte Route */}
						<li className="hover:underline hover:text-pink-600">
							<NavLink
								to="/favorite"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "text-pink-600 underline"
										: ""
								}
							>
								Favorite
							</NavLink>
						</li>
						{/* Login Route */}
						<li className=" hover:underline hover:text-pink-600">
							<NavLink
								to="/login"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "text-pink-600 underline"
										: ""
								}
							>
								Login
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
