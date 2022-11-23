class DataBase {
    
    constructor() {
        
        if(this.constructor == DataBase){
            throw new Error("Abstract Class cannot be instanced");
        }

    }

    GetBoardGames() {}

    AddBoardGame(BoardGame){}

}

module.exports = DataBase;