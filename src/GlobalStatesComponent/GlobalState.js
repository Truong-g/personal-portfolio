import { createContext, useState } from "react";


const ContextApi = createContext({})


const GlobalState = ({children}) => {
    const [theme, setTheme] = useState("theme-dark")



    const states = {
        theme,
        setTheme
    }

    return (
        <ContextApi.Provider value={states}>
            {children}
        </ContextApi.Provider>
    )

}

export {
    ContextApi
}

export default GlobalState