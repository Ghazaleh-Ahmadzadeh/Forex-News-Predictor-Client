import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ExchangeRateCard from '../../components/ExchangeRateCard/ExchangeRateCard';
import PredictionCard from '../../components/PredictionCard/PredictionCard';
import HistoryChart from '../../components/HistoryChart/HistoryChart';
import NewsCard from '../../components/NewsCard/NewsCard';
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

  return (
    <div className="dashboard">
      <Header title="USD/IRR Predictor" />
      <div className="dashboard__content">
        <div className="dashboard__left">
          <ExchangeRateCard currentRate={currentRate} />
          <PredictionCard prediction={prediction} />
          <HistoryChart chartData={chartData} title="7-Day History" />
        </div>
        <div className="dashboard__right">
          <NewsCard news={news} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



