package com.skilldistillery.yahtzee.services;

import java.util.List;

import com.skilldistillery.yahtzee.entities.Player;

public interface PlayerService {
	
	List<Player> getAllPlayers();
	
	Player getPlayerById(int playerId);
	
	Player addPlayer(Player player);
	
	Player updatePlayer(Player player, int playerId);
	
	boolean deletePlayer(int playerId);
	
	List<Player> findByName(String name);
	
}
