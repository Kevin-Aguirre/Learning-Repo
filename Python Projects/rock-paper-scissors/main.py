from random import choice

def get_winner(player_choice, computer_choice):
    if player_choice == computer_choice:
        return "Tie"
    arr = [player_choice, computer_choice]
    if ("rock" in arr) and ("paper" in arr):
        ind = arr.index("paper")
    elif ("paper" in arr) and ("scissors" in arr):
        ind = arr.index("scissors")
    else:# ("rock" in arr) and ("scissors" in arr):
        ind = arr.index("rock")
    
    if ind:
        return "Computer"
    return "Player"

playing = str(input("Would you like to play RockPaperScissors? (y/n):\t"))

while playing == "y":
    player_choice = input("Pick your choce:\n\t- Rock\n\t- Paper\n\t- Scissors\n:\t").lower()
    choices = ["rock", "paper", "scissors"]
    computer_choice = choice(choices)
    
    winner = get_winner(player_choice, computer_choice)
    
    print(f"\nYou chose {player_choice}")
    print(f"Computer chose {computer_choice}")
    
    if winner != "Tie":
        print(f"The winner is {winner}!!!")
    else:
        print(f"It's a Tie!!!")
    
    playing = str(input("Would you like to play RockPaperScissors? (y/n):\t"))