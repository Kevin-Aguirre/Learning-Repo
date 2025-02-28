#!/usr/bin/sbcl --script

(defun has-repeats (lst)
	(not (= (length lst) (length (remove-duplicates lst))))
)

(defun print-res (flag)
	(if 
		flag
		(format t "Is Function Definition valid?: true~%")
		(format t "Is Function Definition valid?: false~%")
	)
)

(defun allxyz (lst)
	(every (lambda (elem) (member elem '(x y z))) lst)
)

(defmacro validate (param-lst)
	(let ((lst (gensym)))
		`(let ((,lst ,param-lst))
			(progn 
				(let ((isvalid t))	
				(format t "-----START CHECK-----~%")
				; checking to see if we get a list 
				(if (not (listp ,lst)) 
					(progn
						(format t "Function definition is not a list.~%")
						(setf isvalid nil)
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
								(setf isvalid nil)
							)
						)

						; validating defun
						(if
							(not (eq (car ,lst) 'defun))
							(progn
								(format t "The function definition does not start with 'defun' ~A~%" (car ,lst))
								(setf isvalid nil)
							)
						)

						(if
							(not (listp (car (cdr (cdr ,lst)))))
							(progn
								(format t "Argument 3 is not of type list.~%")
								(setf isvalid nil)
							)
						)
						

					)

				)

				; here we perform another check because if any of the previous checks faild there is no point in continuing checks.
				(if 
					isvalid
					(progn
						(format t "Validating Function Name...~%")
						(format t "~A: " (car (cdr ,lst)))
						(if
							(not (every #'alpha-char-p (symbol-name (car (cdr ,lst)))))
							(progn
								(setf isvalid nil)
								(format t "invalid")
							)
							
							(format t "valid")
						)

						; checking to see if the parameters are x, y, or z
						(format t "~%Validating Parameters...~%")
						(if
							(listp (car (cdr (cdr ,lst))))
							(dolist (item (car (cdr (cdr ,lst)))) 
								(progn
									(format t "~A: " item)
									(if
										(member item '(x y z))
										(format t "valid~%")
										(progn
											(format t "invalid~%")
											(setf isvalid nil)
										)
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
								(setf isvalid nil)
							)
							
							(format t "valid~%")
						)
						
					)

				)

				(print-res isvalid)
				(format t "-----END CHECK-----~%~%")
			))

		)
	)
)


(validate '(defun multiply (x y z) (* x y z)))
(validate '(multiply (x y z) (* x y z)))
(validate '(defun add3Nums (x y z) (+ x y z)))
(validate '(defun doubleNum (num) (* num 2))))
(validate '(defun getPI 3.1415))

