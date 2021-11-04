import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MatchDetailCard } from "./MatchDetailCard";
import { MatchSmallCard } from "./MatchSmallCard";
import { PieChart } from "react-minimal-pie-chart";
import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const teamName = useParams().teamName;

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`/team/${teamName}`);
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
    <div className="">
      <Link to={`/`}>
        <span className="back">&lt; Back</span>
      </Link>
      <div className="teamPage">
        <section className="team-name">
          <h1>{team.teamName}</h1>
        </section>
        <section className="win-loss">
          <PieChart
            data={[
              {
                title: "Losses",
                value: team.totalMatches - team.totalWins,
                color: "#ac4646",
              },
              { title: "Wins", value: team.totalWins, color: "#559c55" },
            ]}
          />
          <p className="ratio-text">
            {team.totalWins} Wins/ {team.totalMatches - team.totalWins} Losses
          </p>
        </section>
        <section className="match-detail">
          <h4>Latest Match</h4>
          <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
        </section>
        <section className="match-small">
          {team.matches.slice(1).map((m) => {
            return (
              <MatchSmallCard teamName={team.teamName} match={m} key={m.id} />
            );
          })}
        </section>
        <section className="match-more">
          <span>
            <Link to={`/team/${teamName}/matches/2020`}>More &gt;</Link>
          </span>{" "}
        </section>
      </div>
    </div>
  );
};
