import { createContext, useContext, useState } from "react";

const SearchContextApi = createContext()

const SearchProvider = ({ children }) => {

    const [location, setLocation] = useState("charsadda")

    const updateLocation = (newLoc) => {
        setLocation(newLoc)
    }

    const [theme, setTheme] = useState("light")

    const triggerTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return(
        <SearchContextApi.Provider value={{ location, updateLocation, theme, triggerTheme }}>
            {children}
        </SearchContextApi.Provider>
    )
}

const useLocation = () => {
    return useContext(SearchContextApi)
}

const useTheme = () => {
    return useContext(SearchContextApi)
}

export { useLocation, SearchProvider, useTheme }