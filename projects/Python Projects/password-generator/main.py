from random import choice 

lower_letters = [chr(i) for i in range(ord('a'), ord('z')+1)]
upper_letters = [chr(i) for i in range(ord('A'), ord('Z')+1)]
characters = ",./<>?;:'][}{\"-=_+!@#$%^&*()`~"
password_length = int(input("How Long Would you like your password to be?: "))
tokens = [lower_letters, upper_letters, characters]
generated_password = ''.join([choice(choice(tokens)) for _ in range(password_length)])

print(f"Your generated password is: {generated_password}")