package io.springboot.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.springboot.ipldashboard.Model.Team;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

}
