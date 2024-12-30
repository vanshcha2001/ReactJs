import { useContext } from "react";
import { createContext } from "react";

// context bnayaa
export const ThemeContext=createContext({
    // kuch phle hi default value ya function daal skte hai
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

// ab bnaynge contextprovider
export const ThemeProvider=ThemeContext.Provider

// Hook bna lenge ab
// jo upar context bnaya usko use krnge iski help se
// mtlb ab agr thememode dark ya light inka khi bhi use krna hai toh is function ko import krke use kr lnge
export default function useTheme(){
    return useContext(ThemeContext)
}