import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "./MatchDetailCard";
import { MatchSmallCard } from "./MatchSmallCard";
import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const teamName = useParams().teamName;

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
    };
    fetchMatches();
  }, [teamName]);

  console.log(team);
  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }
  return (
    <div className="teamPage">
      <section className="team-name">
        <h1>{team.teamName}</h1>
      </section>
      <section className="win-loss"> Wins / Losses</section>
      <section className="match-detail">
        <h4>Latest Match</h4>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </section>
      <section className="match-small">
        {" "}
        {team.matches.slice(1).map((m) => {
          return (
            <MatchSmallCard teamName={team.teamName} match={m} key={m.id} />
          );
        })}
      </section>
      <section className="match-more">More </section>
    </div>
  );
};
