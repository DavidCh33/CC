const Comment = require('./Comment');

class BoardGame {
    
    constructor(Id, Name, MinPlayerNumber, MaxPlayerNumber, AveragePlayTime) {
        
        this.Id = Id;
        this.Name = Name;
        this.MinPlayerNumber = MinPlayerNumber;
        this.MaxPlayerNumber = MaxPlayerNumber;
        this.AveragePlayTime = AveragePlayTime;
        this.comments = []
    }

    AddComment(userId, text){

        let NewComment = new Comment(userId, text)
        this.comments.push(NewComment)

    }

    GetId(){

        return this.Id;

    }

}

module.exports = BoardGame;