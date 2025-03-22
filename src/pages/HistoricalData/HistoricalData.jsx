import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
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
    <Layout>
      <div className="historical-data">
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
    </Layout>
  );
};

export default HistoricalData;



