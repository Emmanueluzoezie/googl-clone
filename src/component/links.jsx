import {NavLink  } from "react-router-dom"

const links =[
    {url: "/search", text: "🔍 All"},
    {url: "/news", text: "📰 News"},
    {url: "/image", text: "📷 Image"}
    // {url: "/search", text: "🔍 All"}
]

export const Links = () => {

    return (
        <div className="flex sm:justify-around justify-between items-center my-4 space-x-3 ">
            {links.map(({url, text}, index) => (
                <NavLink key={index} to={url} activeclassname="text-blue-700 border-b-2 mb-4 dark:text-blue-300 border-blue-700 pb-2">
                    {text}
                </NavLink>
            ))} 
        </div>
    )
}