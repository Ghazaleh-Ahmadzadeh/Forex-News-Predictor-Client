import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import './PredictionCard.scss';

const PredictionCard = ({ prediction, currentRate }) => {
  const parseRate = (rateStr) => {
    if (!rateStr) return 0;
    const num = rateStr.replace(/[^0-9.]/g, "");
    return parseFloat(num);
  };

  const predictedValue = parseRate(prediction?.tomorrowsPrediction);
  const currentValue = parseRate(currentRate);

  let arrow = null;
  if (predictedValue > currentValue) {
    arrow = <ArrowUpIcon className="prediction-card__arrow prediction-card__arrow--up" />;
  } else if (predictedValue < currentValue) {
    arrow = <ArrowDownIcon className="prediction-card__arrow prediction-card__arrow--down" />;
  }

  return (
    <div className="prediction-card card">
      <h2 className="prediction-card__title">Tomorrow's Prediction</h2>
      <div className="prediction-card__content">
        {prediction ? (
          <>
            <div className="prediction-card__rate-wrapper">
              {arrow}
              <p className="prediction-card__rate">{prediction.tomorrowsPrediction}</p>
            </div>
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
