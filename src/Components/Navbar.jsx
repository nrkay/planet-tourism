import logo from "../assets/logo.svg";
import menu from "../assets/Group.png";
import exitIcon from "../assets/exit.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const [classNav, setclassNav] = useState(
        "-translate-x-full md:hidden flex justify-end w-screen"
    );
    const handleMenu = () => {
        if (classNav === "-translate-x-full md:hidden flex justify-end w-screen") {
            setclassNav(
                "translate-x-0 md:hidden flex justify-end w-screen  absolute -top-0"
            );
        } else {
            setclassNav("-translate-x-full md:hidden flex justify-end w-screen");
        }
    };
    return (
        <>
            <nav className="z-10 absolute w-screen">
                <div className="nav-lg">
                    <div className="flex justify-between md:mx-10 mt-4 ">
                        <div className="logo-nav md:p-3 lg:p-5">
                            <img src={logo} alt="" />
                        </div>
                        <div className="menu-nav p-5">
                            <ul>
                                <Link
                                    to={"/technology"}
                                    className="float-right text-white md:mx-5 lg:mx-10"
                                >
                                    <span className="font-bold text-white mr-1">03</span>
                                    TECHNOLOGY
                                </Link>
                                <Link
                                    to={"/crew"}
                                    className="float-right text-white md:mx-5 lg:mx-10"
                                >
                                    <span className="font-bold text-white mr-1">02</span>CREW
                                </Link>
                                <Link
                                    to={"/destination"}
                                    className="float-right text-white md:mx-5 lg:mx-10"
                                >
                                    <span className="font-bold text-white mr-1">01</span>
                                    DESTINATION
                                </Link>
                                <Link
                                    to={"/"}
                                    className="float-right text-white md:mx-5 lg:mx-10"
                                >
                                    <span className="font-bold text-white mr-1">00</span>HOME
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* nav for mobile */}
                <div className="nav-md flex justify-between w-screen p-3 my-3 text-white md:hidden">
                    <div className="nav-log-cd px-2">
                        <img src={logo} alt="" />
                    </div>
                    <div className="pt-1 px-2">
                        <button onClick={handleMenu}>
                            <img src={menu} alt="" />
                        </button>
                    </div>
                </div>
                {/* end nav for mobile */}
                {/* menu in navbar for mobile */}
                <div className={classNav}>
                    <div className="menu-cd w-3/4  h-screen p-5">
                        <div className="grid justify-items-stretch mb-10">
                            <button className="justify-self-end" onClick={handleMenu}>
                                <img src={exitIcon} alt="" />
                            </button>
                        </div>
                        <ul className="mx-5">
                            <Link to={"/"} className="float-right text-white w-full my-2">
                                <span className="font-bold mr-1">00</span>HOME
                            </Link>
                            <Link
                                to={"/destination"}
                                className="float-right text-white w-full my-2"
                            >
                                <span className="font-bold mr-1">01</span>DESTINATION
                            </Link>
                            <Link to={"/crew"} className="float-right text-white w-full my-2">
                                <span className="font-bold mr-1">02</span>CREW
                            </Link>
                            <Link
                                to={"/technology"}
                                className="float-right text-white w-full my-2"
                            >
                                <span className="font-bold mr-1">03</span>TECHNOLOGY
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
