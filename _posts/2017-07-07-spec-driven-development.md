---
layout: post
title: 规格驱动开发
subtitle: 写规格说明，而不是测试
tags: [programming]
fb-img: https://gyani.net/img/blog/go-jek.png
---

boot-camp 的第 3 天今天结束了。我们进行了第一次关于 ~~Test~~ Spec Driven Development 的练习。在 Go-Jek，我们不写 tests，我们写 specifications。

所以今天我们花了将近 7 个小时做一个非常简单的问题。为什么会花这么久？因为我们试图做 Spec Driven Development，却不断失败。

在我们的第一次 show case 中，我的搭档违反了前一份列表里提到的很多礼仪。代码很糟糕。糟糕的代码不能被原谅。

你说你提交了糟糕的代码，因为你有 deadline。好吧，谁告诉你那种糟糕代码是可以接受的？

## 什么是 specification？

Specification 定义你的代码应该做什么，而不关心它如何做到。

## 什么是 assertion？

你 *test* 中的 assertion 是一份契约，你写的代码应该遵守它。

## 所以我先写代码，然后再写 specifications，对吗？

不。你先写 specifications。在决定代码如何实现之前，你需要知道你的代码应该做什么。如果你读过昨天的文章，那你一定会意识到，先写 specifications 可以让你把大脑做的一部分工作转移给计算机。写 tests 能让你思考得更清楚。

即使今天我们先写 specs，我们也仍然有问题，因为我们脑中已经写好了那个能通过测试的函数代码。核心思想是，你应该用 specifications 的方式思考。

## Ohkay，那我怎么写 specs？

- 创建一个空的 test function
- 写一个会失败的 assertion
- 初始化你的 assertion 所需的任何变量
- 根据你的 assertion 做的事情来命名这个 test

## 那么，我现在应该写多少代码？

**刚好足够**让你的 specifications 通过。不要更多。这能让你把程序拆成离散步骤。编写尽可能少的功能，可以让你拥有一组广泛的 specifications。

## 能帮我总结一下吗？

- 写会失败的 specifications，甚至可能是编译失败。没关系。
- 写足够通过 test 的代码
- Commit
- Refactor and Commit
- Repeat

## 听起来不错，它能扩展吗？

我不知道。我在 hackernews 上读过很多反对 TDD 的讨论。开发者争论说 TDD 不能扩展。

- Eric Gunnerson 在 Microsfot Developers Network 上的[一篇近期文章](https://blogs.msdn.microsoft.com/ericgu/2017/06/22/notdd/)
- [Hacker News 上关于为什么 TDD 对他们失败的讨论](https://news.ycombinator.com/item?id=12924173)

人们处在不同的光谱上。有些人说 unit testing 本身没问题，不管你是在之前还是之后写 test。有人认为 TDD 失败不是因为工程原因，而是经济原因。他们说开发代码太慢了。好吧，接下来几天我们都在做非常小的项目，为什么不遵循 TDD 呢？

教练举例说，他们曾为 Rack Space 构建最早的云存储系统之一，生产环境中只崩溃过大约两次，而这一切只有靠 TDD 才可能实现。
