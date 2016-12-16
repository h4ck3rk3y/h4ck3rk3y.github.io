---
layout: post
title: Contributing to the Nmap Code Base
subtitle: answering the most asked question on nmap-dev
tags: [programming, nmap, lua, scripting, gsoc, opensource]
fb-img: "https://gyani.net/img/blog/nmap.png"
---

![Nmap](/img/blog/nmap.png)

So I have been subscribed to the nmap-dev mailing list for about two years now.

Nmap doesn't have the standard *Contributing to Nmap* page that most open source programs have on their websites. I am convinced that is one of the major reasons people keep asking "How to Contribute?" on the mailing list.

I'll break this blog post into two parts, one that tells my story and my background when I started contributing and the other that talks about how to contribute in general which looks more like a collection of useful resources. My side of the story will lean towards the Nmap Scripting Engine, the part of Nmap that I find the most flexible and exciting.

This post is currently a draft. It might be long, bear with me and sip some tea and help me refine this by letting me know if I should make any edits. I have seen a very small portion of the Code Base and I'll probably miss a lot of things and maybe some interesting components.

# My Story

I started contributing to Open Source in December of 2014. I tried contributing to Sahana Eden, as I liked the fact that the stack was based on Python.

Knowledge of Git, GitHub(the difference between the two), IRC and relevant programming knowledge helps with any organization that you pick. If you know Git which is the most popular version control it shouldn't be tough for you to switch to something like svn or mercurial. Something that I think personally helps is having Linux running on your system. When I started with open source, I used to get awe struck by watching people perform command line magic, it isn't magical it comes with time.

If you are reading this post while thinking of trying for GSoC 2017 remember that GSoC is a beginner-intermediate~~program and is not for experts. If you are an expert then you are better of being a mentor~~-expert level program. There is something for everyone. So if you are new to open source you shouldn't worry much, you should simply try to contribute.

Fyodor, the original author and maintainer of Nmap rightly points out that the Nmap team prefers to select mentors with significant Nmap Development experience and that being a student provides you an opportunity to do more hands-on engineering plus the compensation only goes to students and not mentors. So if you are someone with expert-skills you are still better of starting as a student at Nmap.

Eventually I lost interest in the project and the community and then I decided to switch to a project that is of interest to me, something that has to do with security. I chose Nmap, something that I had played with a bit earlier and something that probably all of us have seen in the movie The Matrix Reloaded.

I started looking around the various parts of Nmap and decided that core Nmap might be a bit too much for me as it's heavy on networking and runs in C/C++.
I had taken to writing scripts in Python and thought that writing scripts in Lua wouldn't be that difficult. I wanted to work on the *hacking* and not the *UI* so Zenmap wasn't an option for me.

I use the word hacking here meaning *gain unauthorized access to data in a system or computer* and not *an appropriate application of ingenuity*. Developing Zenmap requires a lot of thought and skills. As Fyodor says, developing Zenmap requires a mix of good design skills and thinking about the use cases as well as the ability to implement them well in code. Also Zenmap is way more than a GUI, instead it has a lot of complex functionality unlike plain results in a window like some other software.

To get started with Nmap, I made my first contribution around January of 2013. I saw that ZenMap lacked *Hindi* language support. I went through the mailing list nmap-dev and saw that someone had claimed the task of writing a *Hindi* translation but left it midway. I contacted the guy and he said that I could proceed with writing the translation. I went through the instructions of creating a translation file and started translating things into Hindi by typing using Quillpad.

So my first contribution wasn't code. This is something that one should learn. You don't have to contribute code to contribute to open source. There are many different ways to contribute open source, some of them are.

- Contribute translations
- Improve existing documentation
- Submit bug reports when you encounter them
- Get involved by responding to RFCs giving your perspective as a user
- Contribute Actual Code
- Donate if your organization accepts donations
- Show the community some love by sharing cool new features that you like
- Help other users new to the program on IRC
- Submit OS Fingerprints

