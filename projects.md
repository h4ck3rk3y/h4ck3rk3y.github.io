---
layout: page
title: Projects
subtitle: Some code that I have written
comments: false
---

I am not actively updating this list anymore though!
---

## Software

- **[Toy Compiler](https://github.com/psdh/CSF363)** - Developed a toy compiler as a part of our compiler construction course.


## Bots

- **[BroBot](https://github.com/Zephrys/Bro)** - Worked in a team of two to develop a bot that answers queries similar to *Where can I get the best Pizza in Chicago?* or *Where can I get the room with the best view of the Eifel tower? in Paris*. The bot maybe live if you want to try it, look at the [twitter handle](https://twitter.com/broknowsyouknow)
- **[DinnerDateBot](https://telegram.me/DinnerDateBot)** - Worked in a team of two to develop a bot that sets up dinner dates. Used API.ai to make sense of natural language. The bot first gets you reigstered and then asks about your location and your cuisine preference after which it finds you a match.
- **[Birbal](https://telegram.me/BirbalBot)** - Worked in a team of two to build a bot that allows customers to buy the perfect phone for them. Several times people ask me what phone should they buy, Birbal helps you with that and talks just like your techie friend does.

## Websites

- **[BidShyp](http://bidshyp.com)** - Worked in a team of two, to develop a bidding portal for the freight industry. Shippers get to add shipment details of their packages, while freight forwarders get to bid on them. The company aims to be an aggregator in the shipping industry.

-  **[RouteRush](http://routerush.xyz)** - A tool that generates a random itinerary based on your budget. The app chooses from over 150 cities, from a list of most visited cities. Uses the rome2rio api, google places api and the currency.io api.

- **[Musique](http://lamusique.ml)** - Music discovery in a Tinder way. Made it for Microsoft code.fun.do. Allows users to swipe music left or right, provides recommendations based on music that you have swiped right. Creates a playlist of all music swiped right which gets deleted every week so that you discover new music. Uses the soundcloud api.

-  **[First Medical Responders](http://fmr-ircs.in)** - A resource management tool that I developed in the summer of 2015 for the Indian Red Cross society. Allows the society to keep track of disaster management volunteers and contact them in the time of need.

- **[Weblog](https://gyani.net)** - My web presence.

- **DC Search Stats** - Created a website in AngularJs and Flask that would show what is being searched on the campus DC++ network. It had some other features like 'Who searched for X?' and a user list. Received 100,000+ hits in 4 days.

## Android

- **[Auter](https://github.com/Zephrys/Auter)** - An android app that allows that makes auto rickshaw rides safer. Uses the Aadhar API along with Parse.com as backend. Users can verify drivers and send out alerts in case of emergencies. Inspiration was to solve the public transport problem in New Delhi.

## Chrome Extensions

- **[RevMine](https://bit.ly/revmine)** - Quantifies reviews. Reads text parses important features and provides astonishing insights. [Get the extension at the Google Web Store](https://chrome.google.com/webstore/detail/revmine/inmjjendcicpkopjimcmakbiafkgjddb). The repository lies here, [RevMine at Github](https://github.com/Zephrys/RevMineApp).

- **[TrumpCat](https://chrome.google.com/webstore/detail/trumpcat/hfajcdnolhbfcbcfkjkppgjlmfidpnnd)** - The trumpcat extension works to save your eyes from the images of Donald Trump. It simply replaces images of Donald Trump with cute kittens.

- **[ShuffleAndKill](https://chrome.google.com/webstore/detail/shuffle-kill/lpmlbpbaopjjlfilhkpbbkbnlngmdogj)** A simple chrom extension to play songs on YouTube. Open songs on multiple tabs, the extension would automatically kill the tab done playing music and start playing music on a different tab.

## Command Line Apps

- **[Monica](https://github.com/Zephrys/Monica)** - a popular command line app that allows you to order tasty food from the comfort of your terminal. Uses the Zomato API.

- **[Wolfe](https://github.com/h4ck3rk3y/wolfe)** - a command line app that makes development easier by automatically showing you the stackoverflow page of the last error you encountered.

## Data

- **[Recobot](htps://github.com/h4ck3rk3y/recobot)** - a bot that generates recommendations for users of a direct connect hub. Got more than 600 users in the three days I ran it on my campuses direct connect hub.

- **[TuneUp](https://github.com/psdh/tuneup)** - a command line tool that generates recommendations from MovieLens data, made for the information retrieval course.

- **[WhatsintheVector](https://github.com/psdh/WhatsintheVector)** - A text search engine developed as a part of information retrieval course work.

- **[SpamFilter](htps:/github.com/h4ck3rk3y/SpamFilter)** - A simple spam filter using the Naive Bayes model written in python as an assignment for the machine learning course.

## Security

- **PayMate**: As a part of our network security project we built an electronic payment protocol which we called PayMate. It puts TOPT over a modified version of SET.

#### New Nmap Scripts

- **[xmlrpc-methods](https://nmap.org/nsedoc/scripts/xmlrpc-methods.html)** -This script is used to perform introspection of XMLRPC services. This script starts by querying the system.listMethods method and then tries to run system.methodHelp on each method listed by system.listMethods.

- **[http-fetch](https://nmap.org/nsedoc/scripts/http-fetch.html)** - This script supports three use cases, fetching all content on a server, fetching files that match a pattern and fetching files as specified in the command line.

- **[http-svn-enum](https://nmap.org/nsedoc/scripts/http-svn-enum.html)** - Enumerates users of a Subversion repository by examining logs of most recent commits.

- **[http-svn-info](https://nmap.org/nsedoc/scripts/http-svn-info.html)** - Shows the output you would expect by running svn info on an svn repository.

- **[hnap-info](https://nmap.org/nsedoc/scripts/http-svn-info.html)** - The script queries /HNAP to find hnap devices and list information about them. Useful for routers and other such devices.

- **[http-webdav-scan](https://nmap.org/nsedoc/scripts/http-webdav-scan.html)** - This script is used to discover webdav instances. It lists methods exposed to non authenticated users, internal ips and files indexed by the WEBDAV instance.

- **[http-vuln-cve2015-1427](https://nmap.org/nsedoc/scripts/http-vuln-cve2015-1427.html)** - A script that checks for Remote Code Execution Vulnerabilities in Elasticsearch instances.

- **[NTLM Auth in the HTTP Library](https://nmap.org/nsedoc/lib/http.html)** I added NTLM authentication support to Nmap’s HTTP Library.

#### Nmap scripts and libraries not yet in trunk

- **[Repository Link](https://svn.nmap.org/nmap-exp/gyani/)** I have written plenty of updates and bug fixes for the Nmap Scripting Engine. There are more new scripts and some libraries that are not yet in the main trunk but soon will be.

- **[Joomla RCE]** Developed a Script that checks whether a given Joomla! page is vulnerable to remote code execution.

## Talks

- Gave a talk on Nmap Script Development to a crowd of enthusiastic students at Birla Institute of Technology and Science, Pilani.
- Gave a talk on Google Summer of Code to my juniors in Birla Institute of Technology and Science, Pilani.

## Travel

- **The Thousand Dollar Challenge** - The challenge was to around south east asia, for a month in less than 1000 dollars. The amount includes five visas, air tickets, insurance from Kolkata and every other expenditure that I made for the trip. Did it in just under $900. Maybe this inspired RouteRush.

