---
layout: post
title: 学习分布式系统
subtitle: .. 或者制定一个学习计划
tags: [golang, distributed, learning, guitar]
---

我决定学习分布式系统。它们看起来真的很有意思。我一直在看相关理论，
但方式非常 hacky。我正在尝试制定一个更有方向的分布式系统学习计划。

我通常通过动手来学习东西。我喜欢亲自动手。当我学习新语言时，比如说，
我会尽量找一个自己可能会做的项目。然后我会读一些语法，等我对这门语言
大致熟悉之后，就开始 hack。

当我花了足够多时间 hack，并且对代码感到舒服之后，我会阅读最佳实践，
以及如何更好地使用这门语言。我会找一些文章，了解如何用更符合习惯的方式使用这门语言。
如果我想花更多时间学习它，我接着会试着弄清楚这门语言的工作原理。

我想对分布式系统也尝试类似的方法。在工作中，我确实会写一些以副本形式运行的服务，
leader 由 ZooKeeper 选举产生。我最近也一直在用 Kafka 作为两个不同任务之间的消息队列，
但我想更深入地研究。

我明白分布式系统是一个相当宽泛的话题。我一直在 Hacker News 上搜索关于
Distributed Systems 的文章，并找到了一些不错的链接：

- [面向分布式系统工程师的分布式系统理论](http://www.the-paper-trail.org/post/2014-08-09-distributed-systems-theory-for-the-distributed-systems-engineer/)
- [一本书 - Distributed Systems for Fun and Profit](http://book.mixu.net/distsys/)
- [Stanford 的分布式系统课程](http://www.scs.stanford.edu/17au-cs244b/sched/)
- [写 Jespen 的人创建了一个不错的分布式系统课程大纲](https://github.com/aphyr/distsys-class)
- [MapReduce 论文](https://ai.google/research/pubs/pub62)
- [System Design Primer - 虽然它面向面试者，但有不错的起点](https://github.com/donnemartin/system-design-primer)
- [MIT 6.824 - 一门分布式系统课程](http://nil.csail.mit.edu/6.824/2015/general.html)
- [Martin Kleppmann 的书 Designing Data Intensive Applications](https://pdfs.semanticscholar.org/24f1/4e3b30012c2bc7e3abbdb16e2b3365d6f920.pdf)


2015 年 MIT 6.824 Spring Lectures 的视频已经上线。根据课程网站，Robert Morris 负责这门课。他就是
写出互联网上第一个 worm 的那个人。他也参与了 YC。

Stanford 课程的视频需要 Stanford 登录才能观看，但教学大纲可以访问。他们还有一个很棒的
[项目](http://www.scs.stanford.edu/17au-cs244b/labs/project.html)列表。所有项目看起来都很
令人生畏，而且都是相当长的项目。我需要挑一个明天就能开始 hack 的。

其中一个令人兴奋的是 “Scalable Web Cache With Consistent Hashing”。也许我可以从那个开始。或者别的东西，
我应该很快做出决定。学习新东西可能很难。也许我应该少纠结，直接选第一个
我喜欢的想法。

有人建议我从零部署一个自己的 Kubernetes 集群来玩。我可以这样做。工作中有一位同事
正在推动基于 Kubernetes 构建的内部 platform as a service，所以一些 Kubernetes 知识
对工作也会有用。

![Martin Smith Guitar](/img/blog/guitar.jpg)

我又开始听摇滚了。感谢 AC/DC。我昨天买了一把吉他，刚刚送到。计划是一样的，
学一些基础，然后直接开始学 Thunder Struck。挑这个项目很容易，因为我就是停不下来一直听它。
接下来会是 “Dream On”。是的，我仍然听非常俗套的曲目。

嗯，这就是我的周末。分布式系统和吉他。到目前为止还算不上特别高产，现在我需要出门
去参加 London Edition of Bitsians Day。
