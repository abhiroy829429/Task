function solution(D) {
  // Day names in order starting from Monday
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const result = {};
  const dayValues = {};

  // Step 1: Fill in the known days with their total values
  for (const date in D) {
    const value = D[date];
    const day = days[new Date(date).getDay() === 0 ? 6 : new Date(date).getDay() - 1];
    dayValues[day] = (dayValues[day] || 0) + value;
  }

  // Step 2: Convert to ordered array according to days
  const orderedValues = days.map(day => (dayValues[day] !== undefined ? dayValues[day] : null));

  // Step 3: Fill missing days with mean of previous and next available days
  for (let i = 0; i < 7; i++) {
    if (orderedValues[i] === null) {
      // find previous non-null
      let prev = i - 1;
      while (prev >= 0 && orderedValues[prev] === null) prev--;
      // find next non-null
      let next = i + 1;
      while (next < 7 && orderedValues[next] === null) next++;

      const prevVal = prev >= 0 ? orderedValues[prev] : 0;
      const nextVal = next < 7 ? orderedValues[next] : 0;

      // if both exist, take mean, else take existing one
      if (prev >= 0 && next < 7) {
        orderedValues[i] = Math.round((prevVal + nextVal) / 2);
      } else {
        orderedValues[i] = prev >= 0 ? prevVal : nextVal;
      }
    }
  }

  // Step 4: Create final dictionary
  for (let i = 0; i < 7; i++) {
    result[days[i]] = orderedValues[i];
  }

  return result;
}

/* ------------------- TEST CASES ------------------- */

// Example 1
const D1 = {
  '2020-01-01': 4,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': 6,
  '2020-01-07': 2,
  '2020-01-08': -2,
};
console.log(solution(D1));
// Expected: { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }

// Example 2 (Missing Thu & Fri)
const D2 = {
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 2,
  '2020-01-07': 4,
};
console.log(solution(D2));
// Expected: { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }
