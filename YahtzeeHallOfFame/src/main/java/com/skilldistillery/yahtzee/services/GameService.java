package com.skilldistillery.yahtzee.services;

import java.util.List;

import com.skilldistillery.yahtzee.entities.Game;



public interface GameService {
	
	List<Game> getAllGames();
	
	Game getGameById(int gameId);
	
	Game addGame(Game game);
	
	Game updateGame(Game game, int gameId);
	
	boolean deleteGame(int gameId);
	
	List<Game> findGameByPlayer(int playerId);

}
