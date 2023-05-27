import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <div className="h-screen grid justify-items-stretch grid-rows-2 lg:grid-cols-2 z-0 md:mt-6 lg:mt-0 ">
                <div className="lg:h-screen  justify-self-center flex items-stretch mt-12 md:mt-0">
                    <div className="home-left self-center lg:self-end p-14">
                        <h2>SO, YOU WANT TO TRAVEL TO</h2>
                        <h1 className="text-center">SPACE</h1>
                        <p>Let’s face it; if you want to go to space, you might as well
                            genuinely go to outer space and not hover kind of on the edge of it.
                            Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </div>
                <div className="home-right lg:h-screen">
                    {/* <div className="bg-white md:h-1/3 h-2/4 rounded-full p-16 lg:p-24">EXPLORE</div> */}
                    {/* <div className="bg-white h-auto flex">EXPLORE</div> */}
                </div>
            </div>
        </>
    );
}

export default Home;