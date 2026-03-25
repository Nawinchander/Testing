function rateLimiter(limit) {
  let count = 0;

  return (req, res, next) => {
    if (count >= limit) {
      return res.status(429).send('Too many requests');
    }
    count++;
    next();
  };
}