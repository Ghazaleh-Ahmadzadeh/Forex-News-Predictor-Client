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
            <div className="prediction-card__progress-container">
              <div className="prediction-card__progress-labels">
                <span className="prediction-card__progress-title">Confidence</span>
                <span className="prediction-card__progress-percentage">{prediction.confidence}%</span>
              </div>
              <div className="prediction-card__progress-bar">
                <div
                  className="prediction-card__progress-fill"
                  style={{ width: `${prediction.confidence}%` }}
                />
              </div>
            </div>
          </>
        ) : (
          <p className="prediction-card__loading">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PredictionCard;
