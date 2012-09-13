#Generator method that generates the powers of a given base
#up to a given value
def powers(base, limit)
    0.upto(Math.log(limit)/Math.log(base)) {|x| yield base ** x}
end