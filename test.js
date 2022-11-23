// npm test
const BoardGame = require('./BoardGame');
const Controller = require('./Controller');
const User = require('./User');

test('BoardGame Added', () => {

    Admin = new User(0, "david@ms.es", "StrongPassword", 0);
    Control = new Controller(null, Admin);
    Control.AddBoardGame(new BoardGame(0, "Root", 2, 4, 120));
    Bg = Control.GetBoardGame(0);

    expect(Bg.GetId()).toBe(0);

});

test('BoardGame doesn\'t exist', () => {

    Admin = new User(0, "david@ms.es", "StrongPassword", 0);
    Control = new Controller(null, Admin);
    Bg = Control.GetBoardGame(0);

    expect(Bg.GetId()).toBe(-1);

});

test('Admin exist', () => {

    Admin = new User(0, "david@ms.es", "StrongPassword", 0);
    Control = new Controller(null, Admin);

    expect(Control.GetUser(0).Id).toBe(0);

});

test('New user added', () => {

    Admin = new User(0, "david@ms.es", "StrongPassword", 0);
    NewUser = new User(1, "david@gmail.com", "StrongPassword", 2)
    Control = new Controller(null, Admin);

    expect(Control.GetUser(0).Id).toBe(0);

});

test('User doesn\'t exist', () => {

    Admin = new User(0, "david@ms.es", "StrongPassword", 0);
    Control = new Controller(null, Admin);

    expect(Control.GetUser(1).Id).toBe(-1);

});