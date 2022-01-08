package com.skilldistillery.yahtzee.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.yahtzee.entities.Player;
import com.skilldistillery.yahtzee.repositories.PlayerRepository;

@Service
public class PlayerServiceImpl implements PlayerService {
	
	@Autowired
	private PlayerRepository playerRepo;

	@Override
	public List<Player> getAllPlayers() {
		return playerRepo.findAll();
	}

	@Override
	public List<Player> findByName(String name) {
		return playerRepo.findByName(name);
	}

	@Override
	public Player getPlayerById(int playerId) {
		Optional<Player> playerOp = playerRepo.findById(playerId);
		if (playerOp.isPresent()) {
			Player player = playerOp.get();
			return player;
		} else {
			return null;			
		}
	}

	@Override
	public Player addPlayer(Player player) {
		return playerRepo.saveAndFlush(player);
	}

	@Override
	public Player updatePlayer(Player player, int playerId) {
		player.setId(playerId);
		if (playerRepo.existsById(playerId)) {
			return playerRepo.save(player);
		}
		return null;
	}

	@Override
	public boolean deletePlayer(int playerId) {
		boolean deleted = false;
		Optional<Player> playerOp = playerRepo.findById(playerId);
		if (playerOp.isPresent()) {
			Player player = playerOp.get();
			playerRepo.delete(player);
			deleted = true;
		}
		return deleted;
	}

}
