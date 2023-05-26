function Navbar() {
    return (
        <>
            <nav className="z-10 absolute w-screen">
                <div className="flex justify-between md:mx-10 mt-4 ">
                    <div className="logo-nav p-5">
                        ini gambar ya
                    </div>
                    <div className="menu-nav p-5">
                        <ul>
                            <li className="float-right text-white mx-10"><span className="font-bold text-white mr-1">03</span> Home</li>
                            <li className="float-right text-white mx-10"><span className="font-bold text-white mr-1">02</span> Home</li>
                            <li className="float-right text-white mx-10"><span className="font-bold text-white mr-1">01</span> Home</li>
                            <li className="float-right text-white mx-10"><span className="font-bold text-white mr-1">01</span> Home</li>
                        </ul>
                    </div>
                </div>

            </nav>

        </>
    );
}

export default Navbar;