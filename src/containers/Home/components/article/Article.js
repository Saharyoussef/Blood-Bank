import React from 'react';
import './article.css';
import { NavLink } from 'react-router-dom';


const Article = ({ imgUrl, date, text }) => (
  <div className="blog-container_article">
    <div className="blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>
        <NavLink to='/blog'>Read Full Article</NavLink>
      </p>
    </div>
  </div>
);

export default Article;