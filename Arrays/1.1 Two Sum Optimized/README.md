# Optimized Solution for Two Sum

1. I'm using Hashmap for this solution because it is a replacement for 2 pointer approach (better runtime).
2. Then I'm finding the diffrence for the p1, becz total = p1 + diff.
3. To find the solution, I will find the diff, If diff in the map I will return the diff index and current index.
4. If I will not find, I will add it to the hashmap like, diff will be the key and value will be the index.
5. How this improves because hashmap is popular to reduce time complex.

Time Complex: O(n)
Space Complex: O(log n) for hashmap
