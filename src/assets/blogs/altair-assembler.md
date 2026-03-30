---
title: Altair Assembler
subtitle: This post is about one of my github projects.
date: 09/14/2022
tags: [computer-science, school, high-school]
---

# Altair Assembler
## Basic Info UPDATE ME
This post is about [one of my github projects](https://github.com/AlexJFDev/altair-assembler).
After being introduced to the Altair and writing bytecode for it I was interested in writing a assembler to make writing code faster. I chose to write the assembler in Python.
The Assembler takes text files as input and outputs binary files. I like to give the input files the extension .alt but you don't have to. The programs use the mnemonics found in the manual for instructions. Arguments for instructions are separated by commas. If the arguments will go bytes separate from the instruction they are in Hex otherwise they are binary. The MOV instruction is different from any other and uses a,b,c,d,e,h,l for arguments. Lastly, dat is a special instruction used for data. Dat takes any number of hex arguments.
## Technical details
The assembler reads input files one line at a time and one instruction is allowed per line. It starts by finding the instruction name, which should be at the start, and then looks that instruction up in a dictionary (hash table). If the instruction isn't found an error is thrown and the program stops. After this the arguments are found and then passed into a method for the instruction to generate its bytecode. When compilation is finished all the bytes are saved into an output file.
