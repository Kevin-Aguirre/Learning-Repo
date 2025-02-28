-- some exercises from class 
-- err was that 'n' was 'N' and a and xs declaratios weren't on the same line 

n = a `div` length xs
    where
        a = 10
        xs = [1,2,3,4,5]

-- an implementaiton of last 
last1 lists = head (reverse lists)
last2 lists = lists !! ((length lists) - 1)

-- an implementation of init (removes last element of a list)
foo1 lists = take ((length lists) - 1) lists
foo2 lists = reverse(drop 1(reverse lists)) -- this is so silly 

main :: IO()
main = do 
    let arr = [1, 2, 3, 4]
    print (last1 arr)
    putStrLn ""

    print (last2 arr)
    putStrLn ""

    print (foo1 arr)
    putStrLn ""

    print (foo2 arr)
    putStrLn ""
