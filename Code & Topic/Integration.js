function registerUser(user, db) {
  if (!user.email) throw new Error('Email required');
  return db.save(user);
}


