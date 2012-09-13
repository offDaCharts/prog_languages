def interleave(a, b)
	#This function interleaves 2 arrays into a new array with alternating 
	#elements from the first and second array.  If one array is longer, then
	#the remaining elements in that array are appended to the end.
	big, small = a.size > b.size ? [a, b] : [b, a]
	a[0..small.size-1].zip(b[0..small.size-1]).flatten(1)+big[small.size..big.size-1]
end