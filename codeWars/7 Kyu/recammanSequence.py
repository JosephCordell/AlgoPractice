recaman = []
digit = 0
for x in range(0,10):
    
    if digit-x > 0 and digit not in recaman:
        digit -= x
        recaman.append(digit)
    else:
        digit += x
        recaman.append(digit)

    print(digit)