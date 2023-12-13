import React, { createContext, useReducer } from 'react'

export const GlobalContext = createContext()

const initialValue = {
  user: {}
}

const reducer = (state, action) => {
  switch(action.type){
    case "GET_USER":
      return {...state, user: action.payload }
  }
}

const [state, dispatch] = useReducer(reducer, initialValue);

const Context = ({children}) => {
  return (
   <GlobalContext.Provider value={{}}>
    {children}
   </GlobalContext.Provider>
  )
}

export default Context