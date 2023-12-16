import React, { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()




const Context = ({children}) => {
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
  
  useEffect(() => {
    const fetchUserData = async () => {
        try {
            //const token = localStorage.getItem('token');
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWl0b0BnbWFpbC5jb20iLCJpYXQiOjE3MDI3NTIzODEsImV4cCI6MTcwMjc1MzgyMX0.WEvw6DnC5bH5_D906Ud-7fV7_F2TwO3ZakEyzTSFv88"
            const response = await axios.get('http://localhost:8080/dashboard/user', {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
  
            });
            dispatch({type: "GET_USER", payload: response.data})
        } catch (error) {
            console.log(error)
        }
    };
  
    
    fetchUserData();
  }, []);

  console.log(state)

  return (
   <GlobalContext.Provider value={{state, dispatch}}>
    {children}
   </GlobalContext.Provider>
  )
}

export default Context