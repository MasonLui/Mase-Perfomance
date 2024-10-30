import React, { useState, useEffect } from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://sportsdaily.p.rapidapi.com/api/sports/news/?page=1&page_size=5', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '3ec9680ad5msh85578e0c2ca05f6p138feejsn0434d53b9fb3',
          'x-rapidapi-host': 'sportsdaily.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      setNewsArticles(data.results || []); // Update to access data.results
    } catch (error) {
      console.error('Error fetching sports news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-section">
      <h2>Sports News</h2>
      <div className="news-articles">
        {newsArticles.length > 0 ? (
          newsArticles.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.image_url} alt={article.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-title">{article.title}</h3>
                <p className="news-description">{article.content}</p>
                {/* Removed the "Read more" link */}
              </div>
            </div>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
