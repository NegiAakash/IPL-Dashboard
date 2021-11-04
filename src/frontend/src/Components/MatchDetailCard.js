import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";

export const MatchDetailCard = ({ teamName, match }) => {
  const matchWon = teamName === match.matchWinner;
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div
      className={
        matchWon ? "MatchDetailCard match-won" : "MatchDetailCard match-lost"
      }
    >
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

      {/* Can add man of the match firlds and empires field */}
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
