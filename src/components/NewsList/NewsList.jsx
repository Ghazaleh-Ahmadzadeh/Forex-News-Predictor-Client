import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import './NewsList.scss';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${baseURL}/api/news`);
        const data = await res.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [baseURL]);

  return (
    <div className="news-list">
      {articles.length > 0 ? (
        articles.map((newsItem, index) => (
          <NewsItem key={index} newsItem={newsItem} />
        ))
      ) : (
        <p className="news-list__loading">No news articles available.</p>
      )}
    </div>
  );
};

export default NewsList;



