import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './HistoryChart.scss';

const HistoryChart = ({ chartData, title }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;
    if (chartRef.current && chartData) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${context.raw} IRR`;
                }
              }
            }
          },
          scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: false }
          }
        }
      });
    }
    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, [chartData]);

  return (
    <div className="history-chart card">
      <h2 className="history-chart__title">{title}</h2>
      <div className="history-chart__canvas-container">
        {chartData ? (
          <canvas ref={chartRef} className="history-chart__canvas" />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default HistoryChart;
