class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    let user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    let user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    let users = this.users.filter((user) => user.room === room);
    return users.map((user) => user.name);
  }
  getRoomsList () {
    let rooms = {};
    let roomsArray = [];

    this.users.map((user) => {
      if(rooms[user.room]) {
        rooms[user.room]++;
      } else {
        rooms[user.room] = 1;
      }
    });


    Object.keys(rooms).forEach((key) => {
      roomsArray.push({room: key, users: rooms[key]});
    });

    return roomsArray;
  }
  isUniqueUser ( name, room ) {
    let roomUsersList = this.getUserList(room);
    let duplicated = roomUsersList.filter((user) => user === name);

    return !duplicated.length;
  };
}

module.exports = {Users};
