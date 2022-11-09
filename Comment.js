class Comment {
    
    constructor(userId, text) {
        this.userId = userId;
        this.text = text;
        this.dateCreation = new Date();
    }

}

module.exports = Comment;