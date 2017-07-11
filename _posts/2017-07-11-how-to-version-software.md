---
layout: post
title: How to Version Software
subtitle: .. what are those numbers?
tags: [programming]
fb-img: https://gyani.net/img/blog/go-jek.png
---

Today in class, we had a small discussion on how to version software. The discussion started while we were going through someones ruby Gemspec file. The coach asked:

>What is the ~> symbol?

This was followed by the question.

>What does version 6.5.1 even mean?

Think. If used properly, it has something to do with compatibility.

The major version number(6 in our case) indicates that some code has been depreciated or removed. So if you shift from version 6.x.x to version 7.x.x something might break. That is version 7 might not be backwards compatible. The code might not follow the original contract

The middle number indicates addition of features. Your existing code will not break but they have something new that you should look at. The code follows the original contract and does more.

The minor version number or the least significant one indicates that there has been a bug fix or a change in implementation while the contract remains the same and untouched.

The operator ~> indicates that it can be any version greater than the given number as long as the major version number is the same.

A lot of projects use arbitrary numbers, I guess if we all follow a convention a lot less things might break.

# An external software might break the contract that it initially followed, am I doomed?


![Boom](/img/blog/boom.gif)

No silly. Write tests for the interface to the external application. Ensure that your contract never breaks.

![Drop Mic](/img/blog/obama.gif)