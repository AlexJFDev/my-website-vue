import { reactive } from "vue";

export const blogData = reactive({
    // Template
    /*'name': {
        title: 'title',
        subtitle: 'subtitle',
        content: '# Content',
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
    }
})