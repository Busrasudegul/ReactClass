import React from 'react'
import {store} from "./store/store"
import {Provider} from "react-redux"
import Counter from "./counter/Counter"

const ReduxToolkit = () => {
  return (
    <div>
       <Provider store={store}>
        <Counter/>
       </Provider>
    </div>
  )
}

export default ReduxToolkit