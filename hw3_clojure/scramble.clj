;;Function that accepts a string and returns a random permutation of is
(defn scramble [str]
	(clojure.string/join (shuffle (clojure.string/split str #"")))
)