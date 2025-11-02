import React, { createContext, useState } from 'react'

export const searchBookContext = createContext("")
export const userUpdateContext = createContext("")
export const adminUpdateContext = createContext("")
export const jobContext = createContext("")

function ContextShare({children}) {
    const [searcKey,setSearchKey] = useState("")
    const [userEditResponse, setUserEditResponse] =useState({})
    const [adminEditResponse,setAdminEditResponse] = useState({})
    const [addJobResponse,setAddJobResponse] = useState({})
  return (
    <searchBookContext.Provider value={{searcKey,setSearchKey}}>
       <userUpdateContext.Provider value={{userEditResponse,setUserEditResponse}}>
        <adminUpdateContext.Provider value={{adminEditResponse,setAdminEditResponse}}>
           <jobContext.Provider value={{addJobResponse,setAddJobResponse}}>
            {children}
            </jobContext.Provider>
           </adminUpdateContext.Provider>
         </userUpdateContext.Provider>
    </searchBookContext.Provider>
  )
}

export default ContextShare