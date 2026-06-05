---
layout: post
title: 在 Go-Jek 实习！
subtitle: 一场极其残酷的 boot camp
tags: [programming, travel, life]
fb-img: https://gyani.net/img/blog/go-jek.png
---

在上一段实习和正式工作之间，我有几个月时间，所以我决定让自己有点用，去做一段 Internship。我想感受一下 start up 是什么样子，而 **Go-Jek** 看起来很完美。

Go-Jek 是 Indonesia 的第一家 Unicorn，通过一个 app 提供从电影票、出租车、摩托车出行到货物运输等几乎所有能想到的服务。它们在过去 18 个月里增长了 900x。这个增长非常惊人。

我的导师们认为，他们为应届毕业生举办的 boot-camp 能让我学到最多东西。经过两天 boot-camp 后，我同意他们的看法。

boot camp 的教练 Sidu 也是 Go-Jek 的 Director of Engineering。他非常出色，表达精彩，而且对自己讲的内容非常清楚。

那么过去两天我学到了什么？**很多**。

![Jim Carrey Banging the Keyboard](/img/blog/jim_carrey.gif)

过去两天一直是关于编码、思考和表达最佳实践的讲座。我觉得教练从他在 ThoughtWorks 的经历中获得了这些，ThoughtWorks 是 Agile 运动的先行者。

# 沟通

我们大量讨论了论证如何运作、人们如何落入 Argumentum ad populum 这样的逻辑谬误，以及 Reductio ad absurdum 如何常常被用来发现错误论证。

教练还强调，你的论证应该在逻辑上一致，并且在经验上充分，也强调沟通是一条湿滑的斜坡。他强调不同标签对不同人意味着不同东西，在每一次对话中，都应该定义自己的标签，而听者应该重新表述，以确保他们理解。

其他一些要点：

- 你不需要赢得每一场争论，你需要的是正确。
- 你必须正确，但要礼貌地正确。
- 你必须礼貌，但不能停止正确。
- 同理心能带你走很远，倾听对方要说什么。思考他们可能是怎么想的。
- 不带来学习的争论是无用的。
- 避免循环逻辑
- 避免在定义中使用被定义的术语本身

## 编码

过去 2 天讲了很多大学教育完全遗漏的东西。如果你是自学编程，这些东西也很难找到。

