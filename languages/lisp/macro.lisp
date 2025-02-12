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

(defmacro validate (lst)
	`(progn 
		; flag used to check if entire fn definition is valid
		(let ((isvalid t))
		
		; checking to see if we get a list 
		(if (not (listp ,lst)) 
			(progn
				(format t "Function definition is not a list.~%")
				(setq isvalid nil)
			)

		)

		; checking if function def has >= length 4 ('defun', fn_name, param_list, fn_logic...)
		(if
			(not (= (length ,lst) 4))
			(progn
				(format t "Function definition does not have length of at least 4.~%")
				(setq isvalid nil)
			)
		)

		; validating defun
		(if
			(not (eq (car ,lst) 'defun))
			(progn
				(format t "The function definition does not start with 'defun' ~A~%" (car ,lst))
				(setq isvalid nil)
			)
			
		)

		; checking to see if the name is an atom
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

		(print-res isvalid)
		)
	)
)


(validate '(defun FOO (x y z) a))

