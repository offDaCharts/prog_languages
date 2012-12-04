(defn maxTailRecur [arr max index]
    (if (= (count arr) index)
	    max
	    (maxTailRecur arr (if (> (nth arr index) max) (nth arr index) max) (+ index 1))
	)
)

(defn getMax [arr]
	(maxTailRecur arr (nth arr 0) 1)
)

(println (getMax [1 2 43 24 56 76 8]))