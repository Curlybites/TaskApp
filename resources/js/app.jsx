import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../components/views/Main'
import About from '../components/views/About'

export default function app() {
  return (
        <BrowserRouter>
            <Routes>
           
                <Route path='/' element={<Main/>} />
                <Route path='/About' element={<About/>} />
              
            </Routes>
        </BrowserRouter>
  )
}

