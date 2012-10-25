;;Accepts a string and removes all vowels from it
(defn stripVowels [str]
	(clojure.string/replace str #"[aeiouAEIOU]" "")
)