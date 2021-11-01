package io.springboot.ipldashboard.Processor;

import java.time.LocalDate;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import io.springboot.ipldashboard.Entity.MatchInput;
import io.springboot.ipldashboard.Model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    // private static final Logger log =
    // LoggerFactory.getLogger(MatchDataProcessor.class);

    @Override
    public Match process(final MatchInput matchInput) throws Exception {
        Match m = new Match();
        m.setId(Long.parseLong(matchInput.getId()));
        m.setCity(matchInput.getCity());
        m.setDate(LocalDate.parse(matchInput.getDate()));
        m.setPlayerOfMatch(matchInput.getPlayer_of_match());
        m.setVenue(matchInput.getVenue());
        // Set Team 1 and Team 2 depending on innings order.
        String firstInningsTeam, secondInningsTeam;
        if ("bat".equals(matchInput.getToss_decision())) {
            firstInningsTeam = matchInput.getToss_winner();
            secondInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) ? matchInput.getTeam2()
                    : matchInput.getTeam1();
        } else {
            secondInningsTeam = matchInput.getToss_winner();
            firstInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) ? matchInput.getTeam2()
                    : matchInput.getTeam1();
        }
        m.setTeam1(firstInningsTeam);
        m.setTeam2(secondInningsTeam);
        m.setMatchWinner(matchInput.getWinner());
        m.setTossWinner(matchInput.getToss_winner());
        m.setTossDecision(matchInput.getToss_decision());
        m.setResult(matchInput.getResult());
        m.setResultMargin(matchInput.getResult_margin());
        m.setUmpire1(matchInput.getUmpire1());
        m.setUmpire2(matchInput.getUmpire2());

        return m;
    }

}