require 'test/unit'
require 'misc.rb'

class String
  def is_permutation_of(other)
    self.split(//).sort == other.split(//).sort
  end
end

class TestUtil < Test::Unit::TestCase

  def test_strip_vowels()
    assert_equal(strip_vowels(""), "");
    assert_equal(strip_vowels("ouT"), "T");
    assert_equal(strip_vowels("hello world"), "hll wrld");
    assert_equal(strip_vowels("aEIoUou"), "");
	assert_equal(strip_vowels("strip_VOWELS"), "strp_VWLS");
  end

  def test_scramble()
    ["", "a", "aaaa", "aaba", "abfswegwtewr"].each do |s|
      assert(s.is_permutation_of(scramble(s)))
    end
    assert(!"abc".is_permutation_of(scramble("aab")))
  end

  def test_powers_of_two()
    assert_equal(powers_of_two(20) {|x| x}, [1,2,4,8,16])
    assert_equal(powers_of_two(1111) {|x| x}, [1,2,4,8,16,32,64,128,256,512,1024])
    assert_equal(powers_of_two(0) {|x| x}, [])
    assert_equal(powers_of_two(5) {|x| x}, [1,2,4])
  end

  def test_powers()
	assert_equal(powers(2,1111) {|x| x}, [1,2,4,8,16,32,64,128,256,512,1024])
    assert_equal(powers(3,400) {|x| x}, [1,3,9,27,81,243])
    assert_equal(powers(4,400) {|x| x}, [1,4,16,64,256])
    assert_equal(powers(5,0) {|x| x}, [])
  end

  def test_interleave()
    assert_equal(interleave([1, 2], [nil, 5, 7, 10]), [1, nil, 2, 5, 7, 10])
    assert_equal(interleave([1, 'a', 'hello'], [nil, 23]), [1, nil, 'a', 23, 'hello'])
    assert_equal(interleave(['a', 'b', 'c', 'd'], ['e', 'f']), ['a', 'e', 'b', 'f', 'c', 'd'])
    assert_equal(interleave([1], [nil, nil, nil, 'q']), [1, nil, nil, nil, 'q'])
    assert_equal(interleave([1, 2, 3, 4, 5], [2, [3, 4]]), [1, 2, 2, [3, 4], 3, 4, 5])
  end

  def test_stutter()
    assert_equal([1, 1].stutter, [1, 1, 1, 1]);
    assert_equal([1, 2, 3, 4].stutter, [1, 1, 2, 2, 3, 3, 4, 4]);
    assert_equal([1, [2, 3], 'a'].stutter, [1, 1, [2, 3], [2, 3],  'a', 'a']);
    assert_equal([].stutter, []);
    assert_equal([nil].stutter, [nil, nil]);
    assert_equal([1, 'a', nil, true].stutter, [1, 1, 'a', 'a', nil, nil, true, true]);
  end

end