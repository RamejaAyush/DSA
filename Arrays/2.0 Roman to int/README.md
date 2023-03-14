# Roman to integer converts the string which is a roman number into a integer

- to approach the solution for the problem we have to create a hashmap which contains the all values.
- after we need to map over the string and convert the roman number to int and add it.
- catch is this lead me to a problem which is IV is 4 but it will return 6.
- So, I will take a pointer which will current ele, and I'll compare the next ele wih current.
- If the next ele is greater we will subtract the total from the current else I'll add.
