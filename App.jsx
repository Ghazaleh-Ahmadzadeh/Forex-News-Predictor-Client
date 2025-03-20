import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './src/pages/Dashboard/Dashboard.jsx';
import HistoricalData from './src/pages/HistoricalData/HistoricalData.jsx';
import NewsInsights from './src/pages/NewsInsights/NewsInsights.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/historical" element={<HistoricalData />} />
        <Route path="/news-insights" element={<NewsInsights />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


