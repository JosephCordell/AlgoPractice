# The notorious Captain Schneider has given you a very straightforward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

# Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.
import re

def nothing_special(st):
    if type(st) != str:
        return "Not a string!"
    st = re.sub('[^A-Za-z0-9\s]+', '', st)
    return st

strang = "%^Take le$ft ##quadr&a&nt"
print(nothing_special(strang))