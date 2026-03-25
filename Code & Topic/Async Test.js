// fetchUser.js
async function fetchUser(api) {
  const res = await api.get('/user');
  return res.data;
}

module.exports = { fetchUser };


