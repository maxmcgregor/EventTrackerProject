package com.skilldistillery.yahtzee.services;

import java.util.List;

import com.skilldistillery.yahtzee.entities.Player;

public interface PlayerService {
	
	List<Player> getAllPlayers();
	List<Player> findByName(String name);
	
}
