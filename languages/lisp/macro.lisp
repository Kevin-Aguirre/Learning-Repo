#!/usr/bin/sbcl --script

; function to see if we have repeated characetrs in parameter list
(defun has-repeats (lst)
	(not (= (length lst) (length (remove-duplicates lst))))
)

; function to print final result based on flag
(defun print-res (flag)
	(if 
		flag
		(format t "Is Function Definition valid?: true~%")
		(format t "Is Function Definition valid?: false~%")
	)
)

; function to see if every member of parameter list is x, y, or z
(defun allxyz (lst)
	(every (lambda (elem) (member elem '(x y z))) lst)
)

(defmacro validate (lst)
	`(progn 
		(let ((isvalid t))	
			(format t "-----START CHECK-----~%")
			(format t "Currently Validating: ~A~%" ,lst)
			; checking to see if we get a list 
			(if (not (listp ,lst)) 
				(progn
					(format t "Function definition is not a list.~%")
					(setq isvalid nil)
				)

			)

			; here we check if function definiition is valid because if it is, 
			; then we know that we were given a list and we can perform further checks safely 
			(if 
				isvalid
				(progn
					; checking if function def has >= length 4 ('defun', fn_name, param_list, fn_logic...)
					(if
						(< (length ,lst) 4)
						(progn
							(format t "Function definition does not have length of at least 4.~%")
							(setq isvalid nil)
						)
					)

					; validating defun keyword
					(if
						(not (eq (car ,lst) 'defun))
						(progn
							(format t "The function definition does not start with 'defun' ~A~%" (car ,lst))
							(setq isvalid nil)
						)
					)

					(if
						(not (listp (car (cdr (cdr ,lst)))))
						(progn
							(format t "Argument 3 is not of type list.~%")
							(setq isvalid nil)
						)
					)
					

				)

			)

			; here we perform another check because if any of the previous checks failed there is no point in continuing.
			(if 
				isvalid
				(progn
					(format t "Validating Function Name...~%")
					(format t "~A: " (car (cdr ,lst)))
					(if
						(not (every #'alpha-char-p (symbol-name (car (cdr ,lst)))))
						(progn
							(setq isvalid nil)
							(format t "invalid")
						)
						
						(format t "valid")
					)

					; checking to see if the parameters are x, y, or z
					(format t "~%Validating Parameters...~%")
					(dolist (item (car (cdr (cdr ,lst)))) 
						(progn
							(format t "~A: " item)
							(if
								(member item '(x y z))
								(format t "valid~%")
								(progn
									(format t "invalid~%")
									(setq isvalid nil)
								)
							)
						)
					)
					

					; checking to see if paramter list is unique 
					(format t "Checking if parameter list has unique values...")
					(if
						(has-repeats (car (cdr (cdr ,lst))))
						(progn
							(format t "invalid~%")
							(setq isvalid nil)
						)
						
						(format t "valid~%")
					)
					
				)

			)

			(print-res isvalid)
			(format t "-----END CHECK-----~%~%")
		)
	)
)


(validate '(defun multiply (x y z) (* x y z)))
(validate '(multiply (x y z) (* x y z)))
(validate '(defun add3Nums (x y z) (+ x y z)))
(validate '(defun doubleNum (num) (* num 2)))

