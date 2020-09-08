Create a function called rollDie() which returns a random number 1-6. Then make a function which rolls two dice and adds together the sum.

Step Two
Simulate rolling 1000 pairs of dice!
For each possible roll (2 through 12), count its frequency. You should use an array to keep track of these counts.

Initialize an array named count by filling it with zeros. Then, whenever the roll of the two dice adds up to, say, a seven, add one to the value in the 7th element of the counts array.

For example if the variable rollOfDice holds the current roll, you could increment the count with code like:
count[rollOfDice] = count[rollOfDice] + 1;

Step Three
After the 1000 rolls are finished, show the final counts in an HTML page.

Here's an example of the kind of output your program might produce:
2: 32
3: 50
4: 76
5: 120
6: 151
7: 161
8: 125
9: 121
10: 89
11: 52
12: 23
