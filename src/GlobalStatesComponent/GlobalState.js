import { createContext, useEffect, useState } from "react";

import profileData from '~/dummyData/profile.json'


const ContextApi = createContext({})


const GlobalState = ({children}) => {
    const [theme, setTheme] = useState("theme-dark")
    const [profile, setProfile] = useState(null)


    useEffect(() => {

        setProfile(profileData)

    }, [])


    const states = {
        theme,
        setTheme,
        profile
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