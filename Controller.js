const DataBaseMock = require("./DataBaseMock")

class Controller {

    #DB

    constructor(DB=null, Admin) {
        
        if (DB == null){

            this.#DB = new DataBaseMock();

        }
        else{

            this.#DB = DB;

        }

        this.#DB.AddUser(Admin);

    }

    AddUser(User){

        this.#DB.AddUser(User);

    }

    GetUser(UserId){

        return this.#DB.GetUser(UserId);

    }

    AddBoardGame(BoardGame){

        this.#DB.AddBoardGame(BoardGame);

    }

    GetBoardGame(BoardGameId){

        return this.#DB.GetBoardGame(BoardGameId);

    }

}

module.exports = Controller;