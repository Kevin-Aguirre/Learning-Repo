-- compile with <ghc -o array-ops array-ops.hs> then execute array-ops
-- or ghci for haskell shell


main :: IO()

main = do 
    let arr = [1,2,3,4,4,5,6]
    print (head arr)
    print arr
    putStrLn ""

    print (tail arr)
    print arr
    putStrLn ""

    print(arr !! 3)
    print(arr)
    putStrLn ""

    print (take 4 arr)
    print(arr)
    putStrLn ""

    print (drop 3 arr)
    print(arr)
    putStrLn ""

    print (length arr)
    print(arr)
    putStrLn ""

    print (sum arr)
    print(arr)
    putStrLn ""

    print (product arr)
    print(arr)
    putStrLn ""

    print([1, 2, 3] ++ [6, 7, 8])
    putStrLn ""

    print(reverse arr)
    putStrLn ""
    