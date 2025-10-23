import React, { createContext, useState } from 'react'

export const searchBookContext = createContext("")

function ContextShare({children}) {
    const [searcKey,setSearchKey] = useState("")
  return (
    <searchBookContext.Provider value={{searcKey,setSearchKey}}>
        {children}
    </searchBookContext.Provider>
  )
}

export default ContextShare