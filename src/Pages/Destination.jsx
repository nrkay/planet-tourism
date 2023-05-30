import planet from "../assets/planet.png"
import mars from "../assets/mars.png"
import moon from "../assets/moon.png"
import europa from "../assets/europa.png"
import titan from "../assets/titan.png"


function Destination() {

    const content = [{
        "img": { moon },
        "title": "MOON",
        "desc": "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384.000 KM",
        "travel_time": "3 DAYS",
    },
    {
        "img": { mars },
        "title": "MARS",
        "desc": "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!!",
        "distance": "384.000 KM",
        "travel_time": "3 DAYS",
    },
    {
        "img": { europa },
        "title": "EUROPA",
        "desc": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxtion in your snug wintery cabin.",
        "distance": "628.MIL KM",
        "travel_time": "3 YEARS",
    },
    {
        "img": { titan },
        "title": "TITAN",
        "desc": "The only moon known to have a dense atmosphere other than earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 BIL KM",
        "travel_time": "7 YEARS",
    },
    ]
    return (
        <>
            {/* <div className="destinatination">
                <div className="mx-12">
                    <div className="destination-title">
                        <h1><span>01</span>PISK YOUR DESTINATION</h1>
                    </div>
                    <div className="destination-content grid grid-rows-2 lg:grid-cols-2">
                        <div className="img-planet flex justify-center items-center">
                            <div className="bg-green-300">
                                <img src={planet} alt="" />
                            </div>
                        </div>
                        <div className="">ini desc</div>
                    </div>
                </div>

            </div> */}
            <div className="destinatination h-screen">
                <div className="lg:mx-12 h-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 pt-20 lg:pt-32">
                    <div className="grid justify-items-stretch">
                        <h1 className="text-white px-4 mt-6"><span className="font-bold">01</span> PICK YOUR DESTINATION</h1>
                        <img className="w-3/5 justify-self-center self-center lg:pt-8" src={planet} alt="" />
                    </div>
                    <div className="px-11 lg:px-24 lg:pt-20">
                        <div className="destination-btn-desc flex justify-between">
                            <button>MOON</button>
                            <button>MARS</button>
                            <button>EURPA</button>
                            <button>TITAN</button>
                        </div>
                        <div className="destination-desc-item mt-9">
                            <h1>MARS</h1>
                            <p className="pt-14">Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Destination;