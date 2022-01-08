# EventTrackerProject

## Overview
This is a project to track the total scores, scorecard details, winners, and associated players with games of Yahtzee played in the McGregor household. The real world purpose is to once and for all determine who is the better Yahtzee player - Carla or Max.

### REST API
The REST API portion of this project is the first time I used RESTful services on my own project. I used repositories to access data from SQL, Controllers to receive input from the user, and Services to receive information from the Controllers to pass to the Repositories.



The combination of those three portions of my code (Controllers, Services, Repositories) allow for full CRUD functionality on both games and players in the database.

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
While building the back end functionality, I learned the importance of keeping it simple, especially in the beginning. By keeping it simple early on, I was able to learn my program well which allowed me to expand to more complicate functionality with limited roadblocks and mistakes.
