;;Prints prefixes of a given string starting with empty string up to the full string
(def inputStr (first *command-line-args*))
(def length (count inputStr))
(loop [x 0]
	(when (<= x length)
		(println (subs inputStr 0 x))
		(recur (+ x 1)))
)