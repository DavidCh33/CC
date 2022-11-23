const DataBase = require('./DataBase');
const BoardGame = require('./BoardGame');
const User = require('./User');

class DataBaseMock extends DataBase {

    #BoardGames
    #Users
    #Comments

    constructor() {
        
        super()
        this.#BoardGames = []
        this.#Users = []
        this.#Comments = []

    }

    AddUser(User){

        this.#Users.push(User);

    }

    GetUser(UserId){

        let UserFound = this.#Users.find(function (U) {
            return U.Id == UserId;
        });

        if(UserFound === undefined){

            UserFound = new User(-1, "", "", 3);

        }

        return UserFound;

    }

    GetBoardGames() {
        return this.#BoardGames;
    }

    AddBoardGame(BoardGame){

        this.#BoardGames.push(BoardGame);

    }

    GetBoardGame(BoardGameId){

        let BoardGameFound = this.#BoardGames.find(function (Bg) {
            return Bg.Id == BoardGameId;
        });

        if(BoardGameFound === undefined){

            BoardGameFound = new BoardGame(-1, "", 0, 0, 0);

        }

        return BoardGameFound;

    }

}

module.exports = DataBaseMock;