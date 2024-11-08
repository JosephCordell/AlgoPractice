def fakeBin(str):
    answer = ''
    for s in str:
        if int(s) > 5:
            answer += '1'
        else:
            answer+= '0'
    return answer

str = '45385593107843568'

print(fakeBin(str))