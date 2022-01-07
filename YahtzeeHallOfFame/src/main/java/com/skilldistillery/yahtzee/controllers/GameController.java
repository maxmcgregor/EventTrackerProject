package com.skilldistillery.yahtzee.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	public List<Game> index() {
		return gameSvc.getAllGames();
	}
}
