---
title: Minecraft Modding Part Two
subtitle: After releasing version 0.0.1-beta of Homegrown (which I released improperly so no one could see it) I started working on the next update to Homegrown: 0.1.0-beta.
date: 07/19/2022
tags: [computer-science, hobbies, minecraft, java]
---

# Minecraft Modding Part Two
After releasing version 0.0.1-beta of Homegrown (which I released improperly so no one could see it) I started working on the next update to Homegrown: 0.1.0-beta. My primary focus for this update was to add corn and clean up my code. Similarly to tomatoes (and the other post blocks I will eventually add) my idea for Corn was nothing like a vanilla block. In Homegrown corn has the following traits:
    - It starts as block but grows into two. This means when it is one block tall, the block above it must be air and when one half is broken the other must break too.
    - Despite growing more than one block tall it doesn't require a post to grow on.
    - Corn is collected by breaking the crop.
This first trait, being two blocks tall with extra special properties, was the hardest to implement. I started by looking at some of the blockstate code for tall grass from Vanilla Minecraft and then copied some of the code from the tomato crop since they have some similar behaviors. Then I worked on how the crop would grow.
Firstly it has to be sensitive to the block above it when the crop is planted. It must be air and stay that way until the corn grows taller. My first attempt at implementing this used the wrong method (whenPlanted) instead of (canPlaceAt) this caused crashes because of conditions under which the game calls the methods. After solving this problem I started to work on the crop growth.
Initially, once the top half sprouted from the bottom the two halves grew separately. To solve this problem I made it so that the top half would not receive random ticks (with the ticksRandomly method) and instead would grow by checking the age of the lower half every time it got a block update. Basically, this keeps the two halves of the corn the same age.
Overall, implementing corn was much easier than implementing tomatoes. That's probably because of the code I was able to copy and the fact that I have more experience modding now. The most difficult part might have actually been deciding where corn should come from. Corn is descended from Teosinte, a plant native to Central Mexico. There's not really an environment similar to this in Minecraft so I spent a while thinking about it. Eventually I decided that that the Badlands would be the best biome for the seeds to come from and that is where it can be gotten now.
