
const tasks =
  [{
    "href": "./task1.html",
    "text": "Print Hello World",
    "explain": "Printing 'Hello World' is a basic program that demonstrates the fundamental concept of output in programming. It’s often the first program written by those learning a new programming language.",
    "example": `print("Hello World")`
  },
  {
    "href": "./task2.html",
    "text": "Add Two Numbers",
    "explain": "This task involves adding two numbers together and displaying the result. It introduces basic arithmetic operations in programming.",
    "example": `a = 5\nb = 10\nsum = a + b\nprint(sum)  # Output: 15`
  },
  {
    "href": "./task3.html",
    "text": "Find the Square Root",
    "explain": "This task demonstrates how to calculate the square root of a number. The square root of a number is a value that, when multiplied by itself, gives the original number.",
    "example": `import math\nnum = 16\nresult = math.sqrt(num)\nprint(result)  # Output: 4.0`
  },
  {
    "href": "./task4.html",
    "text": "Calculate the Area of a Triangle",
    "explain": "This task involves calculating the area of a triangle using the formula: Area = 1/2 * base * height.",
    "example": `base = 5\nheight = 10\narea = 0.5 * base * height\nprint(area)  # Output: 25`
  },
  {
    "href": "./task5.html",
    "text": "Swap Two Variables",
    "explain": "Swapping two variables means exchanging their values. This operation is fundamental in many algorithms and often used in sorting operations.",
    "example": `a = 10\nb = 20\na, b = b, a\nprint(a, b)  # Output: 20 10`
  },
  {
    "href": "./task6.html",
    "text": "Solve Quadratic Equation",
    "explain": "A quadratic equation is a second-degree polynomial equation in the form ax² + bx + c = 0. The solutions are found using the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a.",
    "example": `import math\na = 1\nb = -3\nc = 2\ndiscriminant = b**2 - 4*a*c\nif discriminant > 0:\n    root1 = (-b + math.sqrt(discriminant)) / (2*a)\n    root2 = (-b - math.sqrt(discriminant)) / (2*a)\n    print(root1, root2)  # Output: 2.0 1.0`
  },
  {
    "href": "./task7.html",
    "text": "Convert Kilometers to Miles",
    "explain": "This task converts a distance from kilometers to miles. The conversion factor is: 1 kilometer = 0.621371 miles.",
    "example": `kilometers = 10\nmiles = kilometers * 0.621371\nprint(miles)  # Output: 6.21371`
  },
  {
    "href": "./task8.html",
    "text": "Convert Celsius to Fahrenheit",
    "explain": "This task involves converting temperature from Celsius to Fahrenheit using the formula: F = (9/5) * C + 32.",
    "example": `celsius = 25\nfahrenheit = (9/5) * celsius + 32\nprint(fahrenheit)  # Output: 77.0`
  },
  {
    "href": "./task9.html",
    "text": "Generate a Random Number",
    "explain": "Generating a random number is useful in simulations, games, and randomness-based logic. Python has a built-in module called 'random' to generate random numbers.",
    "example": `import random\nrand_num = random.randint(1, 100)\nprint(rand_num)  # Output: A random number between 1 and 100`
  },
  {
    "href": "./task10.html",
    "text": "Check if a Number is Positive, Negative, or Zero",
    "explain": "This task involves checking the value of a number and determining whether it is positive, negative, or zero.",
    "example": `num = -5\nif num > 0:\n    print("Positive")\nelif num < 0:\n    print("Negative")\nelse:\n    print("Zero")  # Output: Negative`
  },
  {
    "href": "./task11.html",
    "text": "Check if a Number is Odd or Even",
    "explain": "This task checks if a number is odd or even. A number is even if it is divisible by 2, and odd otherwise.",
    "example": `num = 7\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")  # Output: Odd`
  },
  {
    "href": "./task12.html",
    "text": "Find the Largest Among Three Numbers",
    "explain": "This task involves finding the largest number out of three given numbers. The comparison can be made using conditional statements.",
    "example": `a = 3\nb = 5\nc = 2\nlargest = max(a, b, c)\nprint(largest)  # Output: 5`
  },
  {
    "href": "./task13.html",
    "text": "Check Prime Number",
    "explain": "A prime number is a number that has only two distinct positive divisors: 1 and itself. This task checks if a given number is prime.",
    "example": `num = 7\nif num > 1:\n    for i in range(2, num):\n        if num % i == 0:\n            print("Not Prime")\n            break\n    else:\n        print("Prime")  # Output: Prime`
  },
  {
    "href": "./task14.html",
    "text": "Print All Prime Numbers in an Interval",
    "explain": "This task prints all the prime numbers within a given interval by checking each number for primality.",
    "example": `start = 10\nend = 30\nfor num in range(start, end + 1):\n    if num > 1:\n        for i in range(2, num):\n            if num % i == 0:\n                break\n        else:\n            print(num)  # Output: 11 13 17 19 23 29`
  },
  {
    "href": "./task15.html",
    "text": "Find the Factorial of a Number",
    "explain": "The factorial of a number n (denoted as n!) is the product of all positive integers less than or equal to n. This task calculates the factorial of a given number.",
    "example": `num = 5\nfactorial = 1\nfor i in range(1, num + 1):\n    factorial *= i\nprint(factorial)  # Output: 120`
  },
  {
    "href": "./task16.html",
    "text": "Display the Multiplication Table",
    "explain": "This task prints the multiplication table for a given number, which helps in understanding how multiplication works.",
    "example": `num = 7\nfor i in range(1, 11):\n    print(f'{num} x {i} = {num * i}')  # Output: Prints multiplication table of 7`
  },
  {
    "href": "./task17.html",
    "text": "Print the Fibonacci Sequence",
    "explain": "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. This task prints the first N terms of the Fibonacci sequence.",
    "example": `terms = 10\nfib = [0, 1]\nfor i in range(2, terms):\n    fib.append(fib[i-1] + fib[i-2])\nprint(fib)  # Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`
  },
  {
    "href": "./task18.html",
    "text": "Check Armstrong Number",
    "explain": "An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits. This task checks if a number is an Armstrong number.",
    "example": `num = 153\nsum = 0\ntemp = num\nwhile temp > 0:\n    digit = temp % 10\n    sum += digit ** 3\n    temp //= 10\nif num == sum:\n    print("Armstrong Number")  # Output: Armstrong Number`
  },
  {
    "href": "./task19.html",
    "text": "Find Armstrong Number in an Interval",
    "explain": "This task finds all Armstrong numbers in a given interval. It checks each number in the interval to see if it satisfies the Armstrong condition.",
    "example": `start = 100\nend = 999\nfor num in range(start, end + 1):\n    sum = 0\n    temp = num\n    while temp > 0:\n        digit = temp % 10\n        sum += digit ** 3\n        temp //= 10\n    if num == sum:\n        print(num)  # Output: 153 370 371 407`
  },
  {
    "href": "./task20.html",
    "text": "Make a Simple Calculator",
    "explain": "A simple calculator performs basic arithmetic operations like addition, subtraction, multiplication, and division based on user input.",
    "example": `a = 10\nb = 5\noperator = '+'\nif operator == '+':\n    result = a + b\nelif operator == '-':\n    result = a - b\nelif operator == '*':\n    result = a * b\nelif operator == '/':\n    result = a / b\nprint(result)  # Output: 15`
  },
  {
    "href": "./task21.html",
    "text": "Find the Sum of Natural Numbers",
    "explain": "This task calculates the sum of the first N natural numbers. The formula to calculate this is: Sum = n(n + 1) / 2.",
    "example": `n = 10\nsum = n * (n + 1) // 2\nprint(sum)  # Output: 55`
  },
  {
    "href": "./task22.html",
    "text": "Check if the Numbers Have Same Last Digit",
    "explain": "This task checks whether two numbers end with the same digit. It compares the remainder when each number is divided by 10.",
    "example": `a = 25\nb = 35\nif a % 10 == b % 10:\n    print("Same last digit")\nelse:\n    print("Different last digits")  # Output: Same last digit`
  },
  {
    "href": "./task23.html",
    "text": "Find HCF or GCD",
    "explain": "The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers.",
    "example": `import math\na = 56\nb = 98\nhcf = math.gcd(a, b)\nprint(hcf)  # Output: 14`
  },
  {
    "href": "./task24.html",
    "text": "Find LCM",
    "explain": "The Least Common Multiple (LCM) of two numbers is the smallest number that is a multiple of both numbers.",
    "example": `def lcm(a, b):\n    return abs(a * b) // math.gcd(a, b)\n\nlcm_value = lcm(12, 18)\nprint(lcm_value)  # Output: 36`
  },
  {
    "href": "./task25.html",
    "text": "Find the Factors of a Number",
    "explain": "This task finds all the factors of a given number. A factor is a number that divides another number completely.",
    "example": `num = 28\nfactors = []\nfor i in range(1, num + 1):\n    if num % i == 0:\n        factors.append(i)\nprint(factors)  # Output: [1, 2, 4, 7, 14, 28]`
  },
  {
    "href": "./task26.html",
    "text": "Find Sum of Natural Numbers Using Recursion",
    "explain": "This task demonstrates how to find the sum of the first N natural numbers using recursion, where a function calls itself to solve the problem.",
    "example": `def sum_natural(n):\n    if n == 0:\n        return 0\n    else:\n        return n + sum_natural(n - 1)\n\nprint(sum_natural(5))  # Output: 15`
  },
  {
    "href": "./task27.html",
    "text": "Guess a Random Number",
    "explain": "This task simulates a simple game where the user has to guess a randomly generated number.",
    "example": `import random\nnumber_to_guess = random.randint(1, 10)\nguess = int(input("Guess the number: "))\nif guess == number_to_guess:\n    print("Correct!")\nelse:\n    print("Try again!")`
  },
  {
    "href": "./task28.html",
    "text": "Shuffle Deck of Cards",
    "explain": "This task simulates shuffling a deck of cards. You can represent a deck as a list of cards and shuffle it randomly.",
    "example": `import random\ncards = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH']\nrandom.shuffle(cards)\nprint(cards)`
  },
  {
    "href": "./task29.html",
    "text": "Display Fibonacci Sequence Using Recursion",
    "explain": "This task shows how to display the Fibonacci sequence using recursion, where the function calls itself to generate the next value in the sequence.",
    "example": `def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n\nfor i in range(10):\n    print(fibonacci(i))  # Output: 0 1 1 2 3 5 8 13 21 34`
  },
  {
    "href": "./task30.html",
    "text": "Find Factorial of Number Using Recursion",
    "explain": "This task calculates the factorial of a number using recursion. A factorial is the product of all positive integers up to that number.",
    "example": `def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nprint(factorial(5))  # Output: 120`
  },
  {
    "href": "./task31.html",
    "text": "Convert Decimal to Binary",
    "explain": "This task converts a decimal number (base 10) to its binary representation (base 2). The conversion can be done using built-in Python functions.",
    "example": `decimal = 12\nbinary = bin(decimal)[2:]\nprint(binary)  # Output: '1100'`
  },
  {
    "href": "./task32.html",
    "text": "Find ASCII Value of Character",
    "explain": "This task demonstrates how to get the ASCII value of a character. The ASCII value is an integer representation of a character.",
    "example": `char = 'A'\nascii_value = ord(char)\nprint(ascii_value)  # Output: 65`
  },
  {
    "href": "./task33.html",
    "text": "Check Whether a String is Palindrome or Not",
    "explain": "A palindrome is a word or phrase that reads the same backward as forward. This task checks whether a given string is a palindrome.",
    "example": `s = "madam"\nif s == s[::-1]:\n    print("Palindrome")\nelse:\n    print("Not Palindrome")  # Output: Palindrome`
  },
  {
    "href": "./task34.html",
    "text": "Sort Words in Alphabetical Order",
    "explain": "This task sorts the words of a string in alphabetical order. The string is first split into words, and then sorted using Python’s built-in functions.",
    "example": `s = "banana apple cherry"\nwords = s.split()\nwords.sort()\nprint(" ".join(words))  # Output: apple banana cherry`
  },
  {
    "href": "./task35.html",
    "text": "Replace Characters of a String",
    "explain": "This task demonstrates how to replace characters in a string. The `replace()` method is used to replace one substring with another.",
    "example": `s = "hello"\ns = s.replace("e", "a")\nprint(s)  # Output: hallo`
  },
  {
    "href": "./task36.html",
    "text": "Reverse a String",
    "explain": "This task involves reversing a given string. You can reverse a string in Python using slicing.",
    "example": `s = "hello"\nreversed_s = s[::-1]\nprint(reversed_s)  # Output: olleh`
  },
  {
    "href": "./task37.html",
    "text": "Create Objects in Different Ways",
    "explain": "This task demonstrates creating objects in different ways, like using a constructor or directly assigning values.",
    "example": `# Using constructor\nclass Person:\n    def __init__(self, name):\n        self.name = name\nperson = Person('Alice')\n\n# Using dictionary\nperson_dict = {'name': 'Alice'}`
  },
  {
    "href": "./task38.html",
    "text": "Number of Occurrences of a Character in the String",
    "explain": "This task counts the number of times a character occurs in a string. You can use the `count()` method for this.",
    "example": `s = "hello world"\ncount = s.count("o")\nprint(count)  # Output: 2`
  },
  {
    "href": "./task39.html",
    "text": "Convert the First Letter of a String into UpperCase",
    "explain": "This task converts the first letter of a string to uppercase. The `capitalize()` method can be used.",
    "example": `s = "hello"\ncapitalized = s.capitalize()\nprint(capitalized)  # Output: Hello`
  },
  {
    "href": "./task40.html",
    "text": "Count the Number of Vowels in a String",
    "explain": "This task counts how many vowels (a, e, i, o, u) are in a string.",
    "example": `s = "hello"\nvowels = "aeiou"\ncount = sum(1 for char in s if char in vowels)\nprint(count)  # Output: 2`
  },
  {
    "href": "./task41.html",
    "text": "Remove a Property from an Object",
    "explain": "This task demonstrates how to remove a property from an object using the `delete` operator.",
    "example": `const obj = { name: 'Alice', age: 25 };\ndelete obj.age;\nconsole.log(obj);  // Output: { name: 'Alice' }`
  },
  {
    "href": "./task42.html",
    "text": "String Starts and Ends With Certain Characters",
    "explain": "This task checks if a string starts or ends with specific characters using the `startsWith()` and `endsWith()` methods.",
    "example": `let str = "hello world";\nconsole.log(str.startsWith("hello"));  // Output: true\nconsole.log(str.endsWith("world"));  // Output: true`
  },
  {
    "href": "./task43.html",
    "text": "Check if a Key Exists in an Object",
    "explain": "This task checks if a specified key exists in an object using the `in` operator or `hasOwnProperty()` method.",
    "example": `const obj = { name: 'Alice', age: 25 };\nconsole.log('name' in obj);  // Output: true\nconsole.log(obj.hasOwnProperty('age'));  // Output: true`
  },
  {
    "href": "./task44.html",
    "text": "Clone a JS Object",
    "explain": "This task demonstrates how to clone a JavaScript object. You can do this using methods like `Object.assign()` or the spread operator.",
    "example": `const original = { name: 'Alice', age: 25 };\nconst clone = { ...original };\nconsole.log(clone);  // Output: { name: 'Alice', age: 25 }`
  },
  {
    "href": "./task45.html",
    "text": "Loop Through an Object",
    "explain": "This task demonstrates how to loop through the properties of an object using `for...in` or `Object.keys()`.",
    "example": `const obj = { name: 'Alice', age: 25 };\nfor (let key in obj) {\n    console.log(key, obj[key]);\n}\n// Output: name Alice\n// Output: age 25`
  },
  {
    "href": "./task46.html",
    "text": "Merge Property of Two Objects",
    "explain": "This task shows how to merge properties from two objects using `Object.assign()` or the spread operator.",
    "example": `const obj1 = { name: 'Alice' };\nconst obj2 = { age: 25 };\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged);  // Output: { name: 'Alice', age: 25 }`
  },
  {
    "href": "./task47.html",
    "text": "Count the Number of Keys/Properties in an Object",
    "explain": "This task counts the number of keys or properties in an object using `Object.keys()`.",
    "example": `const obj = { name: 'Alice', age: 25 };\nconsole.log(Object.keys(obj).length);  // Output: 2`
  },
  {
    "href": "./task48.html",
    "text": "Add Key/Value Pair to an Object",
    "explain": "This task demonstrates how to add a new key-value pair to an existing object.",
    "example": `const obj = { name: 'Alice' };\nobj.age = 25;\nconsole.log(obj);  // Output: { name: 'Alice', age: 25 }`
  },
  {
    "href": "./task49.html",
    "text": "Generate a Random Number",
    "explain": "This task generates a random number between a specified range using `Math.random()`.",
    "example": `const randomNumber = Math.floor(Math.random() * 100) + 1;\nconsole.log(randomNumber);  // Output: Random number between 1 and 100`
  },
  {
    "href": "./task50.html",
    "text": "Create Multiline Strings",
    "explain": "This task shows how to create multiline strings using template literals (backticks).",
    "example": `const str = \`This is a multiline\nstring in JavaScript.\`;\nconsole.log(str);  // Output: This is a multiline\nstring in JavaScript.`
  },
  {
    "href": "./task51.html",
    "text": "Format Numbers as Currency Strings",
    "explain": "This task formats numbers as currency strings using the `toLocaleString()` method.",
    "example": `const amount = 123456.789;\nconsole.log(amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));  // Output: $123,456.79`
  },
  {
    "href": "./task52.html",
    "text": "Generate Random String",
    "explain": "This task generates a random string of a specified length using characters from a given set.",
    "example": `const length = 8;\nconst chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\nlet randomString = '';\nfor (let i = 0; i < length; i++) {\n    randomString += chars.charAt(Math.floor(Math.random() * chars.length));\n}\nconsole.log(randomString);`
  },
  {
    "href": "./task53.html",
    "text": "Check if a String Starts With Another String",
    "explain": "This task checks if a string starts with a specific substring using the `startsWith()` method.",
    "example": `const str = "hello world";\nconsole.log(str.startsWith("hello"));  // Output: true`
  },
  {
    "href": "./task54.html",
    "text": "Trim a String",
    "explain": "This task removes whitespace from both ends of a string using the `trim()` method.",
    "example": `const str = "   hello world   ";\nconsole.log(str.trim());  // Output: 'hello world'`
  },
  {
    "href": "./task55.html",
    "text": "Convert Objects to Strings",
    "explain": "This task converts an object to a string using `JSON.stringify()`.",
    "example": `const obj = { name: 'Alice', age: 25 };\nconsole.log(JSON.stringify(obj));  // Output: '{"name":"Alice","age":25}'`
  },
  {
    "href": "./task56.html",
    "text": "Check Whether a String Contains a Substring",
    "explain": "This task checks if a string contains a specified substring using the `includes()` method.",
    "example": `const str = "hello world";\nconsole.log(str.includes("world"));  // Output: true`
  },
  {
    "href": "./task57.html",
    "text": "Compare Two Strings",
    "explain": "This task compares two strings using the `localeCompare()` method or simple comparison.",
    "example": `const str1 = "apple";\nconst str2 = "banana";\nconsole.log(str1.localeCompare(str2));  // Output: -1 (apple is less than banana)`
  },
  {
    "href": "./task58.html",
    "text": "Encode a String to Base64",
    "explain": "This task encodes a string to Base64 format using the `btoa()` method.",
    "example": `const str = "hello";\nconst encodedStr = btoa(str);\nconsole.log(encodedStr);  // Output: 'aGVsbG8='`
  },
  {
    "href": "./task59.html",
    "text": "Replace all Instances of a Character in a String",
    "explain": "This task replaces all instances of a specific character in a string using the `replace()` method with a global regular expression.",
    "example": `const str = "hello world";\nconst newStr = str.replace(/o/g, '0');\nconsole.log(newStr);  // Output: 'hell0 w0rld'`
  },
  {
    "href": "./task60.html",
    "text": "Replace All Line Breaks with",
    "explain": "This task replaces all line breaks in a string with another character or string using the `replace()` method.",
    "example": `const str = "hello\nworld\nhow\nare\nyou";\nconst newStr = str.replace(/\n/g, ' ');\nconsole.log(newStr);  // Output: 'hello world how are you'`
  },
  {
    "href": "./task61.html",
    "text": "Display Date and Time",
    "explain": "This task demonstrates how to display the current date and time using the `Date()` object.",
    "example": `const now = new Date();\nconsole.log(now);  // Output: current date and time`
  },
  {
    "href": "./task62.html",
    "text": "Check Leap Year",
    "explain": "A leap year is a year that has one extra day added to it, making it 366 days long instead of the usual 365 days. This extra day is added to the month of February, which normally has 28 days, but in a leap year, it has 29 days.",
    "example": `const year = 2024;\nconst isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));\nconsole.log(isLeapYear);  // Output: true`
  },
  {
    "href": "./task63.html",
    "text": "Format the Date",
    "explain": "This task demonstrates how to format the current date using `Date` methods like `getFullYear()`, `getMonth()`, and `getDate()`.",
    "example": `const now = new Date();\nconst formattedDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();\nconsole.log(formattedDate);  // Output: '2025-3-5'`
  },
  {
    "href": "./task64.html",
    "text": "Display Current Date",
    "explain": "This task demonstrates how to display the current date using `Date()` object.",
    "example": `const currentDate = new Date();\nconsole.log(currentDate.toDateString());  // Output: current day of the week, month, day, year`
  },
  {
    "href": "./task65.html",
    "text": "Compare The Value of Two Dates",
    "explain": "This task compares two dates to check if one is earlier, later, or equal to the other using `getTime()` method.",
    "example": `const date1 = new Date(2025, 2, 5);\nconst date2 = new Date(2025, 2, 6);\nconsole.log(date1.getTime() < date2.getTime());  // Output: true`
  },
  {
    "href": "./task66.html",
    "text": "Create Countdown Timer",
    "explain": "This task shows how to create a countdown timer that counts down from a specified time using `setInterval()`.",
    "example": `let timeLeft = 10;\nconst countdown = setInterval(() => {\n    if (timeLeft <= 0) {\n        clearInterval(countdown);\n        console.log("Time's up!");\n    } else {\n        console.log(timeLeft);\n        timeLeft--;\n    }\n}, 1000);`
  },
  {
    "href": "./task67.html",
    "text": "Remove Specific Item From an Array",
    "explain": "This task removes a specific item from an array using `splice()` or `filter()` methods.",
    "example": `let arr = [1, 2, 3, 4, 5];\narr.splice(arr.indexOf(3), 1);\nconsole.log(arr);  // Output: [1, 2, 4, 5]`
  },
  {
    "href": "./task68.html",
    "text": "Check if An Array Contains a Specified Value",
    "explain": "This task checks if an array contains a specified value using the `includes()` method.",
    "example": `const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.includes(3));  // Output: true`
  },
  {
    "href": "./task69.html",
    "text": "Insert Item in an Array",
    "explain": "This task demonstrates how to insert an item at a specific index in an array using `splice()`.",
    "example": `const arr = [1, 2, 3, 4, 5];\narr.splice(2, 0, 'newItem');\nconsole.log(arr);  // Output: [1, 2, 'newItem', 3, 4, 5]`
  },
  {
    "href": "./task70.html",
    "text": "Append an Object to An Array",
    "explain": "This task shows how to append an object to an array using `push()`.",
    "example": `const arr = [1, 2, 3];\nconst obj = { name: 'Alice', age: 25 };\narr.push(obj);\nconsole.log(arr);  // Output: [1, 2, 3, { name: 'Alice', age: 25 }]`
  },
  {
    "href": "./task71.html",
    "text": "Check if An Object is An Array",
    "explain": "This task demonstrates how to check if an object is an array using `Array.isArray()`.",
    "example": `const arr = [1, 2, 3];\nconsole.log(Array.isArray(arr));  // Output: true\nconst obj = { name: 'Alice' };\nconsole.log(Array.isArray(obj));  // Output: false`
  },
  {
    "href": "./task72.html",
    "text": "Empty an Array",
    "explain": "This task shows how to empty an array using different methods like setting the length to zero.",
    "example": `let arr = [1, 2, 3];\narr.length = 0;\nconsole.log(arr);  // Output: []`
  },
  {
    "href": "./task73.html",
    "text": "Add Element to Start of an Array",
    "explain": "This task demonstrates how to add an element to the start of an array using `unshift()`.",
    "example": `const arr = [2, 3, 4];\narr.unshift(1);\nconsole.log(arr);  // Output: [1, 2, 3, 4]`
  },
  {
    "href": "./task74.html",
    "text": "Remove Duplicates From Array",
    "explain": "This task demonstrates how to remove duplicates from an array using `Set` or `filter()` method.",
    "example": `const arr = [1, 2, 2, 3, 4, 4];\nconst uniqueArr = [...new Set(arr)];\nconsole.log(uniqueArr);  // Output: [1, 2, 3, 4]`
  },
  {
    "href": "./task75.html",
    "text": "Merge Two Arrays and Remove Duplicate Items",
    "explain": "This task demonstrates how to merge two arrays and remove duplicates using `Set`.",
    "example": `const arr1 = [1, 2, 3];\nconst arr2 = [2, 3, 4];\nconst merged = [...new Set([...arr1, ...arr2])];\nconsole.log(merged);  // Output: [1, 2, 3, 4]`
  },
  {
    "href": "./task76.html",
    "text": "Sort Array of Objects by Property Values",
    "explain": "This task shows how to sort an array of objects by a specific property using `sort()` method.",
    "example": `const arr = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 22 }, { name: 'Charlie', age: 30 }];\narr.sort((a, b) => a.age - b.age);\nconsole.log(arr);  // Output: [{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]`
  },
  {
    "href": "./task77.html",
    "text": "Create Two Dimensional Array",
    "explain": "This task demonstrates how to create and initialize a two-dimensional array in JavaScript.",
    "example": `const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];\nconsole.log(arr);  // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`
  },
  {
    "href": "./task78.html",
    "text": "Extract Given Property Values from Objects as Array",
    "explain": "This task shows how to extract specific property values from an array of objects into a new array.",
    "example": `const arr = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 22 }];\nconst names = arr.map(obj => obj.name);\nconsole.log(names);  // Output: ['Alice', 'Bob']`
  },
  {
    "href": "./task79.html",
    "text": "Compare Elements of Two Arrays",
    "explain": "This task compares the elements of two arrays to find common elements using `filter()` and `includes()`.",
    "example": `const arr1 = [1, 2, 3];\nconst arr2 = [2, 3, 4];\nconst common = arr1.filter(value => arr2.includes(value));\nconsole.log(common);  // Output: [2, 3]`
  },
  {
    "href": "./task80.html",
    "text": "Get Random Item From an Array",
    "explain": "This task demonstrates how to get a random item from an array.",
    "example": `const arr = [1, 2, 3, 4, 5];\nconst randomItem = arr[Math.floor(Math.random() * arr.length)];\nconsole.log(randomItem);  // Output: Random element from array`
  },
  {
    "href": "./task81.html",
    "text": "Get Random Item From an Array",
    "explain": "This task demonstrates how to get a random item from an array using `Math.random()`.",
    "example": `const arr = ['apple', 'banana', 'cherry'];\nconst randomItem = arr[Math.floor(Math.random() * arr.length)];\nconsole.log(randomItem);  // Output: Random fruit from array`
  },
  {
    "href": "./task82.html",
    "text": "Perform Intersection Between Two Arrays",
    "explain": "This task shows how to find common elements between two arrays using `filter()` and `includes()` methods.",
    "example": `const arr1 = [1, 2, 3];\nconst arr2 = [2, 3, 4];\nconst intersection = arr1.filter(value => arr2.includes(value));\nconsole.log(intersection);  // Output: [2, 3]`
  },
  {
    "href": "./task83.html",
    "text": "Split Array into Smaller Chunks",
    "explain": "This task shows how to split an array into smaller chunks using a loop or `slice()` method.",
    "example": `const arr = [1, 2, 3, 4, 5];\nconst chunkSize = 2;\nconst chunks = [];\nfor (let i = 0; i < arr.length; i += chunkSize) {\n    chunks.push(arr.slice(i, i + chunkSize));\n}\nconsole.log(chunks);  // Output: [[1, 2], [3, 4], [5]]`
  },
  {
    "href": "./task84.html",
    "text": "Include a JS file in Another JS file",
    "explain": "This task demonstrates how to include one JavaScript file inside another using `import` or `<script>` tag.",
    "example": `// main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3));  // Output: 5`
  },
  {
    "href": "./task85.html",
    "text": "Get File Extension",
    "explain": "This task shows how to get the file extension from a file name using `split()` method.",
    "example": `const fileName = 'image.jpg';\nconst extension = fileName.split('.').pop();\nconsole.log(extension);  // Output: 'jpg'`
  },
  {
    "href": "./task86.html",
    "text": "Check If A Variable Is undefined or null",
    "explain": "This task demonstrates how to check if a variable is `undefined` or `null` using `typeof` and strict equality.",
    "example": `let value = null;\nconsole.log(value === null);  // Output: true\nlet anotherValue;\nconsole.log(anotherValue === undefined);  // Output: true`
  },
  {
    "href": "./task87.html",
    "text": "Set a Default Parameter Value For a Function",
    "explain": "This task demonstrates how to set a default value for function parameters using default parameter syntax.",
    "example": `function greet(name = 'Guest') {\n    console.log('Hello, ' + name);\n}\ngreet();  // Output: 'Hello, Guest'\ngreet('Alice');  // Output: 'Hello, Alice'`
  },
  {
    "href": "./task88.html",
    "text": "Illustrate Different Set Operations",
    "explain": "This task demonstrates various set operations, such as union, intersection, and difference using `Set`.",
    "example": `const setA = new Set([1, 2, 3]);\nconst setB = new Set([3, 4, 5]);\nconst union = new Set([...setA, ...setB]);\nconst intersection = new Set([...setA].filter(x => setB.has(x)));\nconst difference = new Set([...setA].filter(x => !setB.has(x)));\nconsole.log(union);  // Output: Set { 1, 2, 3, 4, 5 }\nconsole.log(intersection);  // Output: Set { 3 }\nconsole.log(difference);  // Output: Set { 1, 2 }`
  },
  {
    "href": "./task89.html",
    "text": "Generate a Random Number Between Two Numbers",
    "explain": "This task demonstrates how to generate a random number between two given numbers using `Math.random()`.",
    "example": `const randomNum = Math.floor(Math.random() * (10 - 5 + 1)) + 5;\nconsole.log(randomNum);  // Output: Random number between 5 and 10`
  },
  {
    "href": "./task90.html",
    "text": "Get The Current URL",
    "explain": "This task demonstrates how to get the current URL of a page using `window.location.href`.",
    "example": `const currentURL = window.location.href;\nconsole.log(currentURL);  // Output: 'https://example.com'`
  },
  {
    "href": "./task91.html",
    "text": "Validate An Email Address",
    "explain": "This task demonstrates how to validate an email address using a regular expression.",
    "example": `const email = 'test@example.com';\nconst isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);\nconsole.log(isValidEmail);  // Output: true`
  },
  {
    "href": "./task92.html",
    "text": "Check If a Variable is of Function Type",
    "explain": "This task demonstrates how to check if a variable is a function using `typeof` operator.",
    "example": `const fn = function() {};\nconsole.log(typeof fn === 'function');  // Output: true`
  },
  {
    "href": "./task93.html",
    "text": "Work With Constants",
    "explain": "This task shows how to define constants using `const` and their behavior in JavaScript.",
    "example": `const pi = 3.14;\nconsole.log(pi);  // Output: 3.14`
  },
  {
    "href": "./task94.html",
    "text": "Pass Parameter to a setTimeout() Function",
    "explain": "This task demonstrates how to pass a parameter to the `setTimeout()` function using an anonymous function.",
    "example": `setTimeout(function() {\n    console.log('Hello after 2 seconds');\n}, 2000);`
  },
  {
    "href": "./task95.html",
    "text": "Generate a Range of Numbers and Characters",
    "explain": "This task shows how to generate a range of numbers or characters using `for` loop or `String.fromCharCode()`.",
    "example": `const range = [];\nfor (let i = 1; i <= 5; i++) {\n    range.push(i);\n}\nconsole.log(range);  // Output: [1, 2, 3, 4, 5]`
  },
  {
    "href": "./task96.html",
    "text": "Perform Function Overloading",
    "explain": "This task demonstrates how function overloading works in JavaScript using the number of arguments passed.",
    "example": `function sum(a, b) {\n    if (b === undefined) {\n        return a + a;\n    }\n    return a + b;\n}\nconsole.log(sum(2));  // Output: 4\nconsole.log(sum(2, 3));  // Output: 5`
  },
  {
    "href": "./task97.html",
    "text": "Implement a Stack",
    "explain": "This task demonstrates how to implement a stack using an array with `push()` and `pop()` methods.",
    "example": `let stack = [];\nstack.push(1);\nstack.push(2);\nstack.pop();\nconsole.log(stack);  // Output: [1]`
  },
  {
    "href": "./task98.html",
    "text": "Implement a Queue",
    "explain": "This task demonstrates how to implement a queue using an array with `push()` and `shift()` methods.",
    "example": `let queue = [];\nqueue.push(1);\nqueue.push(2);\nqueue.shift();\nconsole.log(queue);  // Output: [2]`
  },
  {
    "href": "./task99.html",
    "text": "Check if a Number is Float or Integer",
    "explain": "This task demonstrates how to check whether a number is a float or integer using `Number.isInteger()` and `parseFloat()`.",
    "example": `const num1 = 10.5;\nconst num2 = 10;\nconsole.log(Number.isInteger(num1));  // Output: false\nconsole.log(Number.isInteger(num2));  // Output: true`
  },
  {
    "href": "./task100.html",
    "text": "Pass a Function as Parameter",
    "explain": "This task demonstrates how to pass a function as a parameter to another function.",
    "example": `function greet(name) {\n    console.log('Hello, ' + name);\n}\nfunction processUser(callback) {\n    const name = 'Alice';\n    callback(name);\n}\nprocessUser(greet);  // Output: 'Hello, Alice'`
  },
  {
    "href": "./task101.html",
    "text": "Get the Dimensions of an Image",
    "explain": "This task demonstrates how to get the width and height of an image using JavaScript.",
    "example": `const img = new Image();\nimg.src = 'image.jpg';\nimg.onload = function() {\n    console.log(img.width);  // Output: image width\n    console.log(img.height);  // Output: image height\n};`
  },
  {
    "href": "./task102.html",
    "text": "Remove All Whitespaces From a Text",
    "explain": "This task demonstrates how to remove all whitespaces from a text using `replace()` method with a regular expression.",
    "example": `const text = ' Hello World! ';\nconst noWhitespace = text.replace(/\s+/g, '');\nconsole.log(noWhitespace);  // Output: 'HelloWorld!'`
  },
  {
    "href": "./task103.html",
    "text": "Write to Console",
    "explain": "This task demonstrates how to write output to the console using `console.log()` method.",
    "example": `const message = 'Hello, JavaScript!';\nconsole.log(message);  // Output: 'Hello, JavaScript!'`
  },
  {
    "href": "./task104.html",
    "text": "Convert Date to Number",
    "explain": "This task demonstrates how to convert a date to a number using `getTime()` method.",
    "example": `const date = new Date();\nconst timestamp = date.getTime();\nconsole.log(timestamp);  // Output: timestamp number representing the date`
  }
  ]

