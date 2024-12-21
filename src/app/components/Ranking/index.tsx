import React from 'react';
import './style.css';

const RankingCard = () => {
  return (
    <div className="RankingCard">
      <span className="rank">1위</span>
      <span className="name">정소울</span>
      <div className="likes">
        <span className="heart">❤️</span>
        <span className="like-count">900</span>
      </div>
    </div>
  );
};

export default RankingCard;