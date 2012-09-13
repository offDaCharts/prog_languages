#Method that accepts a string parameter and returns
#a random permutation of it
def scramble(str)
	return str.split(//).shuffle().to_s
end