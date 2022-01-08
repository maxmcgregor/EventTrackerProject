package com.skilldistillery.yahtzee.services;

import java.util.List;

import com.skilldistillery.yahtzee.entities.Game;



public interface GameService {
	
	List<Game> getAllGames();
	Game getGameById(int gameId);
	List<Game> findGameByPlayer(int playerId);
	Game addGame(Game game);
	
	void deleteGame(int gameId);

}
