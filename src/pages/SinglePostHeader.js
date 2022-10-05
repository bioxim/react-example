import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import photo from '../components/img/post-image-main.jpg';


const SinglePostHeader = ({ el }) => {

let { title, date } = el


return (
    <>
      <Navbar />
        <Head>
          <article className="margin-none">
            <div className="header">
              <aside className="container-single-note">
                <div>
                    <div className="subtitle-single-note">
                        Xime Camino
                        <span className="set-dot"></span>
                        {date}
                    </div>
                     <h1>{title}</h1>
                </div>
              </aside>
            </div>
          </article>
        </Head>
      </>
  )};

  export default SinglePostHeader;


  const Head = styled.div`
    
    padding-top: 5rem;

    article > div {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 1rem;
    }

    .container-single-note {
      display: flex;
      align-items: flex-end;
      height: 100%;
      max-width: 80%;
    }

    .header {
      position:relative;
      overflow:hidden;
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      height:40vw;
      min-height:300px;
      max-height:450px;
      min-width:300px;
      color:#eee;
    }

    .header:after {
      content:"";
      width:100%;
      height:100%;
      position:absolute;
      bottom:0;
      left:0;
      z-index:-1;
      background: linear-gradient(to bottom, rgba(0,0,0,0.12) 40%,rgba(27,32,48,1) 100%);
    }
  
    .header:before {
      content:"";
      width:100%;
      height:200%;
      position:absolute;
      top:0;
      left:0;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translateZ(0); backface-visibility: hidden;
      scale(1.0, 1.0);
        transform: translateZ(0);
      background:#1B2030 url(${photo}) 50% 0 no-repeat;
      background-size:cover;
      background-attachment:fixed;
      animation: grow 360s  linear 10ms infinite;
      transition:all 0.4s ease-in-out;
      z-index:-2
    }

    @keyframes grow{
      0% { transform: scale(1) translateY(0px)}
      50% { transform: scale(1.2) translateY(-400px)}
    }

    .set-dot {
      display: inline-block;
      width: 3px;
      height: 3px;
      margin: 0 14px;
      vertical-align: middle;
      background-color: currentColor;
      border-radius: 50%;
    }

    .subtitle-single-note {
      font-size: .8rem;
      margin-bottom: 0.5rem;
    }

    /* Image */

    .portfolio-main:hover {
      opacity: 1;
    }

    .portfolio-main img {
      border-radius: 1.25rem;
      width: 100vw;
      height: auto;
      transition: all 0.5s ease-in-out;
      width: 100%;
      height: auto;
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      .container {
        padding-left: 8rem;
        padding-right: 8rem;
      }

      .subtitle-single-note {
        font-size: 1rem;
        margin-bottom: 0.938rem;
      }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }

    .container {
        padding-left: 12rem;
        padding-right: 12rem;
    }
    
    .padding-sides-lg {
      padding-left: 15rem;
      padding-right: 15rem;
    }
  }
  `
