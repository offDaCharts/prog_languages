def powers(base, limit)
    yield arr = (0..Math.log(limit)/Math.log(base)).map {|x| base**x}
end