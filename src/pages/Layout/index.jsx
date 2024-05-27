import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function Layout() {
	return (
		<div className='flex flex-col w-full h-full'>
			<Header />
			<div className='w-10/12 mx-auto'>
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
