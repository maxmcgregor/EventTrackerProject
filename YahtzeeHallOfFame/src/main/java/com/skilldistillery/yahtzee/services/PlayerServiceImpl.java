package com.skilldistillery.yahtzee.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.yahtzee.entities.Player;
import com.skilldistillery.yahtzee.repositories.PlayerRepository;

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

}
