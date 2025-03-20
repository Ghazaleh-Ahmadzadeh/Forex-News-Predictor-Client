import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import './NewsList.scss';

const NewsInsights = () => {
  const [articles, setArticles] = useState([]);
  const baseURL = 'http://localhost:3000'; 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${baseURL}/api/news`);
        const data = await res.json();
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
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <h2>{item.title}</h2>
              </a>
              <p className="date">{new Date(item.publishedAt).toLocaleString()}</p>
              <p className="sentiment">Sentiment: {item.sentiment}</p>
              <p className="description">{item.description}</p>
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



