Requirements -
Digital audio workstation plugins. Musicians apply the filters to change how the tracks sound.
Band pass filter.

input - soundwave(array of frequencies. typeof = integer)
output - soundwave(array of frequencies of same length. typeof = integer)

default lower and upper limit = 40 and 1000

INPUT: [60,10,45,60,1500]
OUTPUT: [60,40,45,60,1000]

example tests:

test case1: returns the input array
INPUT: [60]
OUTPUT: [60]

case 2: [60,40] returns array with multiple entries
INPUT : [60,40]
OUTPUT : [60,40]

case 3: returns array with modified lower range
INPUT: [60,50,20]
OUTPUT: [60,50,40]

case 4: returns array with modified upper range
INPUT: [60,50,1200]
OUTPUT: [60,50,1000]

case 4: returns array with modified lower and upper range
INPUT: [60,20,1200]
OUTPUT: [60,40,1000]
