import React, { useEffect, useState } from "react"

const UseEffectHook = () => {
//     const [count,setCount] = useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count => count + 1)
//         },1000)
//     })

// const [count,setCount] = useState(0)
// useEffect(()=>{
//     setTimeout(()=>{
//         setCount((count)=>count + 1)
//     },1000)
// },[])

// const [count,setCount] = useState(0)
// useEffect (()=>{
//     setTimeout(()=>{
//         setCount((count)=>count + 1)
//     },1000)
// },[count])

// const [count2,setCount2] = useState(0)
// useEffect(()=>{
//     setTimeout(()=>{
//         setCount2((count)=>count +1)
//     },1000)
// },[])

// const [count,setCount] = useState(0)
// useEffect(()=>{
//     let timer = setInterval(()=>{
//         setCount((count)=> count+1)
//     },1000)
//     return () => clearInterval(timer)
// },[count])

// const [count2,setCount2] = useState(0)
// useEffect(()=>{
//     setInterval(()=>{
//         setCount2((count)=>count+1)
//     },1000)
// },[count2]) //doğru çalışmaz


    return (
        <div>
             {/* <h1>I have rendered {count} times. First Count </h1>
             <h1>I have rendered {count2} times. First Count</h1> */}
        </div>
    )
}

export default UseEffectHook ;