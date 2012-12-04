(defn myFlatten [lis]
    (if (and (not (empty? lis)) (> (count lis) 1))
        (if (list? (nth lis 1))
	        (lazy-cat (myFlatten (nth lis 1)) (myFlatten (pop lis)))
            (lazy-cat (list (nth lis 1)) (myFlatten (pop lis)))
        )
	)
)

(println (take 5 (myFlatten (list 1 2 (list 3 4 (list 5 6)) 7 (list 2 (list 3 4))))))