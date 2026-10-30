---
title: 'I *wrote* my own aircon remote'
description: 'Modded games, a video that made me message a creator for the first time, and the afternoon I replaced a bad vendor app with one I own.'
pubDate: '2026-10-30'
tags: ['ownership', 'agents']
draft: false
---

Most of us live with the software we're given. The bank app, the router page, the app that came with the aircon. If it's slow or ugly, we complain and keep using it. That's reasonable. Writing your own replacement used to cost weeks, and nobody spends weeks on a remote control.

Our aircon app is that kind of app. It feels like 2012 called and wanted its UI back. Two weeks ago I stopped living with it and had Claude write me a new one in an afternoon. Now there's a menu bar app on my Mac and an Android app on my partner's phone, and neither of us opens Daikin's app anymore.

I say I *wrote* it, but let's be honest. Claude did the research, the reverse engineering and every line of code. I steered, read numbers off a sticker and complained about the old app. The complaining I'm very good at.

## How I got here

It started on X. My feed kept showing modded games doing things that weren't possible a few years ago. Not new skins or a tweaked menu, but whole systems rebuilt by a handful of people.

Then I watched [Everything Is Everything Now](https://www.youtube.com/watch?v=jp7hM1vKRpY) by Big A, about how far these modders have taken it. I won't retell it, you should watch it. It hit me hard enough that I messaged the creator with my view on it. I'd never done that before, for any creator.

What stuck with me was an older conversation. When I was at Accenture, before agents were really a thing, my mentor Seb and I talked about what they'd mean. Our guess was that the best part wouldn't be speed. It would be that everyone gets their own version of the software they use, tailored to how they actually work.

That was about a year and a half to two years ago. It's not a guess anymore. It's *happening*.

## The tweet that made me try

Then, two weeks ago, I saw [this post](https://x.com/icanberk/status/2109031477484937571): someone controlling their aircon from a small menu bar app they'd built. An icon and the temperature, sitting in the top bar. I wanted that.

So I opened Claude Code and asked, typos and all:

**Example prompt:**

> do you know daikin king split type ac? can we vibecode an app to have the remote control for it?

Claude's first answer was honest. If the unit has Wi-Fi, Daikin's official app already works, so there's nothing to build. My reply was the whole reason for the project:

> but they suck that's the main reason i want one

From there I mostly answered questions. I read out the sticker on the indoor unit, joined the adapter's hotspot on my phone and opened a few URLs Claude gave me. One came back "page not found" and another came back "method not allowed". That second error was the good news. It told Claude which adapter family it was, and that an open-source driver already mapped its local API.

Then it scanned my network, found the AC and read its state: on, cool, 25°C, room 26°C at 50% humidity. It built a phone web app, opened the post I'd linked, saw it was a menu bar app and built that too, natively, in Swift. When I asked about my partner's phone, it wrote an Android app and built it on GitHub Actions because my Mac had no Android tools.

The first design worked, and it looked like every other remote app. So I cropped a frame from the post's GIF, sent it with "like where airflow is going?" and then "i want that vibe of app as well btw". About 90 minutes later I had a dark panel with a little AC drawing whose air points where the flaps point, and I can drag the air to aim it. I never described the design in words.

The part I liked most was how it learned my AC. The driver didn't know where my unit kept the flap positions or Eco mode. So Claude started a recorder, I pressed buttons on the physical remote, and it watched which values changed. That's how it learned my AC. I'd never have thought to do that.

[Here's the whole session, condensed,](/examples/own-your-remote/) with my messages as I typed them and what Claude did between them.

**Use this for:** a vendor app you hate · a router or printer page from 2009 · a dashboard you check every day but can't change · any device with a local API nobody documented

## How low the bar is

What still surprises me is how little it took to start. No plan, no repo, no spec. My first message was one line with "vibecode" in it, and I didn't know the AC's model number yet.

Every place I expected to get stuck, it wasn't a wall:

- **No Wi-Fi docs for my model.** Claude worked it out from two error pages I pasted back.
- **No admin rights on my Mac.** The app runs from my own folder, so it didn't matter.
- **No Android tools installed.** It built the app on GitHub Actions instead.
- **No hardware to buy.** The adapter was already in the AC. I'd just never connected it.

- **No GitHub CLI or Git login on this Mac.** Claude used my own Chrome through the Claude in Chrome extension. It created a private repo where I was already signed in and uploaded the code folder by folder.

A few years ago any one of those would have ended the project, or never let it start. Now the friction is so low that the hardest part was deciding the app was worth complaining about.

## It's open source underneath

I assumed the aircon was a black box. Daikin's hardware, Daikin's protocol, Daikin's app, and nothing I could see inside.

Then I opened the root page of the Wi-Fi adapter, expecting a login screen. It was a list of the open-source software it's built on. The thing I thought was locked shut was running the same kind of code I use at work.

It makes sense once you see it. Nobody writes a network stack from scratch for an aircon. They use what's already out there, and so do the people on the other side. Claude didn't invent the protocol. It found [pydaikin](https://github.com/fredrike/pydaikin), the library Home Assistant uses, read the file for my adapter type and built on it. Someone in that community had already mapped the API I needed.

That shattered how complicated I thought this was. I'd pictured weeks of packet sniffing. The real work was knowing which library to read, and Claude knew in a few searches. When I looked at what it was actually using, it was a handful of open-source packages and a JSON endpoint.

So before you assume a device is closed, look for the community that's already taken it apart. For most popular hardware, someone has.

**Example prompt:**

> Before writing anything, find which open-source projects already talk to this device and show me the file that maps its API. Then tell me what's missing for my model.

**Use this for:** smart home devices · printers and routers · any vendor app with a Home Assistant integration

## My browser joined in

The Chrome extension surprised me more than I expected. Once the apps worked, I asked:

> can you do that stick the ac ip? we can go to my router config in chrome maybe?

It worked out the router model from its address, opened the admin page in my Chrome and stopped at the login, because passwords are mine to type. After I signed in, it found the DHCP page, picked the AC from the router's own client list and staged the reservation. Then it asked before clicking Apply.

That's the same pattern as the GitHub upload. It drives the boring web pages, and hands the wheel back for passwords, secrets and anything it can't undo. I'm saving the rest for its own log.

## What I actually did

Looking back at the chat, I wrote almost no technical sentences. I named the device, said what I didn't like, answered questions about the sticker and the lights, and said "let me see it first before committing". Claude did the research, the reverse engineering and the three apps.

That's the shift for me. The cost of owning your version of a piece of software dropped from weeks to an afternoon of answering questions. Once that's true, every annoying app becomes a question: do I keep living with this, or do I write my own?

I'd suggest starting with one thing that annoys you daily. Not a platform, not a "personal software stack". One remote.

## Questions I get

**Did you need to know how the AC talks?** No. I didn't know what DSIoT was until Claude found it. I knew which errors to paste back, and that was enough.

**Is it safe to point an agent at your home network?** It asked before scanning, and every first request was read-only. Its first write set the temperature to the value it already had. I'd still read what it plans to run before you say yes.

**Did it fully escape Daikin?** Not quite. The Wi-Fi pairing step is only known to Daikin's app, so I installed it once, paired, and deleted it. Everything after that talks to the AC directly over my home Wi-Fi.

**What did it cost?** One afternoon and a bit of the next day. A few things it got wrong, like assuming my unit had no Eco mode. I corrected it, and it went and found the setting.

## The real reason

Seb and I talked about this future like it was far off. Fixing a remote for my own house turned out to be the first time I felt it for real. Any software that annoys me is now something I can change, and I think this is just the beginning.

I hope you find your remote.

Next time I want to write about the other side of this. That one Daikin step I couldn't get around is the catch: when a device only works through the vendor's cloud, you never really own it. I'm calling it the cloud leash.
