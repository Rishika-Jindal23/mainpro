// PopularTrendsComponent.tsx

import React from 'react';

interface Trend {
  title: string;
  description: string;
}

interface PopularTrendsProps {
  trends: Trend[];
}

const PopularTrendsComponent: React.FC<PopularTrendsProps> = ({ trends }) => {
  return (
    <div className="popular-trends-container">
      <h2 className="section-title">Popular Trends Today</h2>
      <div className="trends-list">
        {trends.map((trend, index) => (
          <div key={index} className="trend-item">
            <h3 className="trend-title">{trend.title}</h3>
            <p className="trend-description">{trend.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .popular-trends-container {
          background-color: #f0f4f8;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .section-title {
          color: #0052cc;
          margin-bottom: 15px;
        }
        .trends-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .trend-item {
          background-color: #ffffff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        .trend-title {
          color: #0052cc;
          margin-bottom: 10px;
        }
        .trend-description {
          color: #333333;
        }
      `}</style>
    </div>
  );
};

export default PopularTrendsComponent;
