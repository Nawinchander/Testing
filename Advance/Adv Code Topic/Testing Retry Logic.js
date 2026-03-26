// Testing Retry Logic (Resilience Engineering)


// retry.js

async function fetchWithRetry(api, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await api.get('/data');
    } catch (err) {
      if (i === retries - 1) throw err;
    }
  }
}

module.exports = { fetchWithRetry };


