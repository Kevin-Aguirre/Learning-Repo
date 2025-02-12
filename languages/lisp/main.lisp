(defun countElements (aList) 
	(cond (null aList) 
		0 
		(T 
			(+ (countElements (cdr aList)) 1)
		)
)

()
