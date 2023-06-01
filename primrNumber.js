
	function isPrime(n) {
		// Corner case
		if (n <= 1)
			return false;

		// Check from 2 to n-1
		for (let i = 2; i < n; i++)
        { if (n % i == 0)
            return false;
        }
			

		return true;
	}

	// Driver Code

	const n =5 ;
   console.log( isPrime(n))

