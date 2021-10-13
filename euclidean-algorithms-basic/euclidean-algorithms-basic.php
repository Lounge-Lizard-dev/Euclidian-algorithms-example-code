<?php
// Basic Euclidean Algorithm

// Function to return
// gcd of a and b
function gcd($a, $b)
{
	if ($a == 0)
		return $b;
	return gcd($b % $a, $a);
}

// Driver Code
$a = 10; $b = 15;
echo "GCD(",$a,"," , $b,") = ",
				gcd($a, $b);
echo "\n";
$a = 35; $b = 10;
echo "GCD(",$a ,",",$b,") = ",
				gcd($a, $b);
echo "\n";
$a = 31; $b = 2;
echo "GCD(",$a ,",", $b,") = ",
				gcd($a, $b);

?>
