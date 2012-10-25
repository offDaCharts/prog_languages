;;Unit test to test first 6 questions.  Prints nothing on succes, throws failed test on fail

(ns user
  (:use clojure.test))

(load "interleaves")
(load "powers")
(load "powersOfTwo")
(load "scramble")
(load "stripVowels")
(load "stutter")
(load "change")

(defn getArrayFromPowersOfTwo [limit]
	(with-local-vars [arr []]
		(powersOfTwo limit (fn [x] (var-set arr (concat @arr [x]))))
	@arr)
)

(defn getArrayFromPowers [base limit]
	(with-local-vars [arr []]
		(powers base limit (fn [x] (var-set arr (concat @arr [x]))))
	@arr)
)

(defn arePermutations [s1 s2]
	(= (clojure.string/join (sort (clojure.string/split s1 #""))) 
				(clojure.string/join (sort (clojure.string/split s2 #""))))
)

;test change
(is (= (change 92) [3,1,1,2]))
(is (= (change 0) [0,0,0,0]))
(is (= (change 150) [6,0,0,0]))
(is (= (change 80) [3,0,1,0]))
(is (= (change 5) [0,0,1,0]))

;test interleaves
(is (= (interleaves [1, 2] [nil, 5, 7, 10]) [1, nil, 2, 5, 7, 10]))
(is (= (interleaves [1, 'a', 'hello'] [nil, 23]) [1, nil, 'a', 23, 'hello']))
(is (= (interleaves ['a', 'b', 'c', 'd'] ['e', 'f']) ['a', 'e', 'b', 'f', 'c', 'd']))
(is (= (interleaves [1], [nil, nil, nil, 'q']) [1, nil, nil, nil, 'q']))
(is (= (interleaves [1, 2, 3, 4, 5], [2, [3, 4]]) [1, 2, 2, [3, 4], 3, 4, 5]))

;test powers
(is  (= (getArrayFromPowers 2 1111) [1,2,4,8,16,32,64,128,256,512,1024]))
(is  (= (getArrayFromPowers 3 400) [1,3,9,27,81,243]))
(is  (= (getArrayFromPowers 4 400) [1,4,16,64,256]))
(is  (= (getArrayFromPowers 5 0) []))

;test powersOfTwo
(is  (= (getArrayFromPowersOfTwo 20) [1,2,4,8,16]))
(is  (= (getArrayFromPowersOfTwo 1111) [1,2,4,8,16,32,64,128,256,512,1024]))
(is  (= (getArrayFromPowersOfTwo 0) []))
(is  (= (getArrayFromPowersOfTwo 5) [1,2,4]))

;test scramble
(is (arePermutations (scramble "hello") "hello"))
(is (arePermutations (scramble "aaaab") "aaaab"))
(is (arePermutations (scramble "testing") "testing"))
(is (arePermutations (scramble "string") "string"))
(is (arePermutations (scramble "wutup") "wutup"))

;test stripVowels
(is  (= (stripVowels "") ""))
(is  (= (stripVowels "ouT") "T"))
(is  (= (stripVowels "hello world") "hll wrld"))
(is  (= (stripVowels "aEIoUou") ""))
(is  (= (stripVowels "strip_VOWELS") "strp_VWLS"))


;test stutter
(is  (= (stutter [1, 1]) [1, 1, 1, 1]))
(is  (= (stutter [1, 2, 3, 4]) [1, 1, 2, 2, 3, 3, 4, 4]))
(is  (= (stutter [1, [2, 3], 'a']) [1, 1, [2, 3], [2, 3],  'a', 'a']))
(is  (= (stutter []) []))
(is  (= (stutter [nil]) [nil, nil]))
(is  (= (stutter [1, 'a', nil, true]) [1, 1, 'a', 'a', nil, nil, true, true]))

