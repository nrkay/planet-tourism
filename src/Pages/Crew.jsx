import { useState } from "react";
import crew1 from "../assets/crew1.webp";
import crew2 from "../assets/crew2.webp"
import crew3 from "../assets/crew3.webp"
import crew4 from "../assets/crew4.webp"
function Crew() {
    const itemWidth = getComputedStyle(document.documentElement).getPropertyValue(
        "--item-width"
    );

    const imgWidth = getComputedStyle(document.documentElement).getPropertyValue(
        "--img-width: 300px;"
    )

    console.log(itemWidth);
    const content = [
        {
            id: 0,
            desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            name: "Douglas Hurley",
            position: "Commander",
            img: crew1,
        },
        {
            id: 1,
            desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            name: "MARK SHUTTLEWORTH",
            position: "Mission Specialist ",
            img: crew2,
        },
        {
            id: 2,
            desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
            name: "Victor Glover",
            position: "Pilot ",
            img: crew3,
        },
        {
            id: 3,
            desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
            name: "Anousheh Ansari",
            position: "Flight Engineer ",
            img: crew4,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="crew h-screen">
                <div className=" mx-4 lg:mx-12  translate-y-28">
                    <h4>
                        <span>02</span>MEET YOUR CREW
                    </h4>
                    <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 max-h-full">
                        <div className=" crew-desc grid justify-items-center order-2 lg:order-1 translate-y-10 lg:-traslate-y-10">
                            <div
                                className="crew-desc-item"
                            >
                                <div
                                    className="crew-desc-items flex min-w-2/3"
                                    style={{
                                        translate: `calc(0px - ${currentIndex} * ${itemWidth}) 0`,
                                    }}
                                >
                                    {content.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="element-item min-w-[320px] z-10 p-4"
                                            >
                                                <h5>{item.position}</h5>
                                                <h2>{item.name}</h2>
                                                <p>{item.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex">
                                {content.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className="bg-gray-500 h-2 w-2 mx-1 rounded-full"
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div className=" crew-img max-h-fit order-1 lg:order-2 flex justify-center">
                            <div className="hidden lg:block">
                                <div className="h-56 lg:h-96 bg-red-300 flex justify-center">
                                    {content.filter(item => item.id == currentIndex).map((item) => {
                                        return (
                                            <>
                                                <img className="max-h-full bg-green-300" src={item.img} alt="" />
                                            </>

                                        )
                                    })}
                                </div>
                            </div>
                            <div className="lg:hidden">
                                <div className="imgs-crew h-56 w-[300px] lg:h-96 bg-red-300 flex z-10"
                                    style={{
                                        translate: `calc(0px - ${currentIndex} * ${imgWidth}) 0`,
                                    }}
                                >
                                    <div className="min-w-[300px] h-56 bg-green-300">
                                        <h1>1</h1>
                                    </div>
                                    <div className="min-w-[300px] h-56 bg-yellow-300">
                                        <h1>1</h1>
                                    </div>
                                    <div className="min-w-[300px] h-56 bg-green-600">
                                        <h1>1</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Crew;
