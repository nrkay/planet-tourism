import { useState } from "react";
function Crew() {
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
    return (
        <>
            <div className="pt-48">
                <h1 className="text-white">Pge Crew</h1>
                {content.map((item) => {
                    return (
                        <>
                            <div className="crew">
                                <button key={item.id} onClick={() => {
                                    setButton(item.id)
                                }}></button>
                            </div>

                        </>
                    )
                })}

            </div>

        </>
    );
}

export default Crew;