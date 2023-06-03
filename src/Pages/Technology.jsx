import { useState } from "react";
function Technology() {
    const menuHeight = getComputedStyle(document.documentElement).getPropertyValue("--menu-height");

    const [filed, setFiled] = useState(0);
    const content = [
        {
            "id": 1,
            "title": "LAUNCH VEHICLE",
            "desc": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            "img": "",
        },
        {
            "id": 2,
            "title": "SPACEPORT",
            "desc": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            "img": "",
        },
        {
            "id": 3,
            "title": "SPACE CAPSULE",
            "desc": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            "img": "",
        },
    ]
    return (
        <>
            <div className="technology h-screen lg:h-auto">
                <div className="lg:px-16 px-5 pt-24">
                    <div className="">
                        <h1><span>03</span> SPANCE LAUNCHE</h1>
                    </div>
                    <div className="grid gap-4 content-center lg:grid-cols-12 grid-rows-2 lg:grid-rows-none lg:h-screen  bg-red-300">
                        <div className="w-4/5 tech-desc lg:col-span-7 lg:flex bg-green-300">
                            <div className="lg:w-1/4 flex justify-center lg:grid lg:self-center bg-yellow-300">
                                {content.map((item, index) => {
                                    return (
                                        <>
                                            <button key={item.id} className="w-fit h-fit m-3 px-5 lg:px-7 py-3 lg:py-5 rounded-full bg-white" onClick={(e) => {
                                                e.preventDefault();
                                                setFiled(index)
                                            }}> <h6>{item.id}</h6></button>

                                        </>
                                    )
                                })}
                            </div>
                            {/* <div className="tech-desc-items lg:w-3/4">
                                <p>The Terminology....</p>
                                {content.filter(item => item.id === filed).map((item) => {
                                    return (
                                        <>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </>
                                    )
                                })}
                            </div> */}

                            <div className="tech-desc-content bg-blue-500 lg:w-3/4">
                                <div className="content-item"
                                    style={{ translate: `0 calc(0px - ${filed} * ${menuHeight})` }}>
                                    {content.map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className="tech-desc-content-items bg-red-500">
                                                    <p>{item.desc}</p>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="tech-img lg:col-span-5">
                            untuk gambar
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Technology;