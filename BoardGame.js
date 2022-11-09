const Comment = require('./Comment');

class BoardGame {
    
    constructor(id, name, minPlayerNumber, maxPlayerNumber, averagePlayTime) {
        this.id = id;
        this.name = name;
        this.minPlayerNumber = minPlayerNumber;
        this.maxPlayerNumber = maxPlayerNumber;
        this.averagePlayTime = averagePlayTime;
        this.comments = []
    }

    addComment(userId, text){

        let newComment = new Comment(userId, text)
        this.comments.push(newComment)

    }

}

module.exports = BoardGame;