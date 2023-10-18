# Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

# The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

# Examples:
# "String" => "StRiNg"
# "Weird string case" => "WeIrD StRiNg CaSe"

def to_weird_case(words):
    array = words.split()
    answer = ''
    for x in array:
        for y,j in enumerate(x):
            print(y, j)
            if y%2 != 0:
                answer += j.lower()
            else:
                answer += j.upper()
        answer += ' '
        print(answer)
    return answer.strip()

word = 'This problem sucks'
to_weird_case(word)