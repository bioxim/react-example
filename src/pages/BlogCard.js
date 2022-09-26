import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ el }) => {
    
    let { title, tag_main, description, image, slug , id } = el

  return (
    <>
      <div className="container-fit">
        <Link 
          to={`/blog/${id}/${slug}`} 
          target="_self" 
          className="portfolio-main container"
          >
            <div className="portfolio-main-container">
                <span>{tag_main}</span>
                <img src={image} alt={title}/>
            </div>
            <div className="card-text">
              <h2 className="card-text-title">{title}</h2>
              <p>{description}</p>
            </div>
        </Link>
    </div>
    </>
  )
}

export default BlogCard