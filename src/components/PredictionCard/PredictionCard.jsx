import React from 'react';
import './PredictionCard.scss';

const PredictionCard = ({ prediction }) => {
  return (
    <div className="prediction-card card">
      <h2 className="prediction-card__title">Tomorrow's Prediction</h2>
      <div className="prediction-card__content">
        {prediction ? (
          <>
            <p className="prediction-card__rate">{prediction.tomorrowsPrediction}</p>
            <p className="prediction-card__confidence">Confidence: {prediction.confidence}%</p>
          </>
        ) : (
          <p className="prediction-card__loading">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PredictionCard;
