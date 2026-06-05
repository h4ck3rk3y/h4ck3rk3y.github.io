---
layout: post
title: 一份务实的总结
subtitle: .. 关于《程序员修炼之道》。
tags: [programming, go-jek]
fb-img: https://gyani.net/img/blog/go-jek.png
---

所以，在拥有《程序员修炼之道》差不多两年之后，我终于读完了它。我是在 Nmap 参加 Google Summer of Code 时，由我的导师 [Daniel Miller](http://bonsaiviking.com/) 介绍认识这本书的。

Clean Code: A Handbook of Agile Software Craftsmanship 和 The Pragmatic Programmer 是 Go-Jek 程序员应该读的绝对最低标准。它定义了贫困线。新入职员工在开始前一个月就收到了这两本书。我们来定义一下务实主义。

>形容词：pragmatic，以明智和现实的方式处理事情，基于实际而不是理论上的考量。

核心理念是要极其务实。我相信这会让你想起某个人。

![Frank Underwood](/img/blog/frank.gif)

我还有很多书要读，教练说我们应该争取在接下来六个月里读完。完整书单绝对是宝藏，可以在[这里](https://blog.gojekengineering.com/the-go-jek-reading-list-1088712ccc14)找到。

我很可能会把估算或 *deadline* 彻底搞砸，但我希望即使不是 6 个月，也能在接下来的 600 天里读完。这也是务实程序员教给你的一件事。

# 估算很难

作者们认为，成为一个优秀程序员，尤其是一个务实程序员的一部分，就是要做出准确或足够接近的估算。估算这门艺术需要时间积累。作者建议至少把你的估算翻倍，再加上总量的 10%，或者更好的是，把你最初做出的估算乘以 4。

估算一切，不只是完成一项工作所需的时间，还包括这项工作的其他方面，比如时间复杂度、空间复杂度以及其他相关内容。只有当你能估算一个例程需要多久时，你才知道该优化什么。既然我们现在在谈优化，我想向你介绍优化的十条规则。

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

除非你知道要优化什么，否则你不可能知道如何优化。所以永远先 profile。

![Estimates](/img/blog/estimation.gif)

我们在 boot-camp 中学到的另一件事是 *norming*。这不是书里的内容，但非常相关。每次迭代之后（理想情况下，一次迭代应该很短，不超过 2 周），看看你的团队是否达到了设定的速度。如果没有，找出原因。做标准的 **5 whys**，弄清楚发生了什么变化。你的速度下降是因为切换到了不同的框架，还是开发者只是变懒了？记住，速度在不同团队之间没有意义。

## 为什么迭代应该短？

好问题。小迭代能提供快速反馈。作为人类，我们很不擅长估算和设定目标。在此之上，我们还非常没有耐心。小迭代允许持续而快速的反馈。你可以在变化发生时真实地衡量它。借助反馈，你可以采取必要行动，让团队变得更好。想象一下，如果把身体锻炼目标设定为一个月，你会遵守吗？还是会拖延？如果你很快看不到体重秤的变化，你可能会失去动力。

# 测试

>代码没到所有测试跑完就不算完成

极其严格地测试一切。我是说一切。写 ~~Unit Tests~~，哦，我是说 Specs。不过这本书有点老，还没跟上我们的术语。书中建议任何程序都应该具备以下规格说明。

- Unit Tests
    + Unit Test 是一种测试给定 Module 的 Test
    + 在还不知道你刚写的模块是否按预期工作之前，你不能继续进行 integration tests 之类的其他测试
- Integration Tests
    + Integration Test 测试两个或更多模块是否能按预期协同工作
- Validation and Verification
    + 用户告诉了你他们想要什么，你做出来的东西和他们需要的一样吗？它可能没有 bug，但仍然是错的。
- Resource Exhaustion Errors And Recovery
    + 现实世界中存在限制
    + 你的应用能在真实工作条件下运行吗？
    + 理想情况下，你的测试环境应该达到生产环境的规模，并使用类似的大数据量。
- Performance Testing
    + 它能工作，但够快吗？
    + 它可以扩展吗？
- Usability Testing
    + 问问你的用户对你刚创造出来的东西有什么感受

你也可以用 ~~T~~SDD 把它提高一个层次。遵循 TDD Mantra：

- 编写会失败的测试代码 [RED]
- 编写刚好能通过测试代码的代码，不多写 [GREEN]
- Commit and Push
- Refactor，没有重构 specs。运行 Tests。
- Commit

阅读 *TDD by Example* 来更好地理解 TDD。随着我们作为工程师成长，贫困线的定义也会随时间改变。*TDD By Example* 和 *Structure and Interpretation of Computer Programs* 也包含在 Go-Jek 阅读贫困线的其他定义中。

![Tests](/img/blog/tests.gif)

这绝不是对《程序员修炼之道》合适的总结，但已经很晚了。作者得睡觉了。
