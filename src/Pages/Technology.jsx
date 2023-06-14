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

    // const handleHeight = () => {
    //     let height = 0 - menuHeight * filed
    //     console.log(height)
    //     setHeightDesc(height);
    // }
    // handleHeight();

    console.log(filed)
    return (
        <>
            {/* <div className="technology h-auto ">
                <div className="lg:px-16 px-5 pt-24">
                    <div className="lg:translate-y-12">
                        <h1 className="text-white"><span className="font-bold">03</span> SPANCE LAUNCHE</h1>
                    </div>
                    <div className="grid gap-4 content-center lg:grid-cols-12 grid-rows-3 lg:grid-rows-none lg:h-screen">
                        <div className="tech-desc row-span-2 lg:col-span-7 lg:flex order-last lg:order-2 translate-y-6 lg:-translate-y-6">
                            <div className="lg:w-1/4 flex justify-center lg:grid lg:self-center">
                                {content.map((item, index) => {
                                    return (
                                        <>
                                            <button key={item.id} className="btn-desc-tech border-2 border-slate-300 w-fit h-fit m-3 px-5 lg:px-7 py-3 lg:py-5 rounded-full text-white bg-transparent" onClick={(e) => {
                                                e.preventDefault();
                                                setFiled(index)
                                            }}> <h6>{item.id}</h6></button>

                                        </>
                                    )
                                })}
                            </div>
                            <div className="tech-desc-content lg:w-3/4 m-auto translate-y-3 lg:-translate-y-3">
                                <div className="content-item"
                                    style={{ translate: `0 calc(0px - ${filed} * ${menuHeight})` }}>
                                    {content.map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className="tech-desc-content-items pr-28 lg:translate-y-10">
                                                    <h3>THE TERMINOLOGY...</h3>
                                                    <h2>{item.title}</h2>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="tech-img lg:col-span-5 lg:order-2">
                            <img className="object-none object-center max-h-64 min-w-full lg:max-h-96 translate-y-5 lg:-translate-y-5" src={tech1} alt="" />
                        </div>
                    </div>
                </div>
            </div > */}

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
                                <div className="min-h-[250px] z-10">
                                    <p>The Termonology 1</p>
                                    <h2 className="h-14 ">LAUNCH VAHICLE</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                                        labore quaerat at quidem autem consectetur qui! Quisquam, hic
                                        obcaecati, nobis vel ex odit, non beatae harum aut sapiente
                                        assumenda tenetur.
                                    </p>
                                </div>
                                <div className="min-h-[250px]">
                                    <p>The Termonology 2</p>
                                    <h2 className="h-14">LAUNCH VAHICLE</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                                        labore quaerat at quidem autem consectetur qui! Quisquam, hic
                                        obcaecati, nobis vel ex odit, non beatae harum aut sapiente
                                        assumenda tenetur.
                                    </p>
                                </div>
                                <div className="min-h-[250px]">
                                    <p>The Termonology 3</p>
                                    <h2 className="h-14 ">LAUNCH VAHICLE</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                                        labore quaerat at quidem autem consectetur qui! Quisquam, hic
                                        obcaecati, nobis vel ex odit, non beatae harum aut sapiente
                                        assumenda tenetur.
                                    </p>
                                </div>
                                <div className="min-h-[250px]">
                                    <p>The Termonology 4</p>
                                    <h2 className="h-14 ">LAUNCH VAHICLE</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                                        labore quaerat at quidem autem consectetur qui! Quisquam, hic
                                        obcaecati, nobis vel ex odit, non beatae harum aut sapiente
                                        assumenda tenetur.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Technology;
