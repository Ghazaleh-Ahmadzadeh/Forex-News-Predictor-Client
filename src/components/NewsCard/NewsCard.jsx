import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './NewsCard.scss';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card card">
      <h2 className="news-card__title">Latest News</h2>
      <div className="news-card__list">
        {news && news.length > 0 ? (
          news.map((item, index) => <NewsItem key={index} newsItem={item} />)
        ) : (
          <p className="news-card__loading">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
