import random
from words import words_list


def choose_word():
    word = random.choice(words_list)
    return word

def play(word):
    print(f"Beginning Hangman Game...")
    word_completion = ["_"] * len(word)
    guessed = False
    tries = 0
    guessed_letters = []
    guessed_words = []

    print("-" * 10, "Welcome to Hangman", "-" * 10)
    print(hangman_figure(tries))
    print(f"Word:\t {''.join(word_completion)}")

    while (not guessed) and (tries != 6):
        guess = str(input("Guess a letter or a word:\t"))
        if (guess == word):
            print(f" You guessed the word!")
            word_completion = word
            guessed_words.append(guess)
            print(hangman_figure(tries))

        elif (guess in word) and (len(guess) == 1):
            print(f"Congrats! That letter is in the word!")
            for i in range(len(word)):
                if word[i] == guess:
                    word_completion[i] = guess

            guessed_letters.append(guess)
            print(hangman_figure(tries))
            print(f"Word:\t {''.join(word_completion)}")

        else: #guess not in word
            if len(guess) == 1:
                print(f"Sorry, {guess} is not in the word. ")
                guessed_letters.append(guess)
                tries += 1
                print(hangman_figure(tries))
                print(f"Word:\t {''.join(word_completion)}")

            else:
                print(f"Sorry, {word} is incorrect. ")
                guessed_words.append(guess)
                tries += 1
                print(hangman_figure(tries))
                print(f"Word:\t {''.join(word_completion)}")

        if tries == 6:

            print(f"You Lose.")
            print(f"The word was: {word}")
            print(f"Your guessed letters: {guessed_letters}")
            print(f"Your guessed words: {guessed_words}")
            break

        if "_" not in word_completion:

            guessed = True
            print(f"Congratulations! You win!")
            print(f"Your guessed letters: {guessed_letters}")
            print(f"Your guessed words: {guessed_words}")
            break


def hangman_figure(failed_attempts):
    hangmen = ['''
      +---+
      |   |
          |
          |
          |
          |
    =========''', '''
      +---+
      |   |
      O   |
          |
          |
          |
    =========''', '''
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========''', '''
      +---+
      |   |
      O   |
     /|   |
          |
          |
    =========''', '''
      +---+
      |   |
      O   |
     /|\  |
          |
          |
    =========''', '''
      +---+
      |   |
      O   |
     /|\  |
     /    |
          |
    =========''', '''
      +---+
      |   |
      O   |
     /|\  |
     / \  |
          |
    =========''']

    return hangmen[failed_attempts]

def main():
    word = choose_word()
    user_play_game = str(input("Would you like to play hangman? (y/n):\t")).lower()
    while user_play_game == "y":
        play(word)
        word = choose_word()
        user_play_game = str(input("Would you like to play hangman? (y/n):\t")).lower()

main()