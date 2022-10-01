import React from 'react'

const PortfolioCard = ({ el }) => {

    let { title, tag, description, image, url } = el;
    
  return (
        
            <a href={`https://github.com/bioxim/${url}`} target="_blank" className="portfolio-main container" rel="noreferrer">
                <div className="portfolio-main-container">
                    <span>{tag}</span> 
                    <img src={`${image}`} alt={title}/>
                </div>
                <div className="card-text">
                    <h2 className="card-text-title">{title}</h2>
                    <p>{description}</p>
                    <h4>Main language: <i>{tag}</i></h4>
                </div>        
            </a>
  )
}

export default PortfolioCard