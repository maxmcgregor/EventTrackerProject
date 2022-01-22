package com.skilldistillery.yahtzee.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.yahtzee.entities.Game;

public interface GameRepository extends JpaRepository<Game, Integer> {
	List<Game> findByPlayer_Id(int playerId);
	List<Game> findByYahtzeeIs(int yahtzee);
	//List<Game> findByPlayer_Name(String name);
	//use the above to get all player games, then use pipes in Angular to filter other data like wins, etc
}
