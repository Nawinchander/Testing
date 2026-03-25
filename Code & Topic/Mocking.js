const db = {
  save: (data) => {
    // real DB call
  }
};

function createUser(user, database) {
  return database.save(user);
}


