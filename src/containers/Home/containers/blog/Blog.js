import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding">
    <div className="blog-heading">
      <h1 className="gradient__text">The Blood Donation Blog</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 18, 2022" text="Behind the Scenes: A Day in the Life of a Blood Donor" />
      </div>
      <div className="blog-container_groupB">
        <Article imgUrl={blog02} date="Oct 22, 2022" text="The Power of a Single Pint: Understanding the Impact of Blood Donation" />
        <Article imgUrl={blog03} date="Jan 15, 2023" text="Blood Types Demystified: What You Need to Know" />
        <Article imgUrl={blog04} date="Avr 12, 2023" text="The Science of Saving Lives: How Blood Transfusions Work" />
        <Article imgUrl={blog05} date="May 09, 2023" text="Challenges and Triumphs: Blood Donation in Remote Communities" />
      </div>
    </div>
  </div>
);

export default Blog;