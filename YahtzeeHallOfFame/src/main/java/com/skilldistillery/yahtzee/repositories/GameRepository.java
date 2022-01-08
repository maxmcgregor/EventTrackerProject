package com.skilldistillery.yahtzee.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.yahtzee.entities.Game;

public interface GameRepository extends JpaRepository<Game, Integer> {
	List<Game> findByPlayer_Id(int playerId);
}
