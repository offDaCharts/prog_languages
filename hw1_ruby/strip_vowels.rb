def strip_vowels(str)
	return str.scan(/[^aeiouAEIOU]/).to_s
end