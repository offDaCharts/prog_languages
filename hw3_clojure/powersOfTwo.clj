;;;;Generates power of 2 up to a limit
(defn powersOfTwo [limit callback]
	(loop [result 1]
		(when (<= result limit)
			(callback result)
			(recur (* 2 result))))
)