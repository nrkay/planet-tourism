import planet from "../assets/planet.png"
import mars from "../assets/mars.png"
import moon from "../assets/moon.png"
import europa from "../assets/europa.png"
import titan from "../assets/titan.png"
import { useState } from "react"


function Destination() {

    const [index, setIndex] = useState(0);
    const [descContent, setDescContent] = useState("See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take some history by visiting the Luna 2 and Apollo 11 landing sites.");
    const [distanceContent, setDistanceContent] = useState();
    const [time, setTime] = useState();
    const [title, setTitle] = useState("MOON");

    console.log("ini index", index)

    const handleDesc = (index) => {
        setIndex(index);
    }


    const content = [{
        "id": 0,
        "img": moon,
        "title": "MOON",
        "desc": "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384.000 KM",
        "travel_time": "3 DAYS",
    },
    {
        "id": 1,
        "img": mars,
        "title": "MARS",
        "desc": "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!!",
        "distance": "384.000 KM",
        "travel_time": "3 DAYS",
    },
    {
        "id": 2,
        "img": europa,
        "title": "EUROPA",
        "desc": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxtion in your snug wintery cabin.",
        "distance": "628.MIL KM",
        "travel_time": "3 YEARS",
    },
    {
        "id": 3,
        "img": titan,
        "title": "TITAN",
        "desc": "The only moon known to have a dense atmosphere other than earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 BIL KM",
        "travel_time": "7 YEARS",
    },
    ]
    return (
        <>
            {/* <div className="destinatination h-screen">
                <div className="lg:mx-12 h-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 pt-20 md:pt-28">
                    <div className="grid justify-items-stretch">
                        <h1 className="text-white px-4 mt-6"><span className="font-bold">01</span> PICK YOUR DESTINATION</h1>
                        <img className="w-3/5 lg:w-3/5 md:w-2/5 justify-self-center self-center lg:pt-8" src={moon} alt="" />
                    </div>
                    <div className="px-11 lg:px-24 lg:pt-20">
                        <div className="destination-btn-desc flex justify-between">
                            {content.map((item) => {
                                return (
                                    <>
                                        <button key={item.id} className="p-4" onClick={(e) => {
                                            e.preventDefault();
                                            setIndex(item.id)
                                            setDescContent(item.desc)
                                            setDistanceContent(item.distance)
                                            setTitle(item.title)
                                        }}>{item.title}</button>
                                    </>
                                )
                            })}

                        </div>
                        <div className="destination-desc-item mt-9 grid grid-rows-2 ">
                            <h1 className="md:mt-9">{title}</h1>
                            <p className="md:mt-6">{descContent}</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="destinatination h-screen ">
                <div className=" mx-10 lg:mx-20 h-4/5 translate-y-28 flex items-center">
                    <div className="lg:flex">
                        <div className="destination-img lg:w-1/2 ">
                            {content.filter(item => item.id == index).map((item, index) => {
                                return (
                                    <div className="mx-auto w-fit " key={index}>
                                        <img className="max-h-80" src={item.img} alt="" />
                                    </div>
                                )
                            })}

                        </div>

                        {/* section desc */}
                        <div className="destination-main mt-10 lg:mt-0 lg:w-1/2 ">
                            <div className=" ">
                                <div className="destination-button flex w-fit  mx-auto lg:mx-0">
                                    {content.map((item, index) => {
                                        return (
                                            <>
                                                <button className="mx-3 lg:mx-6 btn-icon" onClick={() => handleDesc(index)}>{item.title}</button>
                                            </>
                                        )
                                    })}
                                </div>
                                {content.filter(item => item.id == index).map((item, index) => {
                                    return (
                                        <>
                                            <div className="destination-desc lg:pr-15" key={index}>
                                                <div className=" py-10">
                                                    <h1 className=" text-5xl">{item.title}</h1>

                                                </div>
                                                <p>{item.desc}</p>
                                                <div className="py-5">
                                                    <hr className="text-white" />
                                                </div>
                                                <div className="flex w-full ">
                                                    <div className="w-1/2">
                                                        <p>AVG. DISTANCE</p>
                                                        <h5>{item.distance}</h5>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <p>EST. TRAVEL TIME</p>
                                                        <h5>{item.travel_time}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Destination;