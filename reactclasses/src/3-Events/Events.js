const Events = () => {

    const shoot = ()=> {
        alert("great shots")
    }
    const shoot2 = (a)=> {
        alert(a)
    }
    const shoot3 = (a,b) => {
        alert(b.type)
        console.log(b.target)
    }
    return (
        <>
        <button onClick={shoot}>Take the shot</button>
        <button onClick={()=>shoot2("Goal!")} >Take the shot 2</button>
        <button onClick={(event) => shoot3("Goal goal",event)} >Take the shot3</button>
        </>
    )
}

export default Events;