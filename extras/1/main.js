function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    console.log([...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]);
  }
removeSmallest([5,2,3,1,4,5])