class Array
	def stutter
		return self.zip(self).flatten(1)
	end
end