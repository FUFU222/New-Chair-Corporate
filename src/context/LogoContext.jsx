"use client"

import react, {createContext, useState, useContext} from "react"

const LogoContext = createContext();

export const LogoProvider = ({children}) => {
  const [logo, setLogo] = useState("/images/companyLogo.png")
  return (
    <LogoContext.Provider value = {{logo, setLogo}}>
      {children}
    </LogoContext.Provider>
  )
}

export const useLogo = () => useContext(LogoContext)