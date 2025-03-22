# ForexNews Predictor

## Overview

**Question:** What is your app? Give a brief description in a couple of sentences.  
**Answer:** ForexNews Predictor is a web application designed to help Iranians make informed decisions about buying or selling USD. The app aggregates real-time news and market data, then uses machine learning algorithms to predict next-day USD trends with an associated confidence percentage.

### Problem Space

**Question:** Why is your app needed? Give any background information around any pain points or other reasons.  
**Answer:** Due to prolonged international sanctions, Iran has experienced severe inflation, causing the rial to lose significant value against the USD. The conversion rates are highly volatile—constantly affected by global and regional news, particularly around Middle Eastern conflicts and domestic political developments. This unpredictability makes it challenging for users to decide when to convert their money. ForexNews Predictor addresses this pain point by providing data-driven insights to hedge against inflation risk.

### User Profile

**Question:** Who will use your app? How will they use it? Add any special considerations that your app must take into account.  
**Answer:**  
- **Target Audience:** Iranian citizens and traders, including those with limited financial expertise.  
- **Usage Scenario:** Users will access real-time predictions on whether to buy or sell USD, review aggregated news stories, and track historical market trends—all through an intuitive web dashboard.  
- **Special Considerations:** The app should be optimized for both desktop and mobile, possibly with Farsi localization, and must prioritize ease of use and clear visual presentation of data.

### Features

**Question:** List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.  
**Answer:**  
- **News Aggregation:** Automatically scrapes and aggregates relevant news articles from reputable sources.  
- **Machine Learning Predictions:** Utilizes an ML algorithm to analyze news sentiment and market trends to forecast USD movement.  
- **Confidence Indicator:** Provides a percentage confidence score with each prediction.  
- **Real-Time Updates:** Displays live market data and news updates.  
- **Interactive Dashboard:** Offers detailed historical analytics and trend visualizations.  

---

## Implementation

### Tech Stack

**Question:** List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.  
**Answer:**  
- **Frontend:** JavaScript, React, HTML5, CSS 
- **Backend:** Node.js (or serverless functions) integrated with external APIs  
- **Machine Learning:** Python-based microservice or third-party ML APIs  
- **Web Scraping:** JavaScript-based scrapers or third-party scraping services  
- **Database:** NoSQL or SQL for storing historical market and news data  
- **Deployment:** Cloud-based hosting (e.g., AWS, Heroku, Vercel)

### APIs

**Question:** List any external sources of data that will be used in your app.  
**Answer:**  
- **News Data:** External news providers (e.g., NewsAPI, GDELT)  
- **Financial Data:** Currency exchange rate APIs (e.g., Fixer.io, CurrencyLayer)  
- **Sentiment Analysis:** Tools like Google Natural Language API for analyzing news sentiment  
- **Machine Learning:** Custom ML service or third-party predictive APIs

### Sitemap

**Question:** List the pages of your app with brief descriptions. You can show this visually, or write it out.  
**Answer:**  
- **Home Page:** An overview featuring the latest prediction, confidence score, and a snapshot of trending news.  
- **Historical Data:** Detailed analytics, historical prediction data, and interactive charts.  
- **News Insights:** A list view of aggregated news articles with sentiment analysis.  

### Mockups

**Question:** Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.  
**Answer:**  
- **Home Page:** A clean interface displaying the main prediction result and confidence score alongside a brief news ticker. (Included in the repo) 
- **Historical Data:** An interactive space with charts showing historical trends, prediction logs, and detailed analytics. (Included in the repo)  
- **News Insights:** A scrollable list of articles with sentiment labels.  

### Data

**Question:** Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.  
**Answer:**  
- **News Data:** Articles including title, publication date, source, content, and sentiment score.  
- **Market Data:** USD/Rial exchange rates with timestamps.  
- **Prediction Data:** ML-generated predictions and their confidence percentages.  
- **Relationships:** News data and sentiment analysis inform the prediction data; market data is used to validate and contextualize predictions.

### Endpoints

**Question:** List endpoints that your server will implement, including HTTP methods, parameters, and example responses.  
**Answer:**  
- **GET /api/news**  
  *Returns aggregated news articles.*  
  **Parameters:** Optional filters (date, source, sentiment)  
  **Example Response:**
  ```json
  {
    "articles": [
      {
        "title": "Sanctions Impact Latest USD Rates",
        "source": "Reuters",
        "date": "2025-03-08T12:00:00Z",
        "sentiment": "negative"
      }
    ]
  }