今年早些时候，Prezi 的程序员 [Mihaly Zagon](https://www.linkedin.com/in/zagonmihaly/) 在一次面试后的反馈环节中向我介绍了 *Clean Code: A Handbook of Agile Software Craftsmanship written by Robert Cecil Martin* 这本书。在 boot-camp 期间，我们正在学习如何遵循其中的每一句话，以及更多内容。

## 不可协商的礼仪

我们拿到了一份不可协商的礼仪清单，不能忽视。如果被忽视，到那一刻为止写下的任何代码（整个目录）都会被删除。总结如下：

- 一致的缩进
- 使用空格，不用 tab。是的，我们可以为此争论。给出的理由是不同 IDE 对 tab 的定义不同。请在你的小组中达成共识。
- 文件末尾要有 New Lines。Git 可能很烦人。
- 遵循命名约定
- 遵循项目结构约定
- 不要有未使用的代码，也包括注释
  + Code Updates, Comment Rots
  + Code 是 Single Source of Truth。为什么要制造歧义？
  + 注释意味着你的代码表达力不够
  + 注释是糟糕代码的借口
- Run time environment 和 IDE environment 应该保持一致
- 使用 .gitignore
- 确保总是有一个 README.md，帮助新开发者运行起来。

![rm -rf everything](/img/blog/delete.gif)

## 分支是坏事

课程一开始，我们被告知将会接收到很多可能与你预期相反的知识，其中之一就是 **branching** 是**坏事**。这让人大开眼界。以下是反对 branching 的论点：

- Branching 是糟糕代码的借口
- Branching 阻碍 continuous integration
- Code 应该总是能够 build 并通过 tests。
  + 如果能做到，那为什么要 branch？
  + 如果不能，那你就是在写糟糕代码。
  + 你为什么要写糟糕代码？
- 你不会想成为那个处理多个不同 branches 合并的人
- Master based development 更快，也更不容易出错

![mind blown](/img/blog/kramer.gif)

## 表达意图

这一点我怎么强调都不为过。你的代码和你的 git log 都应该表达意图。如果它们没有表达意图，那你就没有为自己的工作感到骄傲。如果你不为自己的工作感到骄傲，那为什么还要工作？代码应该像诗一样阅读，一首人们能自动理解并且美丽的诗。这可以通过很多方式实现，比如有表达力的函数名、用函数替代冗长的 if 条件，以及不要使用魔法数字。你应该让代码尽可能具有表达力。

![Robin Williams, Dead Poets Society](/img/blog/keating.gif)

## YAGNI

You aren't going to need it。只写你马上会需要的代码。为未来设计是有风险的，应尽可能避免。永远不要为一个假想的未来做设计。你的设计会基于假设。我们对假设知道什么？它们是错的，永远是错的。好吧，大多数时候是。

![Wrong, by Donald J Trump](/img/blog/wrong.gif)

## 告诉，不要询问

你应该要求一个对象去做你想要的事，而不是向它索取信息，然后基于这些信息对对象做事。一个现实世界的例子。想象你想问某人时间。你会怎么做？

- 你抓住他的手。把它拿到眼前。读出时间
- 你告诉他：“嘿，请告诉我时间”
  + 他用手机
  + 他用手表
  + 他给朋友打电话
  + 你不关心他如何告诉你时间

同样的事情也适用于编程。不要闲聊。

## 继承通常是坏主意

它违反 Open/Close Principle。它违反封装，为什么派生类应该知道基类？

尤其是多重继承。想象你在给动物编目录，然后创建了一个新动物，它从猫那里继承一些东西，又从狗那里继承一些东西。这合理吗？然而我们从多个来源继承时就是这么做的。

## 不要靠巧合编程

如果它只是碰巧能工作，就不应该提交。你应该知道它到底为什么能工作，以及是什么让它工作。如果你不知道某件事为什么能在 dev environment 中工作，又怎么能确定它会在 production 上继续工作？

![Sherlock](/img/blog/coincidence.gif)

## 一个类和没有类一样糟糕

移除 class definitions，把它们拆成独立方法。你会得到什么？
什么都没有，只是 procedural programming，其中 class variables 是 global variables。别再骗自己了。

## 编程关乎抽象

是什么让一个程序员成为 10x？抽象。如果人类足够聪明，就不会使用电脑，而是在脑子里运行整个程序。永远抽象。尽可能抽象。抽象程序让你可以创建小类和小方法，从而把程序的一小部分装进脑子里，而不必关心其他地方发生了什么。

按以下方式抽象：

- 把问题拆到尽可能小的部分
- 确保没有重叠
- 这些小部分应该通过契约彼此通信。
- 在你的代码中处处遵守契约

![Cyborg](/img/blog/cyborg.gif)

Sidu 说，抽象加上自动化测试，是我们最接近成为 cyborgs 的方式。这听起来可能很好笑，但他的意思是，我们可以把很多事情卸载给计算机，然后去做我们最擅长的事：思考和创新。

## 测试就是规格说明

Tests 很重要。它们是你程序中最重要的部分。一个没有 tests 的程序，就像一个没有 specifications 的程序。Tests 说明你的程序做什么，并确保它在每次 build 后都准确做到这一点。Tests 让你能够更快开发，而且无需 branching。

永远遵循 TDD。从明天开始，不遵循 TDD 会导致我们的代码被删除。

### 如何 TDD？

- 编写会失败的测试代码 [RED]
- 编写刚好通过测试代码的代码，不多写 [GREEN]
- Commit and Push
- Refactor，没有重构 specs。运行 Tests。
- Commit

我能回忆起来的就这些了，明天应该做更好的笔记。

你会比较频繁地看到这类文章，因为每天写一篇博客是 boot-camp 的任务之一。


![My Reaction When Tests Pass](/img/blog/pass.gif)

tests 通过时，每个人都很开心
