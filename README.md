# Collatz Sequence Algorithm

This repository ships an implementation for the following question:

**Which starting number, under one million, produces the longest chain on the Collatz Sequence?**

Collatz:
- The iterative sequence is defined for the set of positive integers
- Given a number n in the Collatz sequence,
  - if n is even, the next number in the sequence is n/2
  - if n is odd, the next number in the sequence is 3n + 1
- Applying the rule above with the starting number 13, we generate the following sequence:
  - 13 40 20 10 5 16 8 4 2 1 It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
