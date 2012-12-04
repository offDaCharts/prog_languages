(defn x [lis]
    (reduce + (map (fn [x] (if (false? x) 0 1)) (flatten lis)))
)

(println (x (list (list 1 2) 3 4 5 false false false 6 7)))