import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import './NewsInsights.scss';

const NewsInsights = () => {
  const [news, setNews] = useState([]);
  const baseURL = 'http://localhost:3000';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${baseURL}/api/news`);
        const data = await res.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news insights:', error);
      }
    };
    fetchNews();
  }, [baseURL]);

  return (
    <Layout>
      <div className="news-insights">
        <div className="news-insights__content">
          <h2 className="news-insights__title">All Latest News</h2>
          {news.length > 0 ? (
            <ul className="news-insights__list">
              {news.map((item, index) => (
                <li key={index} className="news-insights__item">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-insights__link">
                    <h3 className="news-insights__item-title">{item.title}</h3>
                  </a>
                  <p className="news-insights__item-date">{new Date(item.publishedAt).toLocaleString()}</p>
                  <p className="news-insights__item-sentiment">Impact: {item.sentiment}</p>
                  <p className="news-insights__item-description">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading news articles...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NewsInsights;