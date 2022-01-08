package com.skilldistillery.yahtzee.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="grand_total")
	private int grandTotal;
	
	private boolean winner;
	
	private int aces;
	
	private int twos;
	
	private int threes;
	
	private int fours;
	
	private int fives;
	
	private int sixes;
	
	private int bonus;
	
	@Column(name="3_of_a_kind")
	private int threeOfAKind;
	
	@Column(name="4_of_a_kind")
	private int fourOfAKind;
	
	@Column(name="full_house")
	private int fullHouse;
	
	@Column(name="sm_straight")
	private int smallStraight;
	
	@Column(name="lg_straight")
	private int largeStraight;
	
	private int yahtzee;
	
	private int chance;
	
	@Column(name="yahtzee_bonus")
	private int yahtzeeBonus;
	
	@ManyToOne
	@JoinColumn(name="player_id")
	private Player player;
	

	public Game() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(int grandTotal) {
		this.grandTotal = grandTotal;
	}

	public boolean isWinner() {
		return winner;
	}

	public void setWinner(boolean winner) {
		this.winner = winner;
	}

	public int getAces() {
		return aces;
	}

	public void setAces(int aces) {
		this.aces = aces;
	}

	public int getTwos() {
		return twos;
	}

	public void setTwos(int twos) {
		this.twos = twos;
	}

	public int getThrees() {
		return threes;
	}

	public void setThrees(int threes) {
		this.threes = threes;
	}

	public int getFours() {
		return fours;
	}

	public void setFours(int fours) {
		this.fours = fours;
	}

	public int getFives() {
		return fives;
	}

	public void setFives(int fives) {
		this.fives = fives;
	}

	public int getSixes() {
		return sixes;
	}

	public void setSixes(int sixes) {
		this.sixes = sixes;
	}

	public int getBonus() {
		return bonus;
	}

	public void setBonus(int bonus) {
		this.bonus = bonus;
	}

	public int getThreeOfAKind() {
		return threeOfAKind;
	}

	public void setThreeOfAKind(int threeOfAKind) {
		this.threeOfAKind = threeOfAKind;
	}

	public int getFourOfAKind() {
		return fourOfAKind;
	}

	public void setFourOfAKind(int fourOfAKind) {
		this.fourOfAKind = fourOfAKind;
	}

	public int getFullHouse() {
		return fullHouse;
	}

	public void setFullHouse(int fullHouse) {
		this.fullHouse = fullHouse;
	}

	public int getSmallStraight() {
		return smallStraight;
	}

	public void setSmallStraight(int smallStraight) {
		this.smallStraight = smallStraight;
	}

	public int getLargeStraight() {
		return largeStraight;
	}

	public void setLargeStraight(int largeStraight) {
		this.largeStraight = largeStraight;
	}

	public int getYahtzee() {
		return yahtzee;
	}

	public void setYahtzee(int yahtzee) {
		this.yahtzee = yahtzee;
	}

	public int getChance() {
		return chance;
	}

	public void setChance(int chance) {
		this.chance = chance;
	}

	public int getYahtzeeBonus() {
		return yahtzeeBonus;
	}

	public void setYahtzeeBonus(int yahtzeeBonus) {
		this.yahtzeeBonus = yahtzeeBonus;
	}
	
	public Player getPlayer() {
		return player;
	}

	public void setPlayer(Player player) {
		this.player = player;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Game [id=" + id + ", grandTotal=" + grandTotal + ", winner=" + winner + ", aces=" + aces + ", twos="
				+ twos + ", threes=" + threes + ", fours=" + fours + ", fives=" + fives + ", sixes=" + sixes
				+ ", bonus=" + bonus + ", threeOfAKind=" + threeOfAKind + ", fourOfAKind=" + fourOfAKind
				+ ", fullHouse=" + fullHouse + ", smallStraight=" + smallStraight + ", largeStraight=" + largeStraight
				+ ", yahtzee=" + yahtzee + ", chance=" + chance + ", yahtzee_bonus=" + yahtzeeBonus + "]";
	}
	
	
}