let loc = window.location.pathname.split("/");
let taskPage = loc[loc.length - 1];
const totalTasks = tasks.length;
if (taskPage == "index.html") {
  const indexAssignmentContainerList = document.getElementById("index-assignment-container-list");
  const indexAssignmentContainer = document.createElement("ol");
  indexAssignmentContainer.className = "pt-3 px-5 overflow-scroll h-75";

  tasks.forEach(task => {
    let taskWithUpdatedPath = task.href.replace('./', './assignmentTask/');
    console.log(taskWithUpdatedPath)
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = taskWithUpdatedPath;
    a.textContent = task.text;
    li.appendChild(a);
    indexAssignmentContainer.appendChild(li);

  });
  indexAssignmentContainerList.appendChild(indexAssignmentContainer);

}
else {
  let taskIndex = parseInt(taskPage.match(/\d+/)[0]) - 1;
  const bodyContainer = document.getElementById("bodyContainer");
  const hamburger = document.createElement("div");
  const hamburgerHeading = document.createElement("h2");
  hamburgerHeading.className = "px-5"

  hamburgerHeading.innerHTML = "Tasks";
  hamburger.className = "hambugerThemeLight pt-2 px-3"
  hamburger.append(hamburgerHeading)
  const outerDivMainHeading = document.createElement("div");
  hamburger.id = "hamburger";
  outerDivMainHeading.id = "outerDivMainHeading";
  outerDivMainHeading.className = "d-flex gap-4 opacityHam"


  // bodyContainer.prepend(outerDivMainHeading);
  bodyContainer.prepend(hamburger);

  ///////////////////////////////////////////////////////////////         HEADER         /////////////////////////////////////////////////////////////////////

  // heading top with btn
  const hamburgerOpen = document.createElement("div");
  hamburgerOpen.className = "hamburgerOpen";
  hamburgerOpen.id = "hamburgerOpen";
  hamburgerOpen.innerHTML =
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>`;

  outerDivMainHeading.appendChild(hamburgerOpen);

  const cross = document.createElement("div");
  cross.className = "hamburgerOpen d-none";
  cross.id = "close";
  cross.textContent = "❌"
  cross.style.cursor = "pointer"

  outerDivMainHeading.appendChild(cross)


  const mainHeader = document.createElement("div");
  mainHeader.className = "p-2 d-flex justify-content-between w-100"
  const headingTop = document.createElement("h1");
  headingTop.id = "headingTop"
  headingTop.className = "headingColorLightTheme pb-2  mx-3";
  console.log(taskIndex)
  console.log(tasks[taskIndex].text)
  headingTop.textContent = `${taskIndex + 1} . ${tasks[taskIndex].text}`
  const btnContainer = document.createElement("div");
  btnContainer.className = "preIcon d-flex align-items-center gap-2"

  mainHeader.appendChild(headingTop)
  mainHeader.appendChild(btnContainer)
  outerDivMainHeading.appendChild(mainHeader)


  // btn link prev
  const prevLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const nextLink = document.createElement("a")

  let prevBtn = document.createElement("button");
  prevBtn.id = "prevBtn"

  let prevBtnSpanIcon = document.createElement("span");
  let prevBtnSpanText = document.createElement("span");
  prevBtn.className = "btn btn-borderCustomLightTheme ";
  // prevBtnSpanIcon.innerHTML = "👈🏻";
  prevBtnSpanText.innerHTML = "Back";


  prevBtn.appendChild(prevBtnSpanIcon)
  prevBtn.appendChild(prevBtnSpanText)
  prevLink.appendChild(prevBtn);
  btnContainer.appendChild(prevLink);

  if (taskIndex > 0) {
    console.log(tasks[taskIndex - 1].href)
    prevLink.href = tasks[taskIndex - 1].href;
    prevLink.style.display = "block";
  } else {
    prevLink.style.display = "none";
  }
  // menu btn
  let menuBtn = document.createElement("button");
  menuBtn.id = "menuBtn"
  let menuBtnSpanIcon = document.createElement("span");
  let menuBtnSpanText = document.createElement("span");
  menuBtn.className = "btn btn-borderCustomLightTheme ";
  // menuBtnSpanIcon.innerHTML = "👆";
  menuBtnSpanText.innerHTML = "Menu";

  menuBtn.appendChild(menuBtnSpanIcon)
  menuBtn.appendChild(menuBtnSpanText)
  menuLink.appendChild(menuBtn);
  menuLink.href = "../index.html";
  btnContainer.appendChild(menuLink);

  // next btn
  let nextBtn = document.createElement("button");
  nextBtn.id = "nextBtn"

  let nextBtnSpanIcon = document.createElement("span");
  let nextBtnSpanText = document.createElement("span");
  nextBtn.className = "btn btn-borderCustomLightTheme ";
  nextBtnSpanText.innerHTML = "Next";
  // nextBtnSpanIcon.innerHTML = "👉🏻";

  nextBtn.appendChild(nextBtnSpanText)
  nextBtn.appendChild(nextBtnSpanIcon)
  nextLink.appendChild(nextBtn);
  btnContainer.appendChild(nextLink);

  if (taskIndex < totalTasks - 1) {
    nextLink.href = tasks[taskIndex + 1].href;
    nextLink.style.display = "block";
  } else {
    nextLink.style.display = "none";
  }


  ///////////////////////////////////////////////////////////////         CONTAINER         /////////////////////////////////////////////////////////////////////


  //Right section container
  const sectionsContainer = document.getElementById("sectionsContainer")
  sectionsContainer.prepend(outerDivMainHeading)
  const sectionsSubContainer = document.getElementById("sectionsSubContainer")


  // display UI section container

  const questionMainContainer = document.createElement("div");
  questionMainContainer.className = "overflow-scroll bg-lightTheme w-75 gap-5  border border-success p-3 mb-2 border-opacity-25"
  questionMainContainer.id = "questionMainContainer"

  const questionContainer = document.createElement("div"); //question
  questionContainer.className = "overflow-scroll h-100 d-flex flex-column rounded-start gap-5  pt-5 px-2 mb-2 border-opacity-25"
  const question = document.createElement("h6"); //question
  const explanation = document.createElement("h6"); //explain
  const example = document.createElement("h6"); //example
  console.log(tasks[taskIndex].text)
  question.innerHTML = `
<strong class="headingColorLightTheme" id="questionLeft">
Ques ${taskIndex + 1}):

