import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MatchDetailCard } from "./MatchDetailCard";
import "./MatchPage.scss";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const [year, setYear] = useState(2020);
  const teamName = useParams().teamName;
  const startYear = process.env.REACT_APP_START_YEAR;
  const endYear = process.env.REACT_APP_END_YEAR;
  let yearList = [];
  console.log(startYear, process.env.REACT_APP_END_YEAR);
  for (let i = startYear; i <= endYear; i++) {
    yearList.push(i);
  }

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`/team/${teamName}/matches?year=${year}`);
      const data = await response.json();
      setMatches(data);
      console.log(data);
    };
    fetchMatches();
  }, [teamName, year]);
  if (!matches) return null;
  return (
    <div className="MatchPage">
      <div className="title-bar">
        <h1>
          Match Page for {teamName}, {year}
        </h1>
        <Link to={`/team/${teamName}`}>
          <span className="back">&lt; Back</span>
        </Link>
      </div>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        {yearList.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {matches.length !== 0 ? (
        matches.map((match) => {
          return (
            <MatchDetailCard teamName={teamName} match={match} key={match.id} />
          );
        })
      ) : (
        <h1 className="no-data-exists">No data exists for this year</h1>
      )}
    </div>
  );
};
