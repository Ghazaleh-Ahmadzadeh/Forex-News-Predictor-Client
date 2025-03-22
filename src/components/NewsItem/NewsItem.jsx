import React from 'react';
import './NewsItem.scss';

const NewsItem = ({ newsItem }) => {
  let sentimentColorClass = '';
  if (newsItem.sentiment === 'positive') {
    sentimentColorClass = 'news-item__sentiment-indicator--positive';
  } else if (newsItem.sentiment === 'negative') {
    sentimentColorClass = 'news-item__sentiment-indicator--negative';
  } else if (newsItem.sentiment === 'neutral') {
    sentimentColorClass = 'news-item__sentiment-indicator--neutral';
  } else {
    sentimentColorClass = 'news-item__sentiment-indicator--unknown';
  }

  return (
    <div className="news-item">
      <div className="news-item__header">
        <span className="news-item__date">{new Date(newsItem.publishedAt).toLocaleString()}</span>
        <span className={`news-item__sentiment-indicator ${sentimentColorClass}`}></span>
      </div>
      <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="news-item__link">
        <h3 className="news-item__title">{newsItem.title}</h3>
      </a>
      <p className="news-item__description">{newsItem.description}</p>
    </div>
  );
};

export default NewsItem;


