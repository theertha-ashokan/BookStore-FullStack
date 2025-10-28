import React, { createContext, useState } from 'react'

export const searchBookContext = createContext("")
export const userUpdateContext = createContext("")

function ContextShare({children}) {
    const [searcKey,setSearchKey] = useState("")
    const [userEditResponse, setUserEditResponse] =useState({})
  return (
    <searchBookContext.Provider value={{searcKey,setSearchKey}}>
       <userUpdateContext.Provider value={{userEditResponse,setUserEditResponse}}>
         {children}
         </userUpdateContext.Provider>
    </searchBookContext.Provider>
  )
}

export default ContextShare