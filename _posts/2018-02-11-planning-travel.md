---
layout: post
title: Planning travel
subtitle: .. can it be a little easier?
tags: [travel, planning, ideas]
fb-img: https://gyani.net/img/lake.jpg
---

# Past Work

In 2016 Prabhjyot and I had built this tool that we called RouteRush, it's sole job was to come up with an itenirary. The app was simple
enter some amount of money and it would find out where you are and will come up with a trip that takes you somewhere.

Say you entered $1000, it would find out the cheapest flights for you by picking cities at random and seeing if you can go there and come abck with
40% of your flight budget ($400) giving you 60% of your budget for hotels and such. If the random cities didn't work it would find the closest
city to you and take you there anyway.

We used some data from Numbeo to figure out how much it costs to live in a place. So if you entered $1000, $400 went into the flight
tickets, it would start budgeting how much time to spend in the city. As it was for a hackathon we decided to filter out high rated
tourist places in your city of choice and came up with an arbitrary limit of 4 activities a day. So if the random city that was
picked for you had 10 things in the filtered google maps result, we would keep you there for 3 days. We had a random limit of 5 days in
a city if I remember corectly.

After you were done with a city it would take you to the closest tourist city while ensuring you had enough money to comeback.

A little later in 2017 in another Hackathon, I added another feature to it allowing users to pick countries/continents that they wanted to visit.
I made the route finder more stable and tweaked the algorithm a little to produce multiple iteniraries. Using my limited
UI skills I even made the route finder look a little better.

After the above changes. I decided to create an extension. If you were at a page talking about a city that you liked, if you clicked on
the said extension the city would be added to the your trip. It would try to parse what about the city is being talked about and
woudld add it as a note. The idea was that people like to travel cause they like to explore, and coming up with places is a part
of the exploration. One site can't have it all and you'd probably go around the internet to find out where to visit.

The above idea was long forgotten. The free AWS instance that was running the above application has been dead for long after running a few
more apps and landing pages.

I would have possibly taken the idea forward had I known anyone good with UI/UX. My main problem with creating a product for the 
web is not knowing UX. Back-ends are fun, so are smaller services but for the life of me I can't handle UI/UX.

# 2018

## O, Canada

![Really looking forwad to Lake Louise](/img/lake.jpg)

So I have been planning a few trips recently. The most recent one has been my trip to Canada. So my parents wanted to visit me in London
and also go to Canada for a total of 20-30 days. The above trip can be done in a lot of permutations. Few of them are,

- Home -> Kolkata -> London -> Cities in Canada -> New Delhi -> Home
- Home -> Kolkata -> London -> Cities in Canada -> Kolkata -> Home
- Home -> Kolkata -> Cities in Canada -> London -> New Delhi -> Home
- Home -> New Delhi -> Cities in Canada -> London -> New Delhi -> Home
- Home -> New Delhi -> London -> Cities in Canada -> London -> New Delhi -> Home

As we were pretty flexible with the dates we could choose any of them given it met our budget and had decently priced comfortable flights. I wish
there was an interface that gave me the best results and even better let me choose between them.

Something interesting that can possibly included is the idea of a recommended layover

- Home -> New Delhi -> Tokyo -> Cities in Canada -> London -> Dubai -> Home

If there are flights with really long layovers that can possibly be broken up into two flights without much extra cost
my parents would be able to visit new cities during their layover. Maybe the interface could ask us where we were from and even
recommend layovers for which we don't need visas or can easily get visas.

Maybe I should also be able to search holidays by Beach, Mountains, Night Life, Theater, History or any other cateogries.

## Smaller European Trips

My friends at work love exploring different cities around Europe turns out you can go to Germany and come back for 20 pounds. Sky Scanner
shows this. I'd like to search for flights that leave after my work day ends and come back before my work day starts. On SkyScanner
you go through the muliple results provided only to find out that they interfere with work. They could use such a feature.


