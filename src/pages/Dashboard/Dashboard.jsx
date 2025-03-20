import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import NewsList from '../../components/NewsList/NewsList.jsx';
import LineChart from '../../components/LineChart/LineChart.jsx';
import './Dashboard.scss';

const Dashboard = () => {
  const [currentRate, setCurrentRate] = useState('445,448.148 IRR');
  const [tomorrowsPrediction, setTomorrowsPrediction] = useState('460,000 IRR');
  const [confidence, setConfidence] = useState('86.9');
  
  const [chartData, setChartData] = useState(null);

  const baseURL = 'http://localhost:3000'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rateRes = await fetch(`${baseURL}/api/currentRate`);
        const rateData = await rateRes.json();
        setCurrentRate(rateData.currentRate);

        const predictionRes = await fetch(`${baseURL}/api/prediction`);
        const predictionData = await predictionRes.json();
        setTomorrowsPrediction(predictionData.tomorrowsPrediction);
        setConfidence(predictionData.confidence);

        const weekRes = await fetch(`${baseURL}/api/week`);
        if (!weekRes.ok) {
          throw new Error('Failed to fetch weekly historical data');
        }
        const weekData = await weekRes.json();
        setChartData(weekData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, [baseURL]);

  if (!chartData) {
    return <div className="dashboard-page">Loading dashboard data...</div>;
  }

  return (
    <div className="dashboard-page">
      <Header title="USD/IRR Predictor" />

      <div className="dashboard-nav">
        <Link to="/historical" className="btn btn-primary">
          Historical Data
        </Link>
        <Link to="/news-insights" className="btn btn-secondary">
          News Insights
        </Link>
      </div>

      <div className="cards-container">
        <div className="info-card">
          <h2>Current Exchange Rate</h2>
          <p className="highlighted-text">
            {currentRate}
          </p>
        </div>
        <div className="info-card">
          <h2>Tomorrow's Prediction</h2>
          <p className="highlighted-text">{tomorrowsPrediction}</p>
        </div>
        <div className="info-card">
          <h2>Confidence</h2>
          <p className="highlighted-text">{confidence}%</p>
        </div>
      </div>

      <div className="chart-section">
        <h3>7-Day History</h3>
        <LineChart data={chartData} />
      </div>

      <div className="news-section">
        <h3>Latest News</h3>
        <NewsList />
      </div>
    </div>
  );
};

export default Dashboard;



