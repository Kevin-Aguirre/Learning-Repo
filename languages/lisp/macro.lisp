#!/usr/bin/sbcl --script

(defun allxyz (lst)
	(every (lambda (elem) (member elem '(x y z))) lst)
)

(defmacro countElems (lst) 
	`(if (null ,lst) 0 (+ (countElems (cdr ,lst)) 1))
)

(defmacro validate (lst)
	`(cond 
		; checking to see if we get a list 
		(
			(not (listp ,lst)) 
			(write-line "Expected a list."))

		; checking if function def has >= length 4 ('defun', fn_name, param_list, fn_logic...)
		(
			(not (>= (countElems ,lst) 4))
			(format t "does not have length of at least 4~A~%" (car ,lst))
		)

		; checking to see if we are staring off with 'defun'
		(
			(not (eq (car ,lst) 'defun))
			(format t "does not start with defun ~A~%" (car ,lst))
		)

		; checking to see if the name is an atom
		(
			(not (every #'alpha-char-p (symbol-name (car (cdr ,lst)))))
			(format t "fn name is not alphabetical ~A~%" (car (cdr ,lst)))
		)

		; checking to see if the parameters are x, y, or z
		(
			(not (and 
				(<= (countElems (car (cdr (cdr ,lst)))) 3) 
				(allxyz (car (cdr (cdr ,lst)))))
			)
			(format t "parameter list is not comprised of x, y, or z~A~%" (car (cdr (cdr ,lst))))
		)
				
		;(t (progn 
		;	(format t "current list ~A~%" ,lst)
		;	(format t "car list ~A~%" (car ,lst))
		;	(format t "cdr list ~A~%" (cdr ,lst))
		;	(format t "current list ~A~%" ,lst)
		;))

			
	
		
		(t (write-line "looks okay"))

	)
)


(validate '(defun FOO () x))

