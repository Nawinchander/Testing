// Testing Rate Limiter with Time Control
// Use Jest fake timers (VERY ADVANCED)


// rateLimiter.js
function rateLimiter(limit, windowMs) {
  let calls = [];

  return () => {
    const now = Date.now();
    calls = calls.filter(t => now - t < windowMs);

    if (calls.length >= limit) return false;

    calls.push(now);
    return true;
  };
}

module.exports = { rateLimiter };


