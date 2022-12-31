import random
def guess (x) :
    random_number= random.randint(1,x)
    guess = 0
    while guess != random_number :
        guess = int(input(f"guess a number betwen 1 and {x}: ")) 
        if guess < random_number :
            print("too low")
        elif guess > random_number :
            print ("too high")
    print(f'u guessed right {random_number} sss')
        
        
guess(2)
