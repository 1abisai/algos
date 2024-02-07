import math
# /* 
# Recursive Sigma

# Input: integer
# Output: sum of integers from 1 to Input integer
# */

num1 = 5
expected1 = 15
# // Explanation: (1+2+3+4+5)

num2 = 2.5
expected2 = 3
# // Explanation: (1+2)

num3 = -1
expected3 = 0

num4 = 7
expected4 = 28

# /**
#  * Recursively sum the given int and every previous positive int.
#  * - Time: O(?).
#  * - Space: O(?).
#  * @param {number} num
#  * @returns {number}
#  */
count = 0
sum = 0
def recursiveSigma(num):
    num = math.floor(num)
    if(num <= 0):
        return 0
    
    else:
        return num + recursiveSigma(num-1)
    # count++
    # sum += count 
    # console.log(sum)
    # return recursiveSigma(num)
    


print(recursiveSigma(num1))

print(recursiveSigma(num2))

print(recursiveSigma(num3))

print(recursiveSigma(num4))