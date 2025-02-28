-- compile with <ghc -o functions functions.hs> then execute functions
-- or ghci for haskell shell
-- OR execute <ghci functions.hs>, this loads the standard library and user-defiend functions into the shell 
-- if you make changes to script you can reload by executing <:reload> in haskell shell 

-- <x `function` y> is synactic sugar for <function x y>
-- by convention, argumesnts that are of type list end in an 's'


{-

wheh finally google multi line comment syntax 

other ghci commands: 

:load <name>    loads <name> script
:relaod         reloads current script 
:edit <name>    edits script name
:edit           ediyd current script
:type <expr>    shows type of expression
:?              shows all commands 
:quit           quits shell 

-}

double x = x + x
quadruple x = double (double x)
factorial n = product [1..n]
avg ns = sum ns `div` length ns 

main :: IO()
main = do 
    print 2
    print (double 2)
    print (double (double 2))
    print (double (double (double 2)))
    putStrLn ""

    print 3 
    print (quadruple 3)    
    putStrLn ""

    print 6
    print( factorial 6)
    putStrLn ""

    print (avg [1, 2, 3, 4])
    putStrLn ""

