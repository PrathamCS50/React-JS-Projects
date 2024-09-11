import React, { useEffect, useState } from "react";

export default function RandomColor() {
    const [color, setColor] = useState("#A11111")
    const [typeOfColor, setTypeOfColor] = useState("HEX")
    // const [generatedColor, setGeneratedColor] = useState("#A11111")

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }
    function handleCreateRandomColorHEX() {
        const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
        // setGeneratedColor(hexColor)
    }

    function handleCreateRandomColorRGB() {
        const r = randomColorUtility(255);
        const g = randomColorUtility(255);
        const b = randomColorUtility(255);
        const rgbColor = `rgb(${r},${g},${b})`;
        console.log(rgbColor);
        setColor(rgbColor);
        // setGeneratedColor(rgbColor)
    }

    useEffect(() => {
        if (typeOfColor === "HEX") {
            handleCreateRandomColorHEX()
        } else {
            handleCreateRandomColorRGB()
        }

    }, [typeOfColor])

    return (
        <>
            <div style={{
                background: color,
                height: "99vh",
            }}>
                <div className="border p-1 bg-black text-white rounded m-1 ">
                    <button
                        className="border p-1 bg-black text-white rounded m-1 "
                        onClick={() => setTypeOfColor("HEX")}
                    >HEX Color</button>
                    <button type="button"
                        className="border p-1 bg-black text-white rounded m-1 "
                        onClick={() => setTypeOfColor("RGB")}>Generate RGB Colors </button>
                    <button type="button"
                        className="border p-1 bg-black text-white rounded m-1 "
                        onClick={typeOfColor === "HEX" ? handleCreateRandomColorHEX : handleCreateRandomColorRGB}
                    >Generate Random </button>
                </div>

                <div className="flex align-middle items-center justify-center mt-60 font-bold text-4xl text-white">
                    <h2>{typeOfColor === "HEX" ? "HEX" : ""}</h2>
                    <h3>{color}</h3>
                    {/* <br /> */}
                    {/* {typeOfColor === 'HEX' ? (
                        <div className="">
                            HEX COLOUR : {generatedColor}
                        </div>
                    ) : (
                        <div>
                            RGB COLOUR: {generatedColor}
                        </div>
                    )} */}
                </div>
            </div>
        </>
    )
}