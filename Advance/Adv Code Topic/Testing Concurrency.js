// Testing Concurrency (Race Conditions)
/// Multiple requests hitting shared state

// counter.js
let count = 0;

async function increment() {
  const current = count;
  await new Promise(r => setTimeout(r, 10)); // simulate delay
  count = current + 1;
}

module.exports = { increment, getCount: () => count };


