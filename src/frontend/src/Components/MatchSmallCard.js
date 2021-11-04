import React from "react";
import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const matchWon = teamName === match.matchWinner;
  return (
    <div
      className={
        matchWon ? "MatchSmallCard match-won" : "MatchSmallCard match-lost"
      }
    >
      <h2>
        <span>VS</span> <Link to={`/team/${otherTeam}`}>{otherTeam}</Link>
      </h2>
      {match.matchWinner} won by {match.resultMargin} {match.result}
    </div>
  );
};
