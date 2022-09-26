import React from 'react'
import {    Routes,
            Route,
            BrowserRouter} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import SinglePost from '../pages/SinglePost'

const Container = () => {
  return (
    <BrowserRouter basename='/react-example'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/react-example/about' element={<About />} />
                <Route path='/react-example/portfolio' element={<Portfolio />} />
                <Route path='/react-example/blog' element={<Blog />} />
                <Route path='/react-example/blog/:id/:slug' element={<SinglePost />} />
                <Route path='/react-example/contact' element={<span></span>} />
                <Route path='/react-example/*' element={<Error404 />} />
            </Routes>
    </BrowserRouter>
  )
}

export default Container