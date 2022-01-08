package com.skilldistillery.yahtzee.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PlayerTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Player player;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAYahtzee");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		player = em.find(Player.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		player = null;
	}

	@Test
	void test_Player_entity_mapping() {
		assertNotNull(player);
		assertEquals("Max", player.getName());
	}
	
	@Test
	void test_Player_Game_OneToMany_mapping() {
		assertNotNull(player);
		assertNotNull(player.getGames());
		assertTrue(player.getGames().size() > 0);
	}

}
