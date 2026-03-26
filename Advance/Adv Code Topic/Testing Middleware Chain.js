// Testing Middleware Chain (Real Backend System)
// Real-world: Express middleware pipeline


// middleware.js
function auth(req, res, next) {
  if (!req.user) return res.status(401).send('Unauthorized');
  next();
}

function handler(req, res) {
  res.send('Success');
}

module.exports = { auth, handler };




