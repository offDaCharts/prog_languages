;;function to interleave 2 arrays
(defn interleaves [x y]
	(def base (interleave x y))
	(def shorter (quot (count base) 2))
	(concat base (concat (subvec x shorter) (subvec y shorter)))
)