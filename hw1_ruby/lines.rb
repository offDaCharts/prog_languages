#Program that takes in a filename as a command line arguement and 
#counts the number of non-white-space and non-commented (with #) lines
counter = 0
File.open(ARGV[0]).each do |line|
	stripped = line.scan(/[^\s]/).to_s
	if stripped.size > 0 and stripped[0..0] != "#" then counter += 1 end
end
puts counter