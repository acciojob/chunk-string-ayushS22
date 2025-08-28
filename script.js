function stringChop(str, size) {
  // your code here
	 // Convert size to number (prompt gives string)
  size = Number(size);

  // Edge case: if size <= 0 return whole string
  if (size <= 0) return [str];

  let chunks = [];

  // Loop through the string in steps of size
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
