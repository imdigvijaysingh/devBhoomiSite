import React from "react";

const LeaderCard = (
    {
        leaderImg,
        leaderImgAlt,
        leaderName,
        leaderPosition,
        leaderQuote,
    }
) => {
  return (
    <div>
      <div class="leader-card">
        <div class="leader-img">
          <img src={leaderImg} alt={leaderImgAlt} />
        </div>
        <div class="leader-content">
          <h3>{leaderName}</h3>
          <div class="position">{leaderPosition}</div>
          <p>{leaderQuote}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
