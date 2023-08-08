import React from "react"
import { useState } from "react"

const UseStateHook = () => {
    const [color,setColor] = useState("")
    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964", color:"red"
    })

    const updateColor = () => {
        setCar(previousState => {
            return {...previousState,color:"pink",comment:"its good"}
        })
    }

    return (
        <div>
            <h1>My favourite color is {color} </h1>
            <button type="button" onClick={()=>setColor("blue")} >blue</button>

            <h1>My {car.brand} </h1>
            <p>it is a {car.color} {car.model} from {car.year} {car.comment} </p>
            <button type="button" onClick={updateColor} >Update Color</button>
        </div>
    )
}

export default UseStateHook;