${tasks[taskIndex].text}</strong>`

  explanation.innerHTML = `
 <strong class="headingColorLightTheme" id="explainationLeft">Explain:</strong>   
${tasks[taskIndex].explain}`;

  example.innerHTML = `
<strong class="headingColorLightTheme" id="exampleLeft">Example:</strong>  

 ${tasks[taskIndex].example}`

  questionContainer.appendChild(question)
  questionContainer.appendChild(explanation)
  questionContainer.appendChild(example)
  questionMainContainer.appendChild(questionContainer)

  sectionsSubContainer.prepend(questionMainContainer)


  // 
  const imgResultContainer = document.createElement("div");
  imgResultContainer.id = "imgResultContainer"
  const imgResultHeadingContainer = document.createElement("div")
  imgResultHeadingContainer.className = "d-flex gap-3 justify-content-between"
  imgResultContainer.className = "code_img text-nowrap overflow-scroll rounded-end w-100 border-2 bg-white p-4 mb-2 border-opacity-25";

  const headerimgResultContainer = document.createElement("div")
  headerimgResultContainer.className = "mx-2 text-nowrap d-flex text-center align-items-center justify-content-between";
  const headingimgResultContainer = document.createElement("h1");
  headingimgResultContainer.textContent = " Lets Decode"

  const headingImgimgResultContainer = document.createElement("img");
  headingImgimgResultContainer.setAttribute("width", "40px");
  headingImgimgResultContainer.setAttribute("height", "40px");
  headingImgimgResultContainer.setAttribute("src", "../coder.jpg");
  headingImgimgResultContainer.setAttribute("class", "rounded");

  const runBtn = document.createElement("button");
  runBtn.id = "runBtn"
  runBtn.innerHTML = "Run";
  runBtn.className = "btn bg-medTheme border-darkest text-white";



  headerimgResultContainer.appendChild(imgResultHeadingContainer); //h1 +img header
  imgResultHeadingContainer.appendChild(headingimgResultContainer); //h1 header
  imgResultHeadingContainer.appendChild(headingImgimgResultContainer);  //img heaer
  headerimgResultContainer.appendChild(runBtn);  //btn run header
  imgResultContainer.appendChild(headerimgResultContainer);


  const codeImgContainer = document.createElement("div");
  codeImgContainer.className = "d-flex flex-column codeImg"
  const codeImg = document.createElement("img");
  codeImg.setAttribute("src", `../images/${taskIndex + 1}.png`);
  codeImgContainer.appendChild(codeImg);
  imgResultContainer.appendChild(codeImgContainer);


  sectionsSubContainer.appendChild(imgResultContainer);


  // display UI section container
  const displayUIContainer = document.getElementById("displayUIContainer");
  const headingLeftContainer = document.createElement("h1");
  const headingLeftContainerIcon = document.createElement("i");
  headingLeftContainerIcon.className = "icon ion-md-football"
  headingLeftContainer.className = "mb-4"
  headingLeftContainer.textContent = `
