import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";

export const MatchDetailCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div className="MatchDetailCard">
      <div className="innings-details">
        <h2>
          <span>VS</span> <Link to={`/team/${otherTeam}`}>{otherTeam}</Link>
        </h2>
        <div className="details-date">
          <h3>{match.date}</h3>
        </div>
        <div className="details-venue">
          <h3>at {match.venue}</h3>
        </div>
        <div className="details-winner">
          <h3>
            {match.matchWinner} won by {match.resultMargin} {match.result}
          </h3>
        </div>
      </div>

      <div className="innings-extra-details">
        <span>
          First Innings : <p>{match.team1}</p>
        </span>
        <span>
          Second Innings : <p>{match.team2}</p>
        </span>
      </div>
    </div>
  );
};
