import React, { createContext, useContext, useState } from "react"

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {

    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('Elon musk')

    const getResult = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.my_api_key
            }
        })
        const data = await response.json()
        if(type.includes("/news")){
            setResults(data.entries) 
        } else if(type.includes("/image")){
            setResults(data.image_results) 
        } else {
            setResults(data.results)
        }
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResult, results, setSearchTerm, searchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);