Then I started going through the NSE scripts. I figured out that I should go with the easy tasks on the [issue tracker](http://issues.nmap.org). One thing that we as a community can have on Nmap are bugs labeled according to difficulty as *easy*, *medium* or *hard.*. This according to me makes any community more beginner friendly.

I picked up a task that required combining two different scripts. Two different developers had written scripts related to Wordpress. One script gathered themes and the other gathered plugin information from the given host. The second script used the first script as a template. The community decided to merge the two scripts into one script called *http-wordpress-enum*. Simply put it would enumerate plugins and themes. I didn't have to know how to make GET, POST requests or how Wordpress worked. A testing environment wasn't required as this wasn't an intrusive script. All that was required was Lua 101 and nothing else. I learned a few things after merging the two. **First not just the code but readability matters and second, follow the coding guidelines set up by the community**. You can find the coding guidelines for Nmap [here](https://secwiki.org/w/Nmap/Code_Standards).

After this I picked up a few Nmap Libraries like *stdnse* and the *http* library. All libraries and scripts are very well documented and the documentation is available [here](https://nmap.org/nsedoc/index.html). **You don't need to know everything**. You can read the documentation of whatever you need to use. You just need to know what code lies where.

I started working on scripts of my own and started putting things on the mailing list. I picked up a few tasks from the issue tracker and started working on them. Here is my a link to my [work](https://svn.nmap.org/nmap-exp/gyani/). So that's my story.

# How to Contribute to Nmap?

Like any open source project one thing you should immediately do is to connect with us. We like to talk, not a lot but we help anyone who needs help. Get connected with other Nmap Developers and Users here.

- #nmap on FreeNode. If you are new to IRC I suggest IRCCloud
- nmap-dev on [seclists](http://seclists.org/nmap-dev/)
- nmap-announce on [seclists](http://seclists.org/nmap-announce/), a really small mailing list with very few posts

You should also know where the source code lies and you should probably fork a copy. Nmap started out on svn and is now on both git and svn. The GitHub repository of Nmap lies [here](https://github.com/nmap/nmap/). The svn repository lies [here](https://svn.nmap.org). How I understand this works is, that there is a bot that keeps the svn commits even with the GitHub commits. To begin with Nmap you'll probably be creating Pull Requests on GitHub or you will be submitting patches to the mailing list so you don't have to worry about svn for now.

We have a lot of documentation and information at a lot of places this is  probably confusing for new people.

- Best possible [NSE documentation](https://nmap.org/nsedoc/index.html)
- There is a lot of security and nmap related content on [secwiki.org](https://secwiki.org/w/Special:AllPages).
- [Seclists](http://seclists.org/) has a lot of security related mailing lists, useful for anyone in the community.
- The original author of Nmap *Fyodor* wrote a book about using the Nmap Security Scanner. Half of it is available online for [free](https://nmap.org/book/).
- A link to the official documentation and the [Nmap Reference Guide](https://nmap.org/docs.html).
- The [DefCon video](https://www.youtube.com/watch?v=M-Uq7YSfZ4I) that got me to love NSE.

We have something for everyone. The stack is pretty wide. I'll try to list out the various parts of Nmap, different people with different programming knowledge can contribute to.

- **Python** - Zenmap(Nmaps GUI), Ndiff
- **Lua** - Nmap Scripting Engine
- **C** - Nsock, Ncat, Nbase, nmap-update
- **C++** - Nmap, Nping, libnetutil
- **No Programming Knowledge** - Translations, Fingerprints, Documentation

Some other resources that you could go through

- Here lies the official [Contributing.md](https://github.com/nmap/nmap/blob/master/CONTRIBUTING.md) file.
- An in depth answer to How to Contribute? answered by Jacek *d33tah* Wielemborek can be found [here](http://seclists.org/nmap-dev/2014/q1/2). I highly recommend this.
- The *HACKING* file for new developers. It talks about how to contribute for upcoming developers. Find it [here](https://github.com/nmap/nmap/blob/master/HACKING).
- A file that walks you through the code base and explains what exists and why it exists. Again on [Secwiki](https://secwiki.org/w/Nmap/Code_walkthrough).
- As linked earlier the [coding standards page](https://secwiki.org/w/Nmap/Code_Standards).

**Updated 16th December 2016 20:05**. Thank you Fyodor for your valuable suggestions.
