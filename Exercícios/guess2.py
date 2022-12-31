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
        
        


def computer_guess(x):
    low = 1
    high = x
    feedback = ''
    while feedback != 'c' :
        if low != high :
            guess = random.randint(low,high)
        if high != low :
            guess = random.randint(low,high)
        feedback = input(f'is {guess} too hight (H), too low(L) , or correct (C)??').lower() 
        if feedback =='h':
            high = guess - 1 
        elif feedback == 'l':
            low = guess + 1
    print (f'computer guessed the number , {guess}, correctly')

computer_guess(1000)
