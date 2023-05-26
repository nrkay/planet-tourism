import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
            <div className="">
                <Navbar />
                <div className="grid grid-rows-2 lg:grid-cols-2 z-0">
                    <div className="h-screen flex items-stretch">
                        <div className="home-left self-center lg:self-end p-14">
                            <h2>SO, YOU WANT TO TRAVEL TO</h2>
                            <h1 className="text-center">SPACE</h1>
                            <p>Let’s face it; if you want to go to space, you might as well
                                genuinely go to outer space and not hover kind of on the edge of it.
                                Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </div>
                    </div>
                    <div className="home-right">
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;