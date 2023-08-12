import React, {useContext} from 'react'
import { UserContext } from './UseContext'


const Component3 = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>Component3</h1>
        <h2>{`Hello ${user} again`} </h2>
       
    </div>
    
  )
}

export default Component3