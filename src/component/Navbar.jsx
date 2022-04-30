import React from "react"
import { Link } from "react-router-dom"
import { Search} from "./search"

function Navbar({setDarkTheme, darkTheme}){

    return(
        <div className="flex flex-wrap border-b dark:border-gray-700 border-gray-200 sm:justify-between justify-center items-center p-5 pb-0">
            <div className="flex justify-between items-center w-screen">
                <Link to="/">
                    <p className="font-bold text-xl md:text-2xl dark:text-gray-900 py-1 px-2">Googl</p>
                </Link>
                <Search />
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="bg-white dark:bg-gray-400 dark:text-gray-900 py-1 px-2 hover:shadow-lg rounded text-sm md:text-xl">
                    {darkTheme ? "Light 🌟" : "Dark 🌙"}
                </button>
            </div>
            
        </div>
    )
}

export default Navbar