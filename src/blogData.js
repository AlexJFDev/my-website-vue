import { reactive } from "vue";

export const blogData = reactive({
    // Because Markdown uses 4 spaces as tab, this file will also use 4 spaces instead of 2.
    // Template
    /*'name': {
        title: 'title',
        subtitle: 'subtitle',
        content: `# Content`,
        date: '1/1/0001',
        tags: 'tag'
    },*/
    'what-is-capstone': {
        title: 'What is Capstone',
        subtitle: 'Capstone is a special program for seniors at my high school.',
        content: `# What is Capstone
Capstone is a special program for seniors at my high school. Each student has an internship, job, or some other kind of training experience. Students do their Capstone every day after school. For my Capstone I am working in the IT department at a local research institution.  
Part of the curriculum requires me to write about my experiences or answer a prompt every month so I am posting these writings here.`,
        date: '9/30/22',
        tags: 'capstone school high-school'
    },
    'december-capstone': {
        title: 'December Capstone Journal',
        subtitle: `This month I was asked to write about the technical skills that I've used at my Capstone.`,
        content: `# December Capstone Journal
This month I was asked to write about the technical skills that I've used at my Capstone.  
So far, I have had a lot of programming to do. In particular I have been writing powershell scripts to automate computer setup. I learned about scripting in my 10th grade class when we learned Python. The syntax for Powershell is more primitive but logically it works the same as python. Both languages are also object oriented.  
More generally I've used my skills in algorithms as well. I wrote an algorithm in JavaScript for a webpage and have made algorithms for my PowerShell scripts too. The JavaScript algorithm was pretty simple but the PowerShell one was more advanced. The Powershell script takes a JSON file and uses it to update registry entries. It uses conditional statements, guard clauses, and for loops.`,
        date: '12/14/22',
        tags: 'capstone school high-school'
    },
    'november-capstone': {
        title: 'November Capstone Journal',
        subtitle: 'For November I was asked to write about challenges I have encountered in my Capstone.',
        content: `# November Capstone Journal
For November I was asked to write about challenges I have encountered in my Capstone.  
Overall my Capstone has gone pretty smoothly and I haven't encountered any major obstacles. But, I have run into small problems with projects that I've been assigned. So far this year I have been assigned to inspect conference rooms every week, design a new configuration for computers in conference rooms, and update web pages.  
The first issue I ran into was during my conference room inspections. The microphone on one of the computers I looked at was not working. When some basic troubleshooting didn't fix it I let my manager know. A few days later, my manager and I checked the problem out together. The microphone still wasn't working. Eventually, my manager found the microphone in a cabinet at the back of the room. Someone had unplugged it and put it there.  
This experience taught me more about troubleshooting. I learned what to do when I can't solve a problem and that it is okay to ask my manager for help.`,
        date: '11/30/22',
        tags: 'capstone school high-school'
    },
    'october-capstone': {
        title: 'October Capstone Journal',
        subtitle: 'This month I was asked to write about what I am doing to have a successful experience and who is supporting me.',
        content: `# October Capstone Journal
This month I was asked to write about what I am doing to have a successful experience and who is supporting me.  
My main support at my Capstone organization is my supervisor. He has done the onboarding process with me and he is meant to be my first contact for any questions or issues that I have. Secondary support might be my dad; he also works at my Capstone organization but is in a different department.  
To be successful in my Capstone I am trying to show initiative. One way I can demonstrate initiative is by asking lots of questions. This shows my interest and that I am paying attention to what I am being told. I can showcase my skills by speaking up when I am familiar with a concept and doing tasks on my own without needing guidance. This could apply to my skills in programming, networking, and use.`,
        date: '10/25/22',
        tags: 'capstone school high-school'
    },
    'altair-assembler': {
        title: 'Altair Assembler',
        subtitle: 'This post is about one of my github projects.',
        content: `# Altair Assembler
## Basic Info UPDATE ME
This post is about [one of my github projects](https://github.com/AlexJFDev/altair-assembler).  
After being introduced to the Altair and writing bytecode for it I was interested in writing a assembler to make writing code faster. I chose to write the assembler in Python.  
The Assembler takes text files as input and outputs binary files. I like to give the input files the extension .alt but you don't have to. The programs use the mnemonics found in the manual for instructions. Arguments for instructions are separated by commas. If the arguments will go bytes separate from the instruction they are in Hex otherwise they are binary. The MOV instruction is different from any other and uses a,b,c,d,e,h,l for arguments. Lastly, dat is a special instruction used for data. Dat takes any number of hex arguments.  
## Technical details
The assembler reads input files one line at a time and one instruction is allowed per line. It starts by finding the instruction name, which should be at the start, and then looks that instruction up in a dictionary (hash table). If the instruction isn't found an error is thrown and the program stops. After this the arguments are found and then passed into a method for the instruction to generate its bytecode. When compilation is finished all the bytes are saved into an output file.`,
        date: '9/14/2022',
        tags: 'computer-science school high-school'
    },
    'anagram-algorithms': {
        title: 'Anagram Algorithms',
        subtitle: 'In CSC-205 one of the things we will be doing is working on DSIRP',
        content: `# Anagram Algorithms
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
This method works because each number has a unique set of prime factors.`,
        date: '11/11/2022',
        tags: 'computer-science school high-school python'
    },
    'octal-and-hex-numbers': {
        title: 'Octal and Hexadecimal Numbers',
        subtitle: 'This post is based on part 1E of the Altair 8800 manual with extra info about Hexadecimal.',
        content: `# Octal and Hexadecimal Numbers
This post is based on part [1E of the Altair 8800 manual](https://ubuntourist.codeberg.page/Altair-8800/part-1.html#e-the-octal-system) with extra info about Hexadecimal.  
The Altair uses an eight bit binary input. Since writing out eight digits for every step would be tedious the manual suggests writing instructions with Octal numbers from 0-7. Because Octal digits are the same as three bits; three octal digits are used. However there is one problem with this. Three Octal digits would represent nine bits not eight so the last octal digit only ranges from 0 to 3.  
For example, the binary instruction 10011011 is represented as 223 in octal. In normal decimal it is 155.  
Instead of using Octal you could also use Hexadecimal to represent Altair instructions. In my opinion this is better since two Hexadecimal digits, representing four bits each fit neatly into the Altair's eight bit instructions the only problem with using Hexadecimal is that the Altair's manual uses Octal meaning that you'll have to convert from Octal to Hex frequently.  
The previous example, 10011011, is represented as 9B.`,
        date: '9/1/2021',
        tags: 'computer-science school high-school python'
    },
    'saving-data': {
        title: 'Saving Data',
        subtitle: 'There are many different devices to save data. Each way to save data can fit into one of two catagories, storage and memory.',
        content: `# Saving Data
There are many different devices to save data. Each way to save data can fit into one of two catagories, storage and memory.  
## Memory
Memory is used for data that needs to be accessed very quickly. There are two subtypes of memory. RAM (random-access memory) and ROM (read only memory).  
### ROM
As the name implies ROM is used for data that does not need to be overwritten. It is also faster than RAM. This makes ROM cheaper and faster than RAM but, because of its limitations, ROM can only be used to store very basic firmware for your computer.  
### RAM
Unlike ROM RAM can be overwritten. This means that RAM is the main type of memory in your computer. The drawback to RAM is that it is volatile meaning that the data stored in RAM does not persist when power is lost.  
### SRAM
SRAM is static random-access memory. It has special circuitry that makes it faster than DRAM but this makes it larger and more expensive. Because of the cost, SRAM is only used in small amounts for CPU's cache.  
In consumer CPUs SRAM cache can reach speeds of greater than 3 TB/s.  
### DRAM
DRAM is dynamic random-access memory. Dynamic means that even with power it does not hold its state for long because of this it has to be periodically refreshed. Since DRAM is cheaper than SRAM but still very fast it is the main type of RAM used in computers.  
The fastest consumer DRAM chips have a max speed of 51.2 GB/s.  
## Storage
Storage can be used for data that does not to be accessed as quickly and for the long term. Storage is cheaper than RAM and because of this it is the main way to save data on a computer.  
### Hard Disk Drives
Hard Disk Drives are a kind of storage that use magnetic discs to save data. The discs spin around inside the drive and an arm reads and writes data by changing the polarity of sections of the disc.  
### Solid State Drives
Solid State Drives use flash chips to store data. This makes them faster but more expensive than HDDs. However, the difference in price between the two kinds of storage is shrinking and SSDs are frequently used in place of HDDs.`,
        date: '11/7/2022',
        tags: 'computer-science school high-school'
    },
    'gardening': {
        title: 'Gardening',
        subtitle: 'Last year I started a garden in my backyard and after having decent success with it decided that I start another garden this year.',
        content: `# Gardening
Last year I started a garden in my backyard and after having decent success with it decided that I start another garden this year. My garden is located in my families backyard in a corner that, last year, I had cleared from bushes, vines, and weeds. My goal for this years garden was to expand, plant more plants, and do a better job of keeping up with weeding and watering. I've done an alright job of keeping up to these goals though it hasn't been as good as I had hoped.  
The biggest change between this year and last is probably in the chicken wire fence that I put up around my garden to protect it from animals. When I put up the fence last year I was rushed and did a bad job of it. By the start of this summer the fence was in pretty bad shape. What I did was to take the whole fence down and then take my time putting it back up. To provide a structure for the fence to rest on I used bamboo stakes that I'd driven several feet into the ground. Compared to my fence from last year the new one has held up a lot better. I've also incorporated a "gate" into it which makes it easier to bring things like the lawnmower into my garden space  
I also have some different plants from what I have last year. Last year I planted corn, tomatoes, carrots, cantaloupe, and watermelon. This year I have corn, tomatoes (some of which are volunteers descended from last years), cucumber, chard, an unknown variety of melon or squash, basil, mint (volunteers), and dill. Additionally there were a lot of seeds that I planted that never sprouted that had come from my grandmothers collection of seeds. These seeds from my grandmother were very old and had gone bad. I had also tried planting peppers from seeds that I had received as a gift last year but those had gone bad too.  
***
## Here are some pictures of my garden
#### One of my tomato plants with young green tomatoes.
![One of my tomato plants with young green tomatoes.](https://i.imgur.com/hJcrbMi.jpeg "One of my tomato plants with young green tomatoes.")
#### A picture of my tomato plants when they were young.
![A picture of my tomato plants when they were young.](https://i.imgur.com/f0wqDAW.jpeg "A picture of my tomato plants when they were young.")  
#### My compost area. This is new from last year.
![My compost area. This is new from last year.](https://i.imgur.com/6L3MGnV.jpeg "My compost area. This is new from last year.")
#### Testing old seeds. From all these different kinds of seeds only one was good.
![Testing old seeds. From all these different kinds of seeds only one was good.](https://i.imgur.com/cLj6HJG.jpeg "Testing old seeds. From all these different kinds of seeds only one was good.")`,
        date: '7/22/2022',
        tags: 'gardening outdoors hobbies'
    },
    'java-dates': {
        title: 'Java Dates',
        subtitle: 'Java has a calendar function that can be used for preforming calculations on the Date.',
        content: `# Java Dates
Java has a calendar function that can be used for preforming calculations on the Date.  
## The Package
There are 2 packages that come in java.util that work with dates. There is java.util.Date and java.util.Calendar. You should use java.util.Calendar because java.util.Date is depreciated.  
## Getting The Instance
Calendar is static meaning "new Calendar()" won't work. Instead you should use "Calendar.getInstance()" to get a static instance of the Calendar.  
## This code:  
    Calendar calendar = Calendar.getInstance();
    String todaysDate = String.format("%tc", calendar);
    System.out.println(todaysDate);
    String todaysTime = String.format("%tr", calendar);
    System.out.println(todaysTime);
    String dayOfTheWeek = String.format("%tA", calendar);
    System.out.println(dayOfTheWeek);
    String month = String.format("%tB", calendar);
    System.out.println(month);
    String day = String.format("%tD", calendar);
    System.out.println(day);
    String weekMonthDay = String.format("%tA, %&lt;tB %&lt;td", calendar);
    System.out.println(weekMonthDay);
## Gives this output:  
    Mon Nov 29 09:00:22 EST 2021
    09:00:22 AM
    Monday
    November
    11/29/21
    Monday, November 29`,
        date: '11/29/2021',
        tags: 'computer-science school high-school java'
    },
    'minecraft-modding-part-one': {
        title: 'Minecraft Modding Part One',
        subtitle: 'Several months ago, Probably about 9 or 10, I started working on a Minecraft mod.',
        content: `# Minecraft Modding Part One
Several months ago, Probably about 9 or 10, I started working on a Minecraft mod. The idea started as a joke in my Java programming class between 2 other friends that we develop the mod and present it to our teacher who wasn't very knowledgeable on these sorts of things. I worked on it a little but eventually lost interest and my friends contributed basically nothing to the project. Eventually we decided on working on a "Java Algebra System" which ended up being an overly ambitious project.  
That original mod I gave the uncreative name of "Vanilla Improvements: Agriculture". When I submitted the version 0.0.1-alpha to upload onto Curseforge (the leading website for mod hosting) it was denied basically for being uncreative. This was also around when I lost interest.  
Fast forward to this week when I regained interest in the project. The first thing that I did was to sit down and rethink the name for my mod. Since the mod has remained agriculture themed I knew that the name should be related. Eventually I came up with "Homegrown". I came up with the name by googling "synonyms for 'rustic' (a mod that this project is inspired by)" and found the word "homespun" from there it wasn't hard to come up with the name "Homegrown" and another google search showed me that there was no other mod with that name.  
After coming up with a new name I began tackling the bugs and incomplete features that I had previously filed as issues. The first problem to be solved (and with the least hassle) was the one that I had been having the most difficulty with previously. Within the first day or so of starting work back up on my mod I had fixed the issue. I slowly worked my way through the remaining bugs and then began updating textures, adding more post blocks (you'll understand if you check out the mod), and attempting to get my Cantaloupes to generate naturally.  
Generating my Cantaloupes proved to be the most difficult issue to solve. I first tried adding the "features" (a technical Minecraft term) in code following along with the tutorial on the Fabric website. Eventually I realized that this tutorial was out of date and I was told to try adding my Cantaloupes a different way with something called a Datapack. But, this had it's own issues first requiring me to update my Minecraft version (a hassle) and then it still didn't work. Eventually after reading the wiki page about Datapacks I realized that I was missing another file but it still didn't work. I resolved to work on solving other problems until eventually I was left with just the Cantaloupes. With fresh eyes I realized that there was a second file that was missing from my Datapack. Once I included this file (actually 3 files) everything worked properly and I built version 0.0.1-beta of my mod.  
My mod can be found at [this link](https://www.curseforge.com/minecraft/mc-mods/homegrown) if you'd like to check it out.`,
        date: '7/15/2022',
        tags: 'computer-science hobbies minecraft java'
    },
    'minecraft-modding-part-two': {
        title: 'Minecraft Modding Part Two',
        subtitle: 'After releasing version 0.0.1-beta of Homegrown (which I released improperly so no one could see it) I started working on the next update to Homegrown: 0.1.0-beta.',
        content: `# Minecraft Modding Part Two
After releasing version 0.0.1-beta of Homegrown (which I released improperly so no one could see it) I started working on the next update to Homegrown: 0.1.0-beta. My primary focus for this update was to add corn and clean up my code. Similarly to tomatoes (and the other post blocks I will eventually add) my idea for Corn was nothing like a vanilla block. In Homegrown corn has the following traits:  
    - It starts as block but grows into two. This means when it is one block tall, the block above it must be air and when one half is broken the other must break too.  
    - Despite growing more than one block tall it doesn't require a post to grow on.  
    - Corn is collected by breaking the crop.  
This first trait, being two blocks tall with extra special properties, was the hardest to implement. I started by looking at some of the blockstate code for tall grass from Vanilla Minecraft and then copied some of the code from the tomato crop since they have some similar behaviors. Then I worked on how the crop would grow.  
Firstly it has to be sensitive to the block above it when the crop is planted. It must be air and stay that way until the corn grows taller. My first attempt at implementing this used the wrong method (whenPlanted) instead of (canPlaceAt) this caused crashes because of conditions under which the game calls the methods. After solving this problem I started to work on the crop growth.  
Initially, once the top half sprouted from the bottom the two halves grew separately. To solve this problem I made it so that the top half would not receive random ticks (with the ticksRandomly method) and instead would grow by checking the age of the lower half every time it got a block update. Basically, this keeps the two halves of the corn the same age.  
Overall, implementing corn was much easier than implementing tomatoes. That's probably because of the code I was able to copy and the fact that I have more experience modding now. The most difficult part might have actually been deciding where corn should come from. Corn is descended from Teosinte, a plant native to Central Mexico. There's not really an environment similar to this in Minecraft so I spent a while thinking about it. Eventually I decided that that the Badlands would be the best biome for the seeds to come from and that is where it can be gotten now.`,
        date: '7/19/2022',
        tags: 'computer-science hobbies minecraft java'
    },
})