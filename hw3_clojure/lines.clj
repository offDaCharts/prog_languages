;;counts the number of non commented, non white space lines 
;;note: a line with white space and then a # is considered commented
(println (reduce + (map (fn [s] 
	(if (clojure.string/blank? s) 0 
		(if (= "#" (subs (clojure.string/trim s) 0 1)) 0 1)))
(clojure.string/split (slurp (first *command-line-args*)) #"\n"))))