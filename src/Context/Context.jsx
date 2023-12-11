import React, { createContext } from 'react'

export const GlobalContext = createContext()

const Context = ({children}) => {
  return (
   <GlobalContext.Provider value={{}}>
    {children}
   </GlobalContext.Provider>
  )
}

export default Context