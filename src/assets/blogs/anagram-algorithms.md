---
title: Anagram Algorithms
subtitle: In CSC-205 one of the things we will be doing is working on DSIRP
date: 11/11/2022
tags: [computer-science, school, high-school, python]
---

# Anagram Algorithms
In CSC-205 one of the things we will be doing is working on [DSIRP](https://github.com/AllenDowney/DSIRP). It's a course designed to teach about algorithms and data structures in Python.
Our first assignment was to work on [algorithms](https://github.com/AllenDowney/DSIRP/blob/main/notebooks/algorithms.ipynb) which teaches basic algorithm concepts. Its first task is to find if two words are anagrams.
## My First Approach
    def is_anagram_old(word1, word2):
        # "word1" is a string.
        # "word2" is a string.
        # Create dictionaries
        word1Letters = {}
        word2Letters = {}
        # Iterate over word1
        for letter in word1:
            # Using 'letter' as a key get a value from the dictionary. If the key does not yet exist get 0.
            # Add 1 to this value and put it back in the dictionary.
            word1Letters[letter] = word1Letters.get(letter, 0) + 1
        # Iterate over word2
        for letter in word2:
            # Using 'letter' as a key get a value from the dictionary. If the key does not yet exist get 0.
            # Add 1 to this value and put it back in the dictionary.
            word2Letters[letter] = word2Letters.get(letter, 0) + 1
        # Compare the dictionaries; if they are equal return True.
        if word1Letters != word2Letters: return False
        return True
This first method takes a more conventional approach using dictionaries.
## My Second Approach
    def factorize_word(word, letter_dictionary):
        # "word" is just a string.
        # "letter_dictionary" is a dictionary with single characters as keys and prime numbers as values.
        # Start with 1
        factorized_word = 1
        # Iterate over the word
        for letter in word:
            # Using "letter" as the key get a prime number from the "letter_dictionary".
            # Multiply 'factorized_word' by that prime number.
            factorized_word *= letter_dictionary.get(letter)
        # Return factorized_word
        return factorized_word

    def is_anagram(word1, word2):
        # Factorize word1
        word1_factorized = factorize_word(word1, filled_letter_dictionary)
        # Factorize word2
        word2_factorized = factorize_word(word2, filled_letter_dictionary)
        # Return False if the factorizes aren't equal.
        if word1_factorized != word2_factorized: return False
        # Return True
        return True
This method is less conventional but it seems to be slightly faster.
I call this method "factorizing". Every letter is associated with a different prime number ({"a":2,"b":3,"c":5,...}). The algorithm finds all the prime numbers of a word and multiplies them together. Anagrams will always have the same prime numbers and therefore the same product.
This method works because each number has a unique set of prime factors.
