import { useState } from "react";
import tech1 from "../assets/technology1.webp";
import tech2 from "../assets/techonolgy2.png";
import tech3 from "../assets/technology3.png"
import "../Style/tech.css";
function Technology() {
    const menuHeight = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--menu-height");

    const [filed, setFiled] = useState(0);

    // const [heightDesc, setHeightDesc] = useState(0);
    const content = [
        {
            id: 0,
            nomor: 1,
            title: "LAUNCH VEHICLE",
            desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            img: tech1,
        },
        {
            id: 1,
            nomor: 2,
            title: "SPACEPORT",
            desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            img: tech2,
        },
        {
            id: 2,
            nomor: 3,
            title: "SPACE CAPSULE",
            desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            img: tech3,
        },
    ];

    const handleDesc = (index) => {
        setFiled(index)
    }


    console.log(filed)
    return (
        <>
            <div className="technology h-screen">
                <div className="translate-y-28  h-4/5 lg:flex mx-6 md:mx-10 lg:mx-16">
                    {/* img technology */}
                    <div className="w-full lg:w-2/5  lg:order-3">
                        {content.filter(item => item.id == filed).map((item, index) => {
                            return (
                                <>
                                    <div className="img-tech " key={index}>
                                        <img className="w-full md:w-3/5 lg:w-4/5 h-52 lg:h-4/5 mx-auto" src={item.img} alt="" />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    {/* button menu */}
                    <div className="lg:w-1/5  grid content-center lg:order-1">
                        <div className=" mx-auto w-fit flex lg:grid">
                            {content.map((item, index) => {
                                return (
                                    <>
                                        <button className="bg-white rounded-full h-fit w-fit px-5 py-3 lg:px-7 lg:py-5 m-4"
                                            onClick={() => handleDesc(index)}>
                                            {item.nomor}
                                        </button>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    {/* desc technology */}
                    <div className="lg:w-2/5  grid content-center py-6 lg:order-2">
                        <div className="tech-descc  max-h-[250px]">
                            <div className="deskripsi-main" style={{ translate: `0 calc(0px - ${menuHeight} * ${filed})` }}>
                                {/* <div className="" style={{ translate: `0 ${heightDesc}` }}> */}
                                {content.map((item, index) => {
                                    return (
                                        <>
                                            <div className="min-h-[250px] z-10" key={index}>
                                                <p>THE TECHNOLOGY...</p>
                                                <h2 className="h-14 ">{item.title}</h2>
                                                <p>
                                                    {item.desc}
                                                </p>
                                            </div></>
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

export default Technology;
