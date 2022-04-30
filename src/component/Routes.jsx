import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Result } from "./result"

function Routin(){

    return(
        <div className="p-4">
            <Routes>
                <Route path='/' element={<Navigate to='/search' replace />} />
                <Route path='/search' element={<Result />} />
                <Route path='/image' element={<Result />} />
                <Route path='/news' element={<Result />} />
                <Route path='/video' element={<Result />} />
            </Routes>
        </div>
    )
}

export default Routin