// npm i react-icons

import React, { useState } from "react"
import { FaStar } from "react-icons/fa"

export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        console.log("CLick : ", getCurrentIndex)
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        console.log("Mouse enter : ", getCurrentIndex)
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
    }
    return (
        <>

            <div className="flex flex-row items-center justify-center  h-[100vh] bg-slate-400">
                {
                    [...Array(noOfStars)].map((_, index) => {
                        index += 1 // As index was starting from 0
                        return <FaStar
                            key={index}
                            color={index <= (hover || rating) ? "#ffc107" : "#000000"}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => { handleMouseEnter(index) }}
                            onMouseLeave={() => { handleMouseLeave() }}
                            size={60}
                            className="cursor-pointer"
                        />
                    })
                }
            </div>
        </>
    );
}