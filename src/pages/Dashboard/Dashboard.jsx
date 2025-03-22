import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import ExchangeRateCard from '../../components/ExchangeRateCard/ExchangeRateCard';
import PredictionCard from '../../components/PredictionCard/PredictionCard';
import HistoryChart from '../../components/HistoryChart/HistoryChart';
import './Dashboard.scss';

const Dashboard = () => {
  const [currentRate, setCurrentRate] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [news, setNews] = useState([]);
  const baseURL = 'http://localhost:3000';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rateRes = await fetch(`${baseURL}/api/currentRate`);
        const rateData = await rateRes.json();
        setCurrentRate(rateData.currentRate);

        const predRes = await fetch(`${baseURL}/api/prediction`);
        const predData = await predRes.json();
        setPrediction(predData);

        const weekRes = await fetch(`${baseURL}/api/week`);
        const weekData = await weekRes.json();
        setChartData(weekData);

        const newsRes = await fetch(`${baseURL}/api/news`);
        const newsData = await newsRes.json();
        setNews(newsData.articles);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchData();
  }, [baseURL]);

  if (!chartData || !currentRate || !prediction) {
    return <div className="dashboard">Loading dashboard data...</div>;
  }

  const previewNews = news.slice(0, 4);

  return (
    <Layout>
      <div className="dashboard__content">
        <div className="dashboard__left">
          <ExchangeRateCard currentRate={currentRate} />
          <PredictionCard prediction={prediction} />
          <HistoryChart chartData={chartData} title="7-Day History" />
        </div>
        <div className="dashboard__right">
          <div className="news-preview">
            <h2 className="news-preview__title">Latest News</h2>
            <ul className="news-preview__list">
              {previewNews.map((item, index) => (
                <li key={index} className="news-preview__item">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-preview__link">
                    <h3 className="news-preview__item-title">{item.title}</h3>
                  </a>
                  <p className="news-preview__item-date">{new Date(item.publishedAt).toLocaleString()}</p>
                  <p className="news-preview__item-sentiment">Impact: {item.sentiment}</p>
                  <p className="news-preview__item-description">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="news-preview__see-more">
              <Link to="/news-insights" className="news-preview__see-more-button">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;