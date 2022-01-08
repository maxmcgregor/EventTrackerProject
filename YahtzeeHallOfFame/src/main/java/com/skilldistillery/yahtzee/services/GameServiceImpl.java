package com.skilldistillery.yahtzee.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.yahtzee.entities.Game;
import com.skilldistillery.yahtzee.entities.Player;
import com.skilldistillery.yahtzee.repositories.GameRepository;
import com.skilldistillery.yahtzee.repositories.PlayerRepository;

@Service
public class GameServiceImpl implements GameService {

	@Autowired
	private GameRepository gameRepo;

	@Autowired
	private PlayerRepository playerRepo;

	@Override
	public List<Game> getAllGames() {
		return gameRepo.findAll();
	}

	@Override
	public Game getGameById(int gameId) {
		Optional<Game> gameOp = gameRepo.findById(gameId);
		if (gameOp.isPresent()) {
			Game game = gameOp.get();
			return game;
		} else {
			return null;
		}
	}

	@Override
	public List<Game> findGameByPlayer(int playerId) {
		if (!playerRepo.existsById(playerId)) {
			return null;
		} else {
			return gameRepo.findByPlayer_Id(playerId);
		}
	}

	@Override
	public Game addGame(Game game) {
		return gameRepo.saveAndFlush(game);
	}

	@Override
	public void deleteGame(int gameId) {
		gameRepo.deleteById(gameId);
		;
	}

}
