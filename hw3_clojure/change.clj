;;Function to make chnage of amount of cents
(defn change [cents]
	(with-local-vars [amt cents, arr []]
		(doseq [x [25,10,5,1]]
			(var-set arr (concat @arr [(quot @amt x)]))
			(var-set amt (mod @amt x)))
		@arr))