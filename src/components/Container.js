import React from 'react'
import {    BrowserRouter,
            Routes,
            Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import SinglePost from '../pages/SinglePost'

const Container = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:id/:slug' element={<SinglePost />} />
                <Route path='/contact' element={<span></span>} />
                <Route path='*' element={<Error404 />} />
            </Routes>
    </BrowserRouter>
  )
}

export default Container