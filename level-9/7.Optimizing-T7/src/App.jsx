import React, { useState, useMemo, useCallback } from "react";
import './App.css';
// Utility function to find prime numbers up to a given limit
const findPrimes = (limit) => {
  console.log("Calculating prime numbers...");
  let primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let divisor = 2; divisor * divisor <= num; divisor++) {
      if (num % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
};

// Child component (memoized) to display the list of primes
const PrimeList = React.memo(({ primes, onReset }) => {
  console.log("Rendering PrimeList component...");
  return (
    <div>
      <h3>Prime Numbers:</h3>
      <ul>
        {primes.map((prime) => (
          <li key={prime}>{prime}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
});

const PrimeCalculator = () => {
  const [limit, setLimit] = useState(50); // State to store the input value

  // Memoizing the expensive prime number calculation
  const primeNumbers = useMemo(() => findPrimes(limit), [limit]);

  // Memoized event handler to reset limit
  const handleReset = useCallback(() => {
    setLimit(50);
  }, []);

  return (
    <div>
      <h2>Prime Number Calculator</h2>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
      <PrimeList primes={primeNumbers} onReset={handleReset} />
    </div>
  );
};

export default PrimeCalculator;
