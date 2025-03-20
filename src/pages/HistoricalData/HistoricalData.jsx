import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import LineChart from '../../components/LineChart/LineChart.jsx';
import './HistoricalData.scss';

const HistoricalData = () => {
  const [thirtyDayData, setThirtyDayData] = useState(null);
  const [ninetyDayData, setNinetyDayData] = useState(null);
  const [error, setError] = useState(null);
  const baseURL = 'http://localhost:3000'; 

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const [thirtyRes, ninetyRes] = await Promise.all([
          fetch(`${baseURL}/api/30days`),
          fetch(`${baseURL}/api/90days`)
        ]);

        if (!thirtyRes.ok || !ninetyRes.ok) {
          throw new Error('Failed to fetch historical data');
        }

        const thirtyData = await thirtyRes.json();
        const ninetyData = await ninetyRes.json();

        setThirtyDayData(thirtyData);
        setNinetyDayData(ninetyData);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchHistoricalData();
  }, [baseURL]);

  if (error) {
    return <div className="historical-data-page">Error: {error}</div>;
  }

  if (!thirtyDayData || !ninetyDayData) {
    return <div className="historical-data-page">Loading historical data...</div>;
  }

  return (
    <div className="historical-data-page">
      <Header title="Historical Data" />
      <div className="nav-bar">
        <Link to="/" className="btn btn-secondary">Back to Dashboard</Link>
      </div>
      <div className="chart-section">
        <h3>30-Day History</h3>
        <LineChart data={thirtyDayData} />
      </div>
      <div className="chart-section">
        <h3>90-Day History</h3>
        <LineChart data={ninetyDayData} />
      </div>
    </div>
  );
};

export default HistoricalData;



