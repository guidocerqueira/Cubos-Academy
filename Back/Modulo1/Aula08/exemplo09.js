const nums = [10, 5, 23, 2, 1];

// colocar em ordem crescente
// - => a vem primeiro
// + => b vem primero

nums.sort((a, b) => {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
});
				 
console.log(nums);