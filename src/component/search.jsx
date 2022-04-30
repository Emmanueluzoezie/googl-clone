import React, { useState, useEffect } from "react"
import {  Links } from "./links"
import {useResultContext} from "../component/contexts/ResultContextProvider"
import {useDebounce} from "use-debounce"

export const Search = () => {
    const [text, setText] = useState("Elon musk")
    const {setSearchTerm} = useResultContext();
    const [debounceValue] = useDebounce(text, 300)

    useEffect(() => {
        if(debounceValue){
            setSearchTerm(debounceValue)
        }
    }, [debounceValue])

    return (
        <div className="relative sm:ml-72 lg:ml-0 sm:mt-10 mx-2 lg:w-[50%]">
            <input type="text" placeholder="search here" onChange={(e) => setText(e.target.value)} className="sm:w-96  w-80 lg:w-full dark:bg-gray-200 border rounded-full shadow-sm outline-none px-6 py-3 text-black hover:shadow-lg mt-10"/>
            {!text && <button className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={() => setText("")}>X</button>}
            <Links />
        </div>
    )
}