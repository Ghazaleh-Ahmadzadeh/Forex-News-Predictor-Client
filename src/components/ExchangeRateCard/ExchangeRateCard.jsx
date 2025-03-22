import React from 'react';
import './ExchangeRateCard.scss';

const ExchangeRateCard = ({ currentRate }) => {
  return (
    <div className="exchange-rate-card card">
      <h2 className="exchange-rate-card__title">Current Exchange Rate</h2>
      <div className="exchange-rate-card__content">
        {currentRate ? (
          <p className="exchange-rate-card__rate">{currentRate}</p>
        ) : (
          <p className="exchange-rate-card__loading">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ExchangeRateCard;
