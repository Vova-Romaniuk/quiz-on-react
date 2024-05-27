import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className='h-14 w-full flex shadow-bottomShadow'>
			<nav className='flex w-10/12 gap-10 text-textColor text-2xl my-auto mx-auto'>
				<NavLink
					to='/'
					className='hover:text-accentTextColor flex cursor-pointer font-medium'>
					Quizes
				</NavLink>
				<NavLink
					to='/admin'
					className='hover:text-accentTextColor flex cursor-pointer font-medium'>
					Admin
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
