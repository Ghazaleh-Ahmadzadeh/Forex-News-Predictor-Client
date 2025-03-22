import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import HistoryChart from '../../components/HistoryChart/HistoryChart';
import './HistoricalData.scss';

const HistoricalData = () => {
  const [thirtyDayData, setThirtyDayData] = useState(null);
  const [ninetyDayData, setNinetyDayData] = useState(null);
  const baseURL = 'http://localhost:3000';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const thirtyRes = await fetch(`${baseURL}/api/30days`);
        const thirtyData = await thirtyRes.json();
        setThirtyDayData(thirtyData);

        const ninetyRes = await fetch(`${baseURL}/api/90days`);
        const ninetyData = await ninetyRes.json();
        setNinetyDayData(ninetyData);
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    };

    fetchData();
  }, [baseURL]);

  return (
    <div className="historical-data">
      <Header title="Historical Data" />
      <div className="historical-data__back">
        <Link to="/" className="historical-data__back-link">Back to Dashboard</Link>
      </div>
      <div className="historical-data__charts">
        {thirtyDayData ? (
          <HistoryChart chartData={thirtyDayData} title="30-Day History" />
        ) : (
          <p>Loading 30-day data...</p>
        )}
        {ninetyDayData ? (
          <HistoryChart chartData={ninetyDayData} title="90-Day History" />
        ) : (
          <p>Loading 90-day data...</p>
        )}
      </div>
    </div>
  );
};

export default HistoricalData;



