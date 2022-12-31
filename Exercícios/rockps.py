import random
def play () :
    user = input("what is your choice ? 'r'for rock ,'p' for paper ,'s' for scisors")
    computer = random.choice(['r','p','s'])
    if user == computer :
        return 'It is a tie'
    if is_win (user,computer) :
        return f'You won!{computer}'
        
    
    return f' You lost :({computer}'
    


def is_win(player,oponent) :
    if (player == 'r' and oponent =='s') or (player == 's' and oponent == 'p')\
         or (player == 'p' and oponent == 'r') :
         return True
print(play())
