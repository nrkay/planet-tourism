import { useState } from "react";
function Crew() {
    const itemWidth = getComputedStyle(document.documentElement).getPropertyValue("--item-width");

    console.log(itemWidth)
    const [button, setButton] = useState();
    const content = [
        {
            "id": 1,
            "desc": "ini satu",
        },
        {
            "id": 2,
            "desc": "ini satu",
        },
        {
            "id": 3,
            "desc": "ini satu",
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex)

    const goToSlide = (index) => {
        console.log("tes")
        setCurrentIndex(index)
    }

    return (
        <>
            <div className="crew h-full bg-slate-400">
                <div className=" mx-4 lg:mx-12 bg-red-200 translate-y-28 h-4/5">
                    <h4><span>02</span>MEET YOUR CREW</h4>
                    <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2">
                        <div className="crew-desc grid justify-items-center bg-yellow-300">
                            {/* slides */}
                            <div className="crew-desc-item bg-red-300" style={{ translate: `calc(0 px - ${currentIndex} * ${itemWidth}) 0` }}>
                                <div className="crew-desc-items flex min-w-2/3"
                                    style={{ translate: `calc(0px - ${currentIndex} * ${itemWidth}) 0` }}>
                                    {content.map((item, index) => {
                                        return (
                                            <div key={index} className="element-item min-w-[320px] z-10 p-4">
                                                <h5>Pilot</h5>
                                                <h2>Nur Khairiyah</h2>
                                                <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* slide */}

                            {/* create dot */}
                            <div className="flex">
                                {content.map((item, index) => (
                                    <div key={index} onClick={() => goToSlide(index)} className="bg-gray-500 h-2 w-2 mx-1 rounded-full">
                                        {/* <p>{item.id}</p> */}
                                    </div>
                                ))}
                            </div>


                        </div>
                        <div className="crew-img bg-green-500">
                            <h1>ini gambar</h1>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Crew;