package com.skilldistillery.yahtzee.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.yahtzee.entities.Player;
import com.skilldistillery.yahtzee.services.PlayerService;

@RestController
@RequestMapping("api")
public class PlayerController {
	
	@Autowired
	private PlayerService playerSvc;
	
	@GetMapping("players")
	public List<Player> getAllPlayers() {
		return playerSvc.getAllPlayers();
	}
	
	@GetMapping("players/{playerId}")
	public Player getPlayerById(@PathVariable Integer playerId, HttpServletResponse res) {
		Player resultPlayer = playerSvc.getPlayerById(playerId);
		if (resultPlayer == null) {
			res.setStatus(404);
		}
		return resultPlayer;
	}
	
	@PostMapping("players")
	public Player addPlayer(@RequestBody Player player, HttpServletResponse res, HttpServletRequest req) {
		try {
			player = playerSvc.addPlayer(player);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(player.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			System.err.println("Invalid JSON for New Player");
			res.setStatus(400);
			player = null;
		}
		return player;
	}
	
	@PutMapping("players/{playerId}")
	public Player updatePlayer(@RequestBody Player player, @PathVariable Integer playerId, HttpServletResponse res) {
		Player updatedPlayer = playerSvc.updatePlayer(player, playerId);
		if (updatedPlayer != null) {
			res.setStatus(201);
		}
		return updatedPlayer;
	}
	
	@DeleteMapping("players/{playerId}")
	public void deletePlayer(@PathVariable Integer playerId, HttpServletResponse res) {
		if (playerSvc.deletePlayer(playerId)) {
			res.setStatus(HttpStatus.NO_CONTENT.value());
		} else {
			res.setStatus(404);
		}
	}
}
