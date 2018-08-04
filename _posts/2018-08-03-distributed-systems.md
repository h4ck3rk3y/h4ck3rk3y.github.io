---
layout: post
title: Learning distributed systems
subtitle: .. or coming up with a lesson plan
tags: [golang, distributed, learning, guitar]
---

I've decided to learn about distributed systems. They seem really interesting. I've been looking at the theory
but in a very hacky way. I'm trying to come up with a more directed plan on learning distributed systems.

I usually learn things by doing. I like to get my hands dirty. When I'm picking up new languages for example
I try to have a project that I could potentially work on. I then proceed to read some syntax and after I am
vaguely familiar with the language I start hacking.

After I have spent enough time hacking and I feel comfortable with the code. I read about the best practices
and how I could better use the language. I find articles about using the language in a more idiomatic way.
I then try to figure out the workings of the language if I want to spend more time learning it.

I would like to try something similar for distributed systems. At work I do write services that run in replicas
and the leader gets elected by ZooKeeper. I have also been using Kafka recently as a message queue between
two different tasks but I want to dive deeper.

I understand that distributed systems is a fairly broad topic. I have been searching Hacker News for articles
on Distributed Systems and I have found a few good links :

- [Distributed Systems Theory for Distributed Systems Engineers](http://www.the-paper-trail.org/post/2014-08-09-distributed-systems-theory-for-the-distributed-systems-engineer/)
- [A book - Distributed Systems for Fun and Profit](http://book.mixu.net/distsys/)
- [A Stanford Course on Distributed Systems](http://www.scs.stanford.edu/17au-cs244b/sched/)
- [The person who wrote Jespen created a nice outline for a distributed systems class](https://github.com/aphyr/distsys-class)
- [MapReduce Paper](https://ai.google/research/pubs/pub62)
- [System Design Primer - Though this is meant for people interviewing it has good starting points](https://github.com/donnemartin/system-design-primer)
- [MIT 6.824 - A course on distributed systems](http://nil.csail.mit.edu/6.824/2015/general.html)


Videos for the 2015 MIT 6.824 Spring Lectures are online. According to the course website Robert Morris takes the course. He is
the guy who wrote the first worm on the internet. He is also involved in YC.

The Stanford Course requires a Stanford login for the videos but the syllabus is accessible. They also have a
great list of [projects](http://www.scs.stanford.edu/17au-cs244b/labs/project.html). All the projects look
daunting and are fairly long projects. I need to pick one that I can start hacking on from tomorrow.

One of the exciting ones is "Scalable Web Cache With Consistent Hashing". I can perhaps start with that. Or something else,
I should have a decision soon. Learning new things can be tough. Maybe I should bike shed and go with the first
idea that I like.

Someone suggests that I play with my own Kubernetes cluster by deploying one from scratch. I could do that. At work a colleague
is pushing for the internal platform as a service which builds on top of Kubernetes, so some knowledge of Kubernetes would
be useful for work as well.

![Martin Smith Guitar](/img/blog/guitar.jpg)

I have started listening to rock again. Thanks to AC/DC. I bought a guitar yesterday that just arrived. The plan is the same,
learn some basics and then just start learning Thunder Struck, picking that project was easy as I just can't stop listening to it.
Up next would be "Dream On". Yep, I still listen to very cliche tracks.

Well that's my weekend. Distributed systems and the guitar. Hasn't been super productive so far and now I need to head out
to the London Edition of Bitsians Day.
