import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="nav-container font-lexend">
            <div className="navbar bg-base-100 flex justify-between items-center">
                <div className="navbar-start w-5/6 md:w-1/4">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-[#150B2Bab] dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>Allocation</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <div className="logo-brand flex justify-between items-center gap-3">
                        <img className="w-10 h-10" src="https://i.ibb.co/wNwbkbh/restaurant.png" alt="official-icon" />
                        <a className="btn-ghost font-bold text-xl md:text-3xl text-[#150B2B] ">Recipe Calories</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-[#150B2Bab] px-1 gap-10 text-xl">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>Allocation</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control hidden md:flex">
                        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                        <div className="input bg-gray-100 px-4 py-2 rounded-xl input-bordered flex justify-center items-center gap-4">
                            <CiSearch className="text-lg md:text-2xl"></CiSearch>
                            <input type="text" placeholder="Search" className="p-2 bg-transparent focus:outline-none cursor-not-allowed text-sm md:text-xl"/>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/F0gKTZ4/profile2.png" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-20 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                        <li>
                            <div className="input bg-gray-100 my-3 mx-2 px-2 py-1 rounded-xl input-bordered flex justify-center items-center gap-4">
                                <CiSearch className="text-sm"></CiSearch>
                                <input type="text" placeholder="Search" className="p-1 w-full bg-transparent focus:outline-none cursor-not-allowed text-sm"/>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;