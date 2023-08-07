import React from "react"
import Car from "./Car";

const Garage = () => {
    const cars = ["ford","mazda","fiat"]
    const cars2 = [
        {id:1,brand:"ford"},
        {id:2,brand:"mazda"},
        {id:3,brand:"fiat"}
    ]
    return (
        <div>
            <h1>Who lives in my garage ?</h1>
            {/* <ul>
                {
                    cars.map((car,index) => (
                        <Car key={index} brand={car}/>
                    ))
                }
            </ul> */}

            {/* <ul>
                {cars2.map((car)=>(
                    <Car key={car.id} brand={car.brand}/>
                ))}
            </ul> */}

            {/* <ul>
                {cars2.map((car)=> <Car key={car.id} brand={car.brand}/> )}
            </ul> */}

            <ul>
                {cars2.map((car)=>{
                    let saveCar = car;
                    let saveCarLogo = "lovely" + saveCar.brand
                    return (
                        <div key={car.id} >
                            <Car brand={saveCarLogo}/>
                            <div>This is {car.id} </div>
                        </div>
                    )
                } )}
            </ul>
        </div>
    )
}

export default Garage;