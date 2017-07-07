---
layout: post
title: Spec Driven Development
subtitle: write specifications not tests
tags: [programming]
fb-img: https://gyani.net/img/blog/go-jek.png
---

Day 3 of the boot-camp concluded today. We had our first exercise on ~~Test~~ Spec Driven Development. At Go-Jek we don't write tests, we write specifications.

So we spent close to 7 hours today working on a very simple problem. Why did we take so long? We were trying and failing to do Spec Driven Development.

In our first show case my pair violaed a lot of ettiquettes mentioned in the previous list. Had horrible code. Horrible code can't be excused.

You say you shipped horrible code because you have a deadline. Well who told you to that horrible code was expressible.

## What is a specification?

A specification defines what your code should do while not caring about how it does it.

## What is an assertion?

An assertion in your *test* is a contract that should be followed by the code that you write.

## So I write code and then I write specifications, right?

No. You write specifications first. You need to know what your code should do before you decide how it does it. If you have read yesterdays post, then you must realize that writing specifications first allows you to transfer some of the work that your brain does to the computer. Writing tests allows you to think clearly.

Even today when we were writing specs first, we were at fault as we had already written the code of the function that passes the test in our mind. The idea is that you should think in terms of specifications.

## Ohkay, how do I write specs?

- Create a blank test function
- Write an assertion that fails
- Initialize whatever variables that your assertion requires
- Name the test according to what your assertion does

## So, how much code should I write now?

**Just enough** to make your specifications pass. And not more. This allows you to break your program into discrete steps. Writing the smallest possible amount of functionalities allows you to have a broad set of specifications.

## Can you sum it up for me?

- Write specifications that fail, it might even be a compilation failure. That's fine.
- Write enough code that passes the test
- Commit
- Refactor and Commit
- Repeat

## Sounds good, does it scale?

I don't know. I have read a lot of discussion against TDD on hackernews. Developers argue that TDD doesn't scale.

- [A recent post](https://blogs.msdn.microsoft.com/ericgu/2017/06/22/notdd/) on Microsfot Developers Network by Eric Gunnerson
- [Discussion on Hacker News about why TDD fails for them](https://news.ycombinator.com/item?id=12924173)

People are on different spectrums. Some say that unit testing works fine, it doesn't matter if you write the test before or after. Some argue that TDD didn't fail because of engineering reasons but economic reasons. It's too slow to develop code they say. Well for the next few days we are working on very small projects, why not follow TDD?

The coach gives examples of how they built one of the first cloud storage systems for Rack Space which only crashed about twice in production and all this was possible only because of TDD.
