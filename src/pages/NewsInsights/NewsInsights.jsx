import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import NewsItem from '../../components/NewsItem/NewsItem';
import './NewsInsights.scss';

const NewsInsights = () => {
  const [news, setNews] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

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
                  <NewsItem newsItem={item} />
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