import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "./MatchDetailCard";
import { MatchSmallCard } from "./MatchSmallCard";

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
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      <MatchDetailCard />
      {team.matches.slice(1).map((m) => {
        return <MatchSmallCard teamName={team.teamName} match={m} key={m.id} />;
      })}
    </div>
  );
};
