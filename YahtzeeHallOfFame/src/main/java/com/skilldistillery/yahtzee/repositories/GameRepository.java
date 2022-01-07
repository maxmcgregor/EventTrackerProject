package com.skilldistillery.yahtzee.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.yahtzee.entities.Game;

public interface GameRepository extends JpaRepository<Game, Integer> {

}
