def interleave(a, b)
	big, small = a.size > b.size ? [a, b] : [b, a]
	a[0..small.size-1].zip(b[0..small.size-1]).flatten(1)+big[small.size..big.size-1]
end