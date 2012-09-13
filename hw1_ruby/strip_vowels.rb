#Method that accepts a string and returns that string
#with all of the vowels removed
def strip_vowels(str)
	return str.scan(/[^aeiouAEIOU]/).to_s
end