//rafce komutu

const Car = (props)=> {
    return (
        <div>
        {/* <h2>I am a {props.brand.model} </h2> */}

        <h2>{props.definition.myPerson.name} </h2>
        <h2>{props.definition.myCar.model} </h2>
        </div>
    )
}

export default Car;