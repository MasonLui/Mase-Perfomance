// src/NewsSection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsSection.css';

const NewsSection = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const apiKey = '222ebee407ae416eb943a1bebf425c70';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`
        );
        setNewsArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching sports news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="news-section">
      {/* Title for Sports News */}
      <h2>Sports News</h2>

      {/* News Articles */}
      <div className="news-articles">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage} alt={article.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
