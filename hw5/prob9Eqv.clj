(defn x [lis]
    (if (empty? lis)
	    0
        (if (not (list? (peek lis)))
            (if (= (peek lis) false) 
			    (x (pop lis))
                (+ 1 (x (pop lis))))
            (+ (x (peek lis)) (x (pop lis))))
    )
)

(println (x (list (list 1 2) 3 4 5 false false false)))