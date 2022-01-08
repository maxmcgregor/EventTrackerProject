package com.skilldistillery.yahtzee.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.yahtzee.entities.Game;
import com.skilldistillery.yahtzee.services.GameService;

@RestController
@RequestMapping("api")
public class GameController {
	
	@Autowired
	private GameService gameSvc;
	
	@GetMapping("games")
	public List<Game> getAllGames() {
		return gameSvc.getAllGames();
	}
	
	@GetMapping("games/{gameId}")
	public Game getGameById(@PathVariable Integer gameId, HttpServletResponse res) {
		Game resultGame = gameSvc.getGameById(gameId);
		if (resultGame == null) {
			res.setStatus(404);
		}
		return resultGame;
	}
	
	@PostMapping("games")
	public Game addGame(@RequestBody Game game, HttpServletResponse res, HttpServletRequest req) {
		try {
			game = gameSvc.addGame(game);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(game.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			System.err.println("Invalid JSON for New Game");
			res.setStatus(400);
			game = null;
		}
		return game;
	}
	
	
}
