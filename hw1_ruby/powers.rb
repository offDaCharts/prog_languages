def powers(base, limit)
    0.upto(Math.log(limit)/Math.log(base)) {|x| yield base ** x}
end