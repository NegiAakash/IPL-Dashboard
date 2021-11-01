import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "./MatchDetailCard";
import { MatchSmallCard } from "./MatchSmallCard";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const fetchMatches = async () => {
    const response = await fetch("http://localhost:8080/team/Delhi%20Capitals");
    const data = await response.json();
    setTeam(data);
  };
  useEffect(() => {
    fetchMatches();
  }, []);

  console.log(team);

  return (
    <div className="teamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]} />
      <MatchDetailCard />
      {team.matches.slice(1).map((m) => {
        return <MatchSmallCard match={m} key={m.id} />;
      })}
    </div>
  );
};
