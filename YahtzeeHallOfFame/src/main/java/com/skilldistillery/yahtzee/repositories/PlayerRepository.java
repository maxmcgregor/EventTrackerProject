package com.skilldistillery.yahtzee.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.yahtzee.entities.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer> {
	
	List<Player> findByName(String name);
	
}
