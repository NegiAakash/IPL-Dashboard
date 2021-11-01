import React from "react";

export const MatchSmallCard = ({ match }) => {
  if (!match) return null;
  return (
    <div>
      <p>Match Small Card</p>
      <p>
        {match.team1} VS {match.team2}
      </p>
    </div>
  );
};
