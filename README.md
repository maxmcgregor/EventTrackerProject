# EventTrackerProject

## Overview
This is a project to track the scores, winners, and associated players with games of Yahtzee played in the McGregor household. The real world purpose is to once and for all determine who is the better Yahtzee player - Carla or Max.  

### REST API

### HTML/JavaScript Front End

### Angular Front End

## REST API Reference
| Return Type  | HTTP Method |           URI           | Request Body | Purpose  |
|--------------|-------------|-------------------------|--------------|----------|
|  List<Game>  |     GET     | /api/games              |              | List     |
|     Game     |     GET     | /api/games/{gameId}     |              | Retrieve |
|     Game     |     POST    | /api/games              |  Game JSON   | Create   |
|     Game     |     PUT     | /api/games/{gameId}     |  Game JSON   | Update   |
|     void     |     DELETE  | /api/games/{gameId}     |              | Delete   |
| List<Player> |     GET     | /api/players            |              | List     |
|     Player   |     GET     | /api/players/{playerId} |              | Retrieve |
|     Player   |     POST    | /api/players            | Player JSON  | Create   |
|     Player   |     PUT     | /api/players/{playerId} | Player JSON  | Update   |
|     void     |     DELETE  | /api/players/{playerId} |              | Delete   |


## Technologies Used
Sprint Tool Suite, Spring JPA, REST, Postman, MySQLWorkbench, Terminal, Github

## Lessons Learned
