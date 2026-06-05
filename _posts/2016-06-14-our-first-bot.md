---
layout: post
title: DinnerDateBot
subtitle: 一个帮你找到晚餐约会对象的 telegram Bot
tags: [bots, programming, ai]
fb-img: http://gyani.net/img/blog/dinnerbot1.png
---

过去几个月里，我和 [Shubhankar](https://github.com/shubh24) 一直在阅读、思考并讨论机器人和对话式界面。我们一直想构建一个属于自己的 bot。这是我们制作对话式 Bot 的第一次尝试。

&nbsp;&nbsp;&nbsp;&nbsp;![注册](/img/blog/dinnerbot0.png)

这个*想法*是：没有人想独自吃饭。在我们的 Bot 上注册后，它会问你几个简单问题，关于**你在哪里**以及你偏好**什么菜系**。

&nbsp;&nbsp;&nbsp;&nbsp;![查询你的位置](/img/blog/dinnerbot1.png)

根据输入，它会在**十英里**半径内为你找到一个晚餐约会对象，餐厅则是 **Zomato** 上随机挑选的高评分餐厅。餐厅位于你和你的*晚餐约会对象*之间的某个地方。

&nbsp;&nbsp;&nbsp;&nbsp;![匹配！](/img/blog/dinnerbot2.png)

Bot 会设置一个链接，让你们可以互相聊天，讨论比如你们什么时候到达地点之类的事情。如果愿意，你可以和对方分享联系方式。从现在起，所有发送给 Bot 的消息都会被转发给你的*晚餐约会对象*。你随时可以通过发送 */exit* 命令断开转发链接。

&nbsp;&nbsp;&nbsp;&nbsp;![揭晓](/img/blog/dinnerbot3.png)

bot 会告诉你，到达地点后应该发送你的坐标。发送坐标后，你会看到你的*晚餐约会对象*的照片，而你的*晚餐约会对象*会收到一条提醒，告知你已经到达餐厅。

<iframe width="760" height="480"
src="http://www.youtube.com/embed/8-BTZRsUG6o">
</iframe>

在 [telegram](https://bit.ly/DateBot) 上试试 DinnerDateBot。

**更新**：AI 的运行有些奇怪，这个问题正在被积极处理。
