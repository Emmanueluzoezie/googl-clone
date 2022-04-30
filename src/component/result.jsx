import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ReactPlayer from "react-player"
import { useResultContext } from "../component/contexts/ResultContextProvider"
import { Loading } from "./loading"

export const Result = () => {
    const {getResult, results, searchTerm, isLoading } = useResultContext();

    const location = useLocation();

    useEffect(() => {

        if(searchTerm ){
            if(location.pathname === "/videos"){
                getResult(`/search/q=${searchTerm}videos`)
            } else {
                getResult(`${location.pathname}/q=${searchTerm}&num=40`)
            }
        }
    }, [searchTerm, location.pathname])
    

    if(isLoading) return <Loading />

    console.log(location.pathname)

   switch (location.pathname) {
       case "/search":
          return (
              <div className="flex flex-wrap jestify-between sm:px-56">
                    {results?.map(({ link, title, description }, index) => (
                        <div key={index} className="md:w-2/5 w-full my-4 mx-6">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className="text-lg hover:text-underline dark:text-blue-300 text-blue-700 ">
                                    {title}
                                </p>
                                <p className=" dark:text-gray-300 text-black line-clamp-3">
                                    {description}
                                </p>
                            </a>
                        </div>
                    ))}
              </div>
          )
        case "/image":
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.map(({ image, link: {href, title }}, index) => (
                        <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy"/>
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            )
            case "/news":
                return (
                    <div className="flex flex-wrap jestify-between items-center space-y-6 sm:px-56">
                          {results?.map(({ links, id, source, title }) => (
                              <div key={id} className="md:w-2/5 w-full">
                                  <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                                      <p className="text-lg hover:text-underline dark:text-blue-300 text-blue-700 ">
                                          {title}
                                      </p>
                                  </a>
                                  <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline">
                                    {source?.href}
                                 </a>
                              </div>
                          ))}
                    </div>
                )
            // case "/video":
            //     return (
            //         <div className="flex flex-wrap">
            //             {results?.map(({video, index}) => (
            //                 <div key={index} className="p-2">
            //                     console.log(video.additional_links)
            //                     <ReactPlayer url={video.additional_links[0].href} controls width="355px" height="208px"/>
            //                 </div>
            //             ))}
            //         </div>
            //     )
       default:
          return "Error!";
   }
}