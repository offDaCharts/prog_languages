def powers_of_two(limit)
    0.upto(Math.log(limit)/Math.log(2)) {|x| yield 2 << (x-1)}
end