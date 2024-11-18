import { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  menuActive: boolean
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
  handleMenu: () => void
  handleMenuBody: () => void
  menuActiveBody: boolean
  setMenuActiveBody: React.Dispatch<React.SetStateAction<boolean>>
}

interface AppProviderProps {
  children: ReactNode;
}
export const AppContext = createContext<AppContextProps>(null!);

export const AppProvider = ({children}: AppProviderProps) =>{

  const [menuActive, setMenuActive] = useState(false);
  const [menuActiveBody, setMenuActiveBody] = useState(false);
  
  const handleMenu = () => {
    setMenuActive(!menuActive)
    setMenuActiveBody(!menuActiveBody)
  }
  const handleMenuBody = () => {
    setMenuActive(false)
    setMenuActiveBody(!menuActiveBody)
  }

  return(
    <AppContext.Provider value={{menuActive,setMenuActive ,handleMenu, handleMenuBody, menuActiveBody, setMenuActiveBody}}>
      {children}
    </AppContext.Provider>
  )
}