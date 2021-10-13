<script>

// Basic Euclidean Algorithm

// Function to return
// gcd of a and b
function gcd( a, b)
{
	if (a == 0)
		return b;
	return gcd(b % a, a);
}

// Driver Code

	let a = 10, b = 15;
document.write( "GCD(" + a + ", "
		+ b + ") = " + gcd(a, b) +"<br/>");
		
	a = 35, b = 10;
document.write( "GCD(" + a + ", "
		+ b + ") = " + gcd(a, b) +"<br/>");
		
	a = 31, b = 2;
	document.write( "GCD(" + a + ", "
		+ b + ") = " + gcd(a, b) +"<br/>");
</script>
