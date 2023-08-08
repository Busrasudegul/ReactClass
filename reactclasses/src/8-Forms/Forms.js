import React from "react"
import MyFormik from "./FormikYup/MyFormik";

const Forms = () => {
    // const [name,setName] = React.useState("")

    // const [inputs,setInputs] = React.useState({})
    
    // const [textarea,setTextarea] = React.useState("Bu bir text area içeriğidir.")

    // const [myCar,setMyCar] = React.useState("Volvo")
    // const handleChange = (event) => {
    //     setMyCar(event.target.value)
    // }

    // const handleChange = (event) => {
    //     setTextarea(event.target.value)
    // }

    // const handleSubmit= (event) => {
    //     event.preventDefault();
    //     alert(`girdiğiniz isim ${name}`)
    // } 

    // const handleChange = (event) =>{
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs((values)=> ({...values, [name]: value}))
    // }

    // const handleSubmit2 = (event)=>{
    //     event.preventDefault();
    //     console.log(inputs)
    // }

    return (
        <div>
            {/* <form onSubmit={handleSubmit} >
                <label>
                    Enter your name:
                    <input type="text"
                    value={name} 
                    onChange={(e)=>setName(e.target.value)} ></input>
                </label>
                <input type="submit" value="button"></input>
            </form>

            <form onSubmit={handleSubmit2} >
                <label>
                    Enter your name:
                    <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange} >
                    </input>
                </label>
                <label>
                    Enter your age:
                    <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}/>
                </label>
                <input type="submit"/>
            </form> */}
            {/* <form>
                <textarea value={textarea} onChange={handleChange} />
            </form>

            <form>
                <select value={myCar} onChange={handleChange} >
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form> */}
            <MyFormik/>


        </div>
    )
}

export default Forms;