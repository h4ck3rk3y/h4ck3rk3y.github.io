---
layout: post
title: A pragmatic summary
subtitle: .. of the pragmatic programmer.
tags: [programming, go-jek]
fb-img: https://gyani.net/img/blog/go-jek.png
---

So I finally finished reading the Pragmatic Programmer after owning it for almost two years now. I was introduced to the book during my Google Summer of Code at Nmap by my mentor [Daniel Miller](http://bonsaiviking.com/).

Clean Code: A Handbook of Agile Software Craftsmanship and The Pragmatic Programmer are the absolute minimum that a programmer should read at Go-Jek. It defines the poverty line. The fresh hires were sent copies of the two books a month before they started. Let's define pragmatism.

>adjective: pragmatic dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.

The idea is to be ruthlessly pragmatic. Reminds you of someone, I am sure it does.

![Frank Underwood](/img/blog/frank.gif)

I have a lot more books to read, the coach says we should aim at finishing them in the next six months. The entire list is an absolute treasure find it [here](https://blog.gojekengineering.com/the-go-jek-reading-list-1088712ccc14).

I'll probably break the estimate or the *deadline* left, right and center but I hope I am able to read it in the next 600 days if not 6 months. That's one thing that the pragmatic programmer teaches you.

# Estimations are hard

The authors suggest that a part of being a nice programmer and especially a pragmatic one is that they make accurate or close enough estimates. This art of estimation comes with time. The authors suggest to at least twice your estimate and add 10% more of the total or even better make your estimate 4 times of the original estimate that you made.

Estimate everything not just time required to complete a job but things about the job like the time complexity, memory complexity and other related things. Only if you can estimate how long a routine takes, you will know what to optimize. As we are now talking about optimizations I would like to introduce you to the ten rules of optimization.

- Profile
- Profile
- Profile
- Profile
- Profile
- Profile
- Profile
- Profile
- Profile
- Profile

You can't know how to optimize unless you know what to optimize. So always profile first.

![Estimates](/img/blog/estimation.gif)

Another thing we learned during boot-camp is *norming*. This isn't from the book but it's very much related. After every iteration(ideally an iteration is very small, not more than 2 weeks) see if your team could meet the velocity it had set. If not find out why? Do the standard **5 whys** and find out what changed. Did your velocity just drop because you switched to a different framework or did the developers just fall lazy? Remember, velocity has no meaning across teams.

## Why should an iteration be small?

Good question. Small iterations provide quick feedback. We as humans are pretty bad at making estimates and setting goals. On top of it we are very impatient. Small iterations allow constant and quick feedback. You can actually measure the change as it happens. Using feedback you can take necessary actions to improve as a team. Imagine having physical exercise goals set for a month, will you follow? Or, will you procrastinate? If you don't see the weighing scale soon you might lose the energy.

# Tests

>Coding Ain't Done 'Til All the Tests Run

Ruthlessly test everything. I mean everything. Write ~~Unit Tests~~, oh I mean Specs. The book is a little old though, it's yet to catch up with our lingo. The book suggests the following specs should be present in any program.

- Unit Tests
    + A Unit Test is A Test that tests a given Module
    + You can't proceed for other tests like integration tests without first knowing that the module you just wrote works as expected
- Integration Tests
    + An Integration Test tests whether two or more modules work together as expected
- Validation and Verification
    + The user told you what they wanted, is what you made the same as what they need? It can be bug free and wrong too.
- Resource Exhaustion Errors And Recovery
    + There are limits in the real world
    + Does your application work in real work conditions?
    + Ideally your testing environment should be at the scale of the production environment with similarly large data.
- Performance Testing
    + It works, but is it fast enough?
    + Can it be scaled?
- Usability Testing
    + Ask your users how they feel about what you just created

You can also take it up a notch with ~~T~~SDD. Follow the TDD Mantra

- Write test code to fail [RED]
- Write code that passes the test code and not more [GREEN]
- Commit and Push
- Refactor, no refactoring specs though. Run Tests.
- Commit

Read the book *TDD by Example* to understand TDD better. The definition of the poverty line can change with time as we grow as Engineers. *TDD By Example* and *Structure and Interpretation of Computer Programs* are included in other definitions of the Go-Jek reading poverty line.

![Tests](/img/blog/tests.gif)

This by no means is an appropriate summary of the Pragmatic Programmer but it's getting late. The Author has to sleep.
