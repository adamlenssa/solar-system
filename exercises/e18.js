/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let count = {}
  for (let i = 0; i < data.asteroids.length; i++) {
    const asteroid = data.asteroids[i];
    if (count[asteroid.discoveryYear]) {
        count[asteroid.discoveryYear] += 1
      } else {
        count[asteroid.discoveryYear] = 1
      }
  }
   
  let big = Object.values(count)[0];
  let greatest = undefined;
  for (const times in count) {
    if (count[times] > big) {
      big = count[times];
      greatest = times;
    }
  }
  return Number(greatest)
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
