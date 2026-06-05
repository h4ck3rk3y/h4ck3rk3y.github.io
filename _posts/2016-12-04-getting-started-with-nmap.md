---
layout: post
title: 为 Nmap 代码库做贡献
subtitle: 回答 nmap-dev 上最常被问到的问题
tags: [programming, nmap, lua, scripting, gsoc, opensource]
fb-img: "https://gyani.net/img/blog/nmap.png"
---

![Nmap](/img/blog/nmap.png)

所以，我订阅 nmap-dev 邮件列表已经大约两年了。

Nmap 没有大多数开源项目在其网站上都有的标准 *Contributing to Nmap* 页面。我确信这是人们不断在邮件列表上询问“如何贡献？”的主要原因之一。

我会把这篇博客分成两部分，一部分讲我的故事，以及我开始贡献时的背景；另一部分则谈一般该如何贡献，看起来更像是一组有用资源的集合。我的故事会偏向 Nmap Scripting Engine，也就是 Nmap 中我认为最灵活、最令人兴奋的部分。

这篇文章目前是一篇草稿。它可能会很长，请耐心看完，喝点茶，并通过告诉我是否应该做任何修改来帮助我完善它。我只看过 Code Base 的很小一部分，所以我可能会漏掉很多东西，也可能漏掉一些有趣的组件。

# 我的故事

我在 2014 年 12 月开始为开源做贡献。我尝试为 Sahana Eden 做贡献，因为我喜欢它的技术栈基于 Python 这一点。

了解 Git、GitHub（两者之间的区别）、IRC 以及相关编程知识，对你选择的任何组织都会有帮助。如果你懂 Git，也就是最流行的版本控制系统，那么切换到 svn 或 mercurial 之类的东西应该不会太难。我个人认为有帮助的一点，是让你的系统运行 Linux。当我刚开始接触开源时，看到别人施展命令行魔法会让我惊叹不已，但那并不神奇，它只是随着时间积累而来。

如果你读这篇文章时正在考虑尝试 GSoC 2017，请记住 GSoC 是一个初级到中级~~program and is not for experts. If you are an expert then you are better of being a mentor~~到专家级的项目。每个人都能找到适合自己的东西。所以如果你是开源新手，不应该太担心，你只需要尝试去贡献。

Nmap 的原作者和维护者 Fyodor 正确地指出，Nmap 团队更倾向于选择拥有大量 Nmap Development 经验的导师，而作为学生能让你有机会做更多动手工程工作，且补偿只给学生，不给导师。所以如果你是拥有专家技能的人，在 Nmap 仍然更适合从学生身份开始。

最终我对那个项目和社区失去了兴趣，然后决定切换到一个我感兴趣的项目，一个和安全有关的东西。我选择了 Nmap，这是我之前稍微玩过一点的东西，也可能是我们所有人都在电影 The Matrix Reloaded 里见过的东西。

我开始查看 Nmap 的各个部分，并决定 core Nmap 对我来说可能有点太多，因为它网络相关内容很重，并且运行在 C/C++ 中。
我已经开始用 Python 写脚本，并认为用 Lua 写脚本不会那么难。我想做的是 *hacking*，不是 *UI*，所以 Zenmap 对我来说不是一个选择。

我在这里使用 hacking 这个词，意思是*未经授权访问系统或计算机中的数据*，而不是*对聪明才智的恰当应用*。开发 Zenmap 需要大量思考和技能。正如 Fyodor 所说，开发 Zenmap 需要良好设计技能、对使用场景的思考，以及在代码中很好实现它们的能力。此外，Zenmap 远不只是一个 GUI；相反，它有很多复杂功能，不像其他一些软件那样只是把普通结果显示在窗口里。

为了开始接触 Nmap，我在 2013 年 1 月左右做出了我的第一次贡献。我看到 ZenMap 缺少 *Hindi* 语言支持。我翻阅了 nmap-dev 邮件列表，发现有人认领了编写 *Hindi* 翻译的任务，但中途放弃了。我联系了那个人，他说我可以继续编写翻译。我阅读了创建翻译文件的说明，并开始用 Quillpad 输入，把内容翻译成 Hindi。

所以我的第一次贡献不是代码。这是人们应该学到的一点。你不必贡献代码才能为开源做贡献。为开源做贡献有很多不同方式，其中一些是：

- 贡献翻译
- 改进现有文档
- 遇到 bug 时提交 bug 报告
- 通过回复 RFC、从用户角度给出观点来参与其中
- 贡献实际代码
- 如果你的组织接受捐赠，就进行捐赠
- 通过分享你喜欢的酷炫新功能，向社区表达支持
- 在 IRC 上帮助刚接触该程序的其他用户
- 提交 OS Fingerprints

