import React from "react";

export const MatchDetailCard = ({ match }) => {
  if (!match) return null;
  return (
    <div>
      <h3>
        {match.team1} VS {match.team2}
      </h3>
    </div>
  );
};
