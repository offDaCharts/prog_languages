;;Generates power of a given base up to a limit
(defn powers [base limit callback]
	(loop [result 1]
		(when (<= result limit)
			(callback result)
			(recur (* base result))))
)