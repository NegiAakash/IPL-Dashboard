import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "./MatchDetailCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const [year, setYear] = useState(2020);
  const teamName = useParams().teamName;
  const yearList = [
    2020, 2019, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008,
  ];

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
      // console.log(data);
    };
    fetchMatches();
  }, [teamName, year]);
  if (!matches) return null;
  return (
    <>
      <h1>
        Match Page for {teamName}, {year}
      </h1>

      <select value={year} onChange={(e) => setYear(e.target.value)}>
        {yearList.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {matches.map((match) => {
        return (
          <MatchDetailCard teamName={teamName} match={match} key={match.id} />
        );
      })}
    </>
  );
};
