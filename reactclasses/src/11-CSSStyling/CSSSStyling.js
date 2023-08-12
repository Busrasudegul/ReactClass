import React from 'react'
import Example from './Example/Example'
import Example2 from './Example/Example2'
import ExampleModule from './ExampleModule/ExampleModule'
import ExampleModule2 from './ExampleModule/ExampleModule2'
// import "./CSSStyling.css"
// import styles from "./CSSStyling.module.css"

const CSSSStyling = () => {
    const myStyle = {
        color:"white",
        backgroundColor:"DodgerBlue",
        padding:"10px",
        fontFamily:"Sans-Serif"
    }
  return (
    <div>
        {/* <h1 style={{ color:"red"}} >Hello Style</h1>
        <h1 style={{backgroundColor:"lightblue"}} >Hello Style</h1>
        <h1 style={myStyle} >Hello Style</h1>
        <h1 className={styles.bigblue} >Hello Style module</h1> */}

        <Example/>
        <Example2/>

        <ExampleModule/>
        <ExampleModule2/>

    </div>
  )
}

export default CSSSStyling