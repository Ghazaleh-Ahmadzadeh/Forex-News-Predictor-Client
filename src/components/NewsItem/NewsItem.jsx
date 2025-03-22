import React from 'react';
import './NewsItem.scss';

const NewsItem = ({ newsItem }) => {
  return (
    <div className="news-item">
      <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="news-item__link">
        <h3 className="news-item__title">{newsItem.title}</h3>
      </a>
      <p className="news-item__date">{new Date(newsItem.publishedAt).toLocaleString()}</p>
      <p className="news-item__sentiment">Sentiment: {newsItem.sentiment}</p>
      <p className="news-item__description">{newsItem.description}</p>
    </div>
  );
};

export default NewsItem;

