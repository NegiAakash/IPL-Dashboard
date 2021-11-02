import React from "react";
import { Link } from "react-router-dom";

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div>
      <h3>
        VS <Link to={`/team/${otherTeam}`}>{otherTeam}</Link>
      </h3>
      {match.matchWinner} won by {match.resultMargin} {match.result}
    </div>
  );
};
