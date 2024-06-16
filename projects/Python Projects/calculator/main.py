#calculator function 
def main():
    print("Welcome to the Calculator!")
    operation = input(f"What would you like to do? (+, -, *, /, q):\t")
    first_turn = True
    new_nums = True
    while operation != 'q':
        if first_turn:
            num1 = float(input("Enter your first number: "))
            num2 = float(input("Enter your second number: "))
        elif new_nums:
            operation = input(f"What would you like to do? (+, -, *, /, q):\t")
            if operation == "q":
                break
            num1 = float(input("Enter your first number: "))
            num2 = float(input("Enter your second number: "))
        else:
            num1 = result
            operation = input(f"What would you like to do? (+, -, *, /, q):\t")
            if operation == "q":
                break
            num2 = float(input("Enter your second number: "))


        first_turn = False

        if operation == "+":
            result = num1 + num2
            operation_str = "plus"
        elif operation == "-":
            result = num1 - num2
            operation_str = "minus"
        elif operation == "*":
            result = num1 * num2
            operation_str = "times"
        elif operation == "/":
            try:
                result = num1 / num2
                operation_str = "divided by"
            except:
                print("You cannot Divide by Zero.")
        else:
            break

        print(f"{num1} {operation_str} {num2} equals {result}")

        save_result = str(input("Would you like to save the result? (y/n):\t"))
        if save_result == "y":
            new_nums = False
        else:
            new_nums = True

    print("Thank you for using the calculator. ")
    

main()