Lets Play 
`;
  headingLeftContainer.appendChild(headingLeftContainerIcon)
  displayUIContainer.prepend(headingLeftContainer)

  //result container
  const resultContainer = document.createElement("textarea");
  resultContainer.className = "resultContainer rounded p-2 bg-darkestTheme lightColorTheme  d-none"
  resultContainer.id = "result";
  resultContainer.textContent = "Result:"
  displayUIContainer.appendChild(resultContainer)

  const getCode = document.createElement("button")
  getCode.id = "getCode"
  getCode.innerHTML = "CODE"
  getCode.className = "align-self-end btn bg-medTheme border-darkesttext-black";
  UICont.prepend(getCode)


  $(document).ready(function () {
    $("#runBtn").click(function () {
      $("#imgResultContainer").addClass("d-none");

      $("#UICont").removeClass("d-none");


    });

  });
  $(document).ready(function () {
    $("#getCode").click(function () {
      $("#imgResultContainer").removeClass("d-none");
      $("#UICont").addClass("d-none");
    });

  });




  ///////////////////////////////////////////////////////////////         HAMBURGER         /////////////////////////////////////////////////////////////////////

  // hamburger jquery
  $(document).ready(function () {
    $("#close").click(function () {
      $("#hamburger").animate({ left: '-500px' }, "slow");


      // $("#hamburger").animate({left: '32px'});
      $("#close").addClass("d-none");
      $("#hamburgerOpen").show();
      // $(".opacityHam").css('opacity', '1');
      $("#border-ham").removeClass('border-white');
      $("body").removeClass('bg-darkTheme');
      $("#sectionsContainer").css("width", '100%');

    });

  });

  $(document).ready(function () {
    $("#hamburgerOpen").click(function () {
      // $("#hamburger").animate({left: '10px'});
      $("#hamburger").animate({ left: '0px' }, "fast");
      $("#hamburger").show();
      $("#close").removeClass("d-none");
      $("#hamburgerOpen").hide();
      // $(".opacityHam").css('opacity', '0.6');
      // $("#hamburger").css('opacity', '1');
      $("#hamburger").css('zIndex', '1');
      $("#border-ham").addClass('border-white');
      // $("body").addClass('bg-warning');
      $("#sectionsContainer").css('width', '72%');
    });
  });

  const olHamburger = document.createElement("ol");
  olHamburger.id = "olHamburger"
  olHamburger.className = "position-relative pt-1 pl-4 pr-2 border-subtle";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.id="hamburgerLi"
    li.className="pl-0"
    const a = document.createElement("a");
    a.href = task.href;
    a.textContent = task.text;
    li.appendChild(a);
    olHamburger.appendChild(li);

  });
  


  hamburger.appendChild(olHamburger);

  $(document).ready(function () {
    $("#outputBtn").click(function () {
      $("#result").removeClass("d-none");
      $("#result").slideDown(6000);

    });
  });

}


// theme
// dark
const darkTheme = document.createElement("div");
darkTheme.className = "themeIcon";
darkTheme.id = "darkTheme";

darkTheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>`;
bodyContainer.prepend(darkTheme)
// light
const lightTheme = document.createElement("div");
lightTheme.className = "themeIcon d-none"
lightTheme.id = "lightTheme"

lightTheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg> `
bodyContainer.prepend(lightTheme)


$(document).ready(function () {
  $("#darkTheme").click(function () {
    $("#lightTheme").removeClass("d-none");
    $("#darkTheme").addClass("d-none");


    $("#bodyContainer").removeClass("bg-lightTheme");
    $("#bodyContainer").addClass("bg-darkestTheme");
 

    $("#questionMainContainer").removeClass("bg-lightTheme");
    $("#questionMainContainer").addClass("bg-medTheme");

    $("#UICont").removeClass("bg-white");
    $("#UICont").addClass("bg-darkTheme");

    $("#displayUIContainer").removeClass("bg-lightTheme");
    $("#displayUIContainer").addClass("bg-medTheme");

    $("#headingTop").addClass("headingColorDarkTheme");
    $("#headingTop").removeClass("headingColorLightTheme");

    $("#questionLeft").removeClass("headingColorLightTheme");
    $("#explainationLeft").removeClass("headingColorLightTheme");
    $("#exampleLeft").removeClass("headingColorLightTheme");

    $("#questionLeft").addClass("headingColorDarkTheme");
    $("#explainationLeft").addClass("headingColorDarkTheme");
    $("#exampleLeft").addClass("headingColorDarkTheme");

    $("#imgResultContainer").addClass("bg-darkTheme");
    $("#imgResultContainer").removeClass("bg-white");

    $("#prevBtn").addClass("btn-borderCustomDarkTheme");
    $("#prevBtn").removeClass("btn-borderCustomLightTheme");

    $("#menuBtn").addClass("btn-borderCustomDarkTheme");
    $("#menuBtn").removeClass("btn-borderCustomLightTheme");

    $("#nextBtn").addClass("btn-borderCustomDarkTheme");
    $("#nextBtn").removeClass("btn-borderCustomLightTheme");

    $("#result").addClass("bg-lightTheme headingColorDarkTheme");
    $("#result").removeClass("bg-darkestTheme lightColorTheme");


  });
});
$(document).ready(function () {
  $("#lightTheme").click(function () {
    $("#lightTheme").addClass("d-none");
    $("#darkTheme").removeClass("d-none");


    $("#bodyContainer").addClass("bg-lightTheme");
    $("#bodyContainer").removeClass("bg-darkestTheme");


    $("#headingTop").addClass("headingColorLightTheme");
    $("#headingTop").removeClass("headingColorDarkTheme");

    $("#UICont").addClass("bg-white");
    $("#UICont").removeClass("bg-darkTheme");

    $("#questionMainContainer").addClass("bg-lightTheme");
    $("#questionMainContainer").removeClass("bg-medTheme");

    $("#displayUIContainer").addClass("bg-lightTheme");
    $("#displayUIContainer").removeClass("bg-medTheme");

    $("#questionLeft").addClass("headingColorLightTheme");
    $("#explainationLeft").addClass("headingColorLightTheme");
    $("#exampleLeft").addClass("headingColorLightTheme");

    $("#questionLeft").removeClass("headingColorDarkTheme");
    $("#explainationLeft").removeClass("headingColorDarkTheme");
    $("#exampleLeft").removeClass("headingColorDarkTheme");

    $("#imgResultContainer").addClass("bg-white");
    $("#imgResultContainer").removeClass("bg-darkTheme");

    $("#prevBtn").removeClass("btn-borderCustomDarkTheme");
    $("#prevBtn").addClass("btn-borderCustomLightTheme");

    $("#menuBtn").removeClass("btn-borderCustomDarkTheme");
    $("#menuBtn").addClass("btn-borderCustomLightTheme");

    $("#nextBtn").removeClass("btn-borderCustomDarkTheme");
    $("#nextBtn").addClass("btn-borderCustomLightTheme");

    $("#result").removeClass("bg-lightTheme headingColorDarkTheme");
    $("#result").addClass("bg-darkTheme lightColorTheme");


  });
});

