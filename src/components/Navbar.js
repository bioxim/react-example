/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { HashRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <HashRouter>
          <>
            <div>
              <Link onClick={handleClick} to="/"><h2>Xime <span>Camino</span></h2></Link>          
            </div>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <Link onClick={handleClick} to="/">Home</Link>
                <Link onClick={handleClick} to="/about">About</Link>
                <Link onClick={handleClick} to="/portfolio">Portfolio</Link>
                <Link onClick={handleClick} to="/blog">Blog</Link>
                <Link onClick={handleClick} to="/contact">Contact</Link>
                <a href="https://bioxim.github.io/resume_model/assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a>          
            </div>
            <div className='burguer'>
              <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>
            <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
          </> 
        </HashRouter>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`

  h2{
    color: white;
    font-weight: 400;
    z-index: 4;
    span{
      font-weight: bold;
    }
  }
  
  padding: .4rem;
  background-color: #293d4e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 4;
  position: fixed;
  width: 100%;
  
  a,Link{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    transition: all 0.5s ease-out;
    font-weight: bold;
    &:hover {
      opacity: 0.75;
    }
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 1s ease;
    z-index: 3;
    a,Link{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a,Link{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 90%;
    left: 0;
    right: 0;
    text-align: center;
    a,Link{
      font-size: 2rem;
      margin-top: 1.3rem;
      color: white;
    }
  }

  .burguer {
    z-index: 4;
  }

  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  /* background-color: #29455e; */
  background: #29455e;
  background-image: linear-gradient(to bottom right, #509ee3, #501464);  
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 1s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 90vh;
  }
`