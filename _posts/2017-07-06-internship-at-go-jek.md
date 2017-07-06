---
layout: post
title: Internship at Go-Jek!
subtitle: an extremely brutal boot camp
tags: [programming, travel, life]
fb-img: http://gyani.net/img/blog/go-jek.jpg
---

Between my previous internship and my permanent job I had a few months so I decided to make myself useful and do an Internship. I wanted to feel how a start up feels like and **Go-Jek** seemed perfect.

Go-Jek is Indonesia's first Unicorn and provides every service once could think of from movie tickets, cab rides, scooter rides to transportation of goods all through one app. They grew 900x in he past 18 months. The growth is phenomenal.

My mentors decided that the boot-camp they were conducting for fresh grads would help me learn the most. After two days of the boot-camp, I agree with them.

The coach at the boot camp Sidu is also the Director of Engineering at Go-Jek. He is exceptional, speaks brilliantly and is very clear about what he speaks.

So what did I learn in the past two days? **A lot**.

![Jim Carrey Banging the Keyboard](/img/blog/jim_carrey.gif)

The past two days has been a lecture on best practices in coding, thinking and speaking. I think the coach gets this from his time at ThoughtWorks, the front runners of the Agile movement.

# Communication

A lot has been discussed on how arguments work and how people fall prey to logical fallacies like Argumentum ad populum and how Reductio ad absurdum can be often used to find incorrect arguments.

The coach also stresses on how your arguments should be logically consistent and empirically adequate and how communication is a slippery slope. He stresses on how different labels mean different things to different people and in every conversation one should define their labels and the listener should rephrase to ensure that they a

Couple of other pointers

- You don't have to win every argument, you have to be right.
- You have to right but be polite about it.
- You have to be polite but not stop being right.
- Empathy takes you a long way, listen to what the other has to say. Think how they might be thinking.
- An argument that leads to no learning is useless.
- Avoid circular logic
- Avoid using terms in their own definitions

## Coding

A lot has been said in the past 2 days that University Education simply misses.A lot of these things are tough to find if you are learning to program on your own.

Earlier this year I was introduced to the book *Clean Code: A Handbook of Agile Software Craftsmanship* by [Mihaly Zagon](https://www.linkedin.com/in/zagonmihaly/) in the feedback session after an interview. During the boot-camp we are being taught how to follow every word of it and more.

## Non Negotiable Etiquettes

We have been given a list of non-negotiable etiquettes that can't be ignored. If ignored, whatever code(the entire directory) was written till that moment will be deleted. To summarize them:

- Consistent indentation
- Spaces, no tabs. Yes we can fight over this. Reason given is that different IDEs define tabs differently. Reach consensus in your group.
- New Lines at the End of File. Git can be annoying.
- Follow conventions for naming
- Follow conventions for project structures
- No unused code, that includes comments
  + Code Updates, Comment Rots
  + Code is the Single Source of Truth. Why create ambiguity?
  + Comments mean that your code isn't expressive enough
  + Comments are an excuse for bad code
- Run time environment and IDE environment should be consistent
- Use .gitignore
- Ensure that there is always a Readme.md that helps get new devs up and running.

![rm -rf everything](/img/blog/delete.gif)

At the beginning of the session we were told that we will be given a lot of knowledge that might be contrary to the what you might expect, one of them was that **branching** is **bad**. This was mind blowing. This following arguments were given against branching:

- Branching is an excuse for bad code
- Branching hampers continuous integration
- Code should always build and pass tests.
  + If it does then why branch?
  + If it doesn't then you are writing bad code.
  + Why are you writing bad code?
- You don't want to be the guy handling multiple merges from different branches
- Master based development is faster and less error prone

![mind blown](/img/blog/kramer.gif)

## Express Intent

I can't stress this enough. Your code and your git log should express intent. If it isn't then you aren't proud of your work. If you aren't proud of your work then why work at all? Code should read like a poetry, a poem that one understands automatically and is beautiful. This can be achieved in a lot of ways, some of them are expressive function names, functions instead of long if conditions and no magic numbers. You should make your code as expressive as possible.

![Robin Williams, Dead Poets Society](/img/blog/keating.gif)

## YAGNI

You aren't going to need it. Only write code that you are going to need immediately. Designing
for the future is risky and should be avoided whenever possible. Never design for a hypothetical future. Your design will be based on assumptions. What do we know about assumptions? That they are wrong, always wrong. Well, mostly

![Wrong, by Donald J Trump](/img/blog/wrong.gif)

## Tell Don't Ask

You should ask an object to do what you want instead of asking for things and doing things on the object based on the information supplied. A real world example. Imagine you want to ask
someone for the time. What do you do?

- You hold his hand. You take it near your eyes. You read the time
- You tell him "Hey, please tell me the time"
  + He uses his phone
  + He uses his watch
  + He calls his friend up
  + You don't care how he tells you the time

The same thing applies to programming. No small talk.

## Inheritance is generally a bad idea

It violates Open/Close Principle. It violates encapsulation, why should the derived class
know about the base class?

Especially multiple inheritance. Imagine you are cataloging animals and you create a new animal that inherits somethings from cats and something from dogs. Does this make sense? Yet we do this when we inherit from multiple sources.

## No programming by coincidence

If it just works, it shouldn't be committed. You should know why it exactly works and what makes it work. If you don't know why something works in the dev environment how can you be sure it will continue working on production?

![Sherlock](/img/blog/coincidence.gif)

## One Class is As Bad As No Class

Remove the class definitions and break out into separate methods. What do you have?
Nothing but procedural programming where class variables are global variables. Stop
lying to yourself.

## Programming is About Abstraction

What makes a programmer 10x? Abstraction. If humans were smart enough they wouldn't be using
computers, they would be running entire programs in their heads. Always abstract. Abstract as much as you can. Abstracting programs allows you to create small classes, with small methods which allow you to load the small part of your program in your brain without
caring about what's happening elsewhere.

Abstract in the following manner:

- Break down the problems to as small parts as possible
- Ensure there is no overlap
- These small parts should talk to each other via a contract.
- Honor the contract everywhere in your code

![Cyborg](/img/blog/cyborg.gif)

Sidu says, abstraction along with automated testing is the closest we are to being cyborgs. it might sound funny but what he means is that we can off load a lot of things to the computer and do what we do best think and innovate.

## Tests are specifications

Tests are important. They are the most important parts of your program. A program without tests is like a program without specifications. Tests specify what your program does and ensures it does exactly that after every build. Tests allow you to develop faster and without branching.

Always follow TDD. From tomorrow not following TDD will result in our code being deleted.

### How to TDD?

- Write test code to fail [RED]
- Write code that passes the test code and not more [GREEN]
- Commit and Push
- Refactor, no refactoring specs though. Run Tests.
- Commit

That's all I could recollect, better notes from tomorrow I guess.

You'll be seeing more of these fairly frequently as writing a blog post daily is one of the tasks of the boot-camp.


![My Reaction When Tests Pass](/img/blog/pass.gif)

Everyones happy when tests pass