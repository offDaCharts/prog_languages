def powers_of_two(limit)
    yield arr = (0..Math.log(limit)/Math.log(2)).map {|x| 2 << (x-1)}
end