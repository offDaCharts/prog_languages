#Generator method that generates the powers of 2
#up to a given value
def powers_of_two(limit)
    0.upto(Math.log(limit)/Math.log(2)) {|x| yield 2 << (x-1)}
end