然后我开始浏览 NSE 脚本。我想明白了，我应该从 [issue tracker](http://issues.nmap.org) 上的简单任务入手。作为一个社区，我认为 Nmap 可以拥有按难度标记为 *easy*、*medium* 或 *hard.* 的 bug。在我看来，这会让任何社区对初学者更友好。

我接了一个需要合并两个不同脚本的任务。两个不同的开发者写了与 Wordpress 相关的脚本。一个脚本收集主题，另一个从给定主机收集插件信息。第二个脚本使用第一个脚本作为模板。社区决定把这两个脚本合并成一个名为 *http-wordpress-enum* 的脚本。简单来说，它会枚举插件和主题。我不需要知道如何发起 GET、POST 请求，也不需要知道 Wordpress 如何工作。测试环境不是必需的，因为这不是侵入式脚本。所需要的只是 Lua 101，除此之外没有别的。合并这两个脚本后，我学到了一些东西。**第一，不只是代码，可读性也很重要；第二，遵循社区制定的编码指南**。你可以在[这里](https://secwiki.org/w/Nmap/Code_Standards)找到 Nmap 的编码指南。

之后，我研究了一些 Nmap Libraries，比如 *stdnse* 和 *http* 库。所有库和脚本都有很好的文档，文档在[这里](https://nmap.org/nsedoc/index.html)可用。**你不需要知道所有东西**。你可以阅读任何你需要使用的东西的文档。你只需要知道代码在哪里。

我开始编写自己的脚本，并开始把东西发到邮件列表上。我从 issue tracker 上接了一些任务并开始处理。这是我的[工作](https://svn.nmap.org/nmap-exp/gyani/)链接。所以这就是我的故事。

# 如何为 Nmap 做贡献？

像任何开源项目一样，你应该立刻做的一件事就是与我们建立联系。我们喜欢交流，虽然不算很多，但我们会帮助任何需要帮助的人。在这里与其他 Nmap Developers 和 Users 建立联系。

- FreeNode 上的 #nmap。如果你刚接触 IRC，我建议使用 IRCCloud
- [seclists](http://seclists.org/nmap-dev/) 上的 nmap-dev
- [seclists](http://seclists.org/nmap-announce/) 上的 nmap-announce，这是一个非常小、帖子很少的邮件列表

你还应该知道源代码在哪里，并且可能应该 fork 一份副本。Nmap 最初使用 svn，现在同时在 git 和 svn 上。Nmap 的 GitHub 仓库在[这里](https://github.com/nmap/nmap/)。svn 仓库在[这里](https://svn.nmap.org)。我对它工作方式的理解是，有一个 bot 会让 svn commits 与 GitHub commits 保持同步。开始接触 Nmap 时，你大概会在 GitHub 上创建 Pull Requests，或者向邮件列表提交 patches，所以目前不必担心 svn。

我们在很多地方有大量文档和信息，这对新人来说可能相当令人困惑。

- 最好的 [NSE 文档](https://nmap.org/nsedoc/index.html)
- [secwiki.org](https://secwiki.org/w/Special:AllPages) 上有很多与安全和 nmap 相关的内容。
- [Seclists](http://seclists.org/) 有很多安全相关邮件列表，对社区中的任何人都有用。
- Nmap 的原作者 *Fyodor* 写了一本关于使用 Nmap Security Scanner 的书。其中一半可以在网上[免费](https://nmap.org/book/)阅读。
- 官方文档和 [Nmap Reference Guide](https://nmap.org/docs.html) 的链接。
- 让我爱上 NSE 的 [DefCon 视频](https://www.youtube.com/watch?v=M-Uq7YSfZ4I)。

我们为每个人都准备了可参与的内容。技术栈相当广。我会尝试列出 Nmap 的各个部分，拥有不同编程知识的人都可以贡献。

- **Python** - Zenmap（Nmap 的 GUI）、Ndiff
- **Lua** - Nmap Scripting Engine
- **C** - Nsock、Ncat、Nbase、nmap-update
- **C++** - Nmap、Nping、libnetutil
- **无编程知识** - 翻译、Fingerprints、文档

你还可以阅读的一些其他资源

- 这里是官方 [Contributing.md](https://github.com/nmap/nmap/blob/master/CONTRIBUTING.md) 文件。
- Jacek *d33tah* Wielemborek 对“如何贡献？”的深入回答可以在[这里](http://seclists.org/nmap-dev/2014/q1/2)找到。我强烈推荐。
- 面向新开发者的 *HACKING* 文件。它讲述了新晋开发者如何贡献。在[这里](https://github.com/nmap/nmap/blob/master/HACKING)找到它。
- 一个带你浏览代码库并解释存在什么以及为什么存在的文件。同样在 [Secwiki](https://secwiki.org/w/Nmap/Code_walkthrough) 上。
- 如前面链接过的 [coding standards 页面](https://secwiki.org/w/Nmap/Code_Standards)。

**更新于 2016 年 12 月 16 日 20:05**。感谢 Fyodor 提供宝贵建议。
