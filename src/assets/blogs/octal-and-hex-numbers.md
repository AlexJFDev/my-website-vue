---
title: Octal and Hexadecimal Numbers
subtitle: This post is based on part 1E of the Altair 8800 manual with extra info about Hexadecimal.
date: 09/01/2021
tags: [computer-science, school, high-school, python]
---

# Octal and Hexadecimal Numbers
This post is based on part [1E of the Altair 8800 manual](https://ubuntourist.codeberg.page/Altair-8800/part-1.html#e-the-octal-system) with extra info about Hexadecimal.
The Altair uses an eight bit binary input. Since writing out eight digits for every step would be tedious the manual suggests writing instructions with Octal numbers from 0-7. Because Octal digits are the same as three bits; three octal digits are used. However there is one problem with this. Three Octal digits would represent nine bits not eight so the last octal digit only ranges from 0 to 3.
For example, the binary instruction 10011011 is represented as 223 in octal. In normal decimal it is 155.
Instead of using Octal you could also use Hexadecimal to represent Altair instructions. In my opinion this is better since two Hexadecimal digits, representing four bits each fit neatly into the Altair's eight bit instructions the only problem with using Hexadecimal is that the Altair's manual uses Octal meaning that you'll have to convert from Octal to Hex frequently.
The previous example, 10011011, is represented as 9B.
