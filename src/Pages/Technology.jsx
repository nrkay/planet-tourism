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
                    <div className="lg:translate-y-12">
                        <h1 className="text-white"><span className="font-bold">03</span> SPANCE LAUNCHE</h1>
                    </div>
                    {/* section description */}
                    <div className="grid gap-4 content-center lg:grid-cols-12 grid-rows-2 lg:grid-rows-none lg:h-screen">
                        <div className="tech-desc lg:col-span-7 lg:flex">
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
                            <div className="tech-desc-content lg:w-3/4 m-auto">
                                <div className="content-item"
                                    style={{ translate: `0 calc(0px - ${filed} * ${menuHeight})` }}>
                                    {content.map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className="tech-desc-content-items pr-28">
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

                        {/* section image  */}
                        <div className="tech-img lg:col-span-5">
                            untuk gambar
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Technology;