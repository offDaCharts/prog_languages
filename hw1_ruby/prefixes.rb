#Program that takes a command line arguement and prints
#successive prefixes of the string starting with the empty
#string up to the full string
puts ""
0.upto(ARGV[0].size-1) { |x| puts ARGV[0][0..x] }