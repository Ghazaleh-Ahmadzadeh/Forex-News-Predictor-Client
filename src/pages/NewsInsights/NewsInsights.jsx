import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import './NewsInsights.scss';

const NewsInsights = () => {
  const [articles, setArticles] = useState([]);
  const baseURL = 'http://localhost:3000'; 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${baseURL}/api/news`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news insights:', error);
      }
    };

    fetchNews();
  }, [baseURL]);

  return (
    <div className="news-insights-page">
      <Header title="Full News Insights" />
      <div className="nav-bar">
        <Link to="/" className="btn btn-secondary">
          Back to Dashboard
        </Link>
      </div>
      <ul className="insights-list">
        {articles.length > 0 ? (
          articles.map((item, index) => (
            <li key={index} className="insight-item">
              <h2>{item.title}</h2>
              <p className="date">{new Date(item.publishedAt).toLocaleString()}</p>
              <p className="sentiment">Sentiment: {item.sentiment}</p>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>No news articles available.</p>
        )}
      </ul>
    </div>
  );
};

export default NewsInsights;


