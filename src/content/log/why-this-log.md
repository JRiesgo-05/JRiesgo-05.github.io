---
title: 'Why I keep this log'
description: 'Three rules for learning fast with AI, and why I started writing them down in public.'
pubDate: '2026-10-28'
tags: ['learning', 'ai']
---

Most of us learn with AI the same way now. You hit something you don't know, you ask, you get a good answer in seconds, and you move on. It works. I do it dozens of times a day.

But I noticed I was asking the same questions again a few months later. An answer that took ten seconds to get took about ten seconds to lose. The speed that made AI great for learning also made the learning disappear.

So I started writing down what stuck. Not everything, just the things that changed how I work.

## Showing the work

There's a bigger reason too. When I talk about my workflow with a team or in a workshop, "I use AI a lot" doesn't mean much. I want something real to point at: how I got here, from my first GPT-2 experiment to how I work today, and the skills, repos and workflows I've tested along the way.

Right now my daily driver is thin prompts and thick artifacts. I'm testing [pstack](https://github.com/cursor/plugins/tree/main/pstack) by Lauren Tan, and I've moved on from heavy spec-driven development. The [Lab](/lab/) shows where each one stands, and each gets an entry once I know whether it stuck, including the ones that didn't.

These are the three rules I keep coming back to.

## Learn through what you know

I don't ask an agent to explain something from scratch anymore. A from-scratch answer is generic, and generic answers don't stick. Instead I tell it what I already understand, like a framework I've used or a project I've shipped, and ask it to build from there.

Then I edit the answer down, hard. If I can't get it to a few sentences I could say out loud, I don't understand it yet.

**Example prompt:**

> Explain MCP in terms of FastAPI routes and Pydantic models, as a one-page artifact with visualizations and animated examples. Keep the text under five sentences, and show where the comparison breaks.

[Here's what that prompt made.](/examples/mcp-vs-fastapi/) The last part matters. Every analogy breaks somewhere, and the place it breaks is usually the thing worth learning.

I ask for an artifact instead of a chat reply because I actually read a page with a diagram. A wall of text I skim.

**Use this for:** picking up a new framework · reading an unfamiliar codebase · learning a new team's vocabulary

## Principles over band-aids

A patch fixes today's bug. A principle fixes the next ten.

When something breaks, it's tempting to take the first fix that works, especially when an agent hands you one in seconds. I've found it's worth one more question: why did this break at all? The answer to that is usually a rule I can reuse, and the rule is what goes in this log.

**Example prompt:**

> This test fails about one run in ten. Don't fix it yet. List what has to be true for it to pass every time, and tell me which of those isn't.

**Use this for:** flaky tests · bugs that keep coming back · anything you've fixed twice

## Change the angle

Code is one layer over the real job, which is turning inputs into outcomes. It's easy to forget that when the code is right in front of you.

The same goes for how we look things up. Searching Google and asking an agent are the same act: moving information into my head. The agent just moves it faster. I try to spend the time it saves one level up, on whether I'm solving the right problem.

**Example prompt:**

> Before you write any code, tell me what goes into this feature and what has to come out. Then tell me if it needs code at all, or if a config change, a spreadsheet or a fix to the process would do.

**Use this for:** new features · automation requests · any task where the first idea is "write a script"

## Questions I get

**Doesn't writing everything down take time?** Yes, a few minutes per entry. I've found it's cheaper than relearning the same thing in three months.

**Isn't some of this obvious?** Some of it, yes. You'd be surprised how many people on a real team still don't do it. Knowing a move and making it a habit are different things, so I write the obvious ones down too.

**Why public?** Writing for someone else makes me cut the parts I don't actually understand. A private note lets me get away with them.

**Do you write these with AI?** I use agents to help draft and edit. The learning, the examples and the opinions are mine.

## The real reason

I keep this log because it keeps me in the loop with my own learning. When everything comes back in seconds, it's easy to stop thinking and just accept what you're given. Writing it down is how I make sure I actually understood it.

I hope it helps you stay in the loop too.
