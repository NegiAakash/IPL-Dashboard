package io.springboot.ipldashboard.controller;

import java.time.LocalDate;
import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.springboot.ipldashboard.Model.Match;
import io.springboot.ipldashboard.Model.Team;
import io.springboot.ipldashboard.repository.MatchRepository;
import io.springboot.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {
    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/all")
    public List<Team> getAllTeams() {
        List<Team> t = new ArrayList<>();
        this.teamRepository.findAll().forEach(p -> t.add(p));
        return t;

    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 01, 01);
        LocalDate endDate = LocalDate.of(year + 1, 01, 01);
        // return
        // this.matchRepository.getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(teamName,
        // startDate,
        // endDate, teamName, startDate, endDate);
        return this.matchRepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
    }

}
