import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Teams.scss";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch(`http://localhost:8080/all`);
      const data = await response.json();
      setTeams(data);
    };
    fetchAllTeams();
  }, []);
  return (
    <div className="">
      {" "}
      <h2 className="team-text">IPL Dashboard</h2>
      <div className="HomePage">
        {teams.map((team) => (
          <Link to={`/team/${team.teamName}`}>
            <div className="team " key={team.id}>
              {team.teamName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
