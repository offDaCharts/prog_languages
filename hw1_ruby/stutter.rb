#Program that adds a stutter method to the array class
class Array
	def stutter
		#Method that returns an array the same as the initial
		#array except every values is repeated
		return self.zip(self).flatten(1)
	end
end