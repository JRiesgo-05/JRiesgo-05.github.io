---
title: 'Name the gap, not the fix'
description: 'How three short reactions turned a correct but flat artifact into one I actually learned from, and why I stopped trying to write the perfect prompt first.'
pubDate: '2026-10-29'
tags: ['artifacts', 'workflow']
draft: false
---

Most of us try to get the prompt right before we send it. We spell out the sections, the layout, which diagrams go where. That's reasonable. A good spec saves rounds.

But I can't spec what I haven't seen. When Claude set up search for this site, I asked it to make me a page explaining what it did and why. The first version was correct and complete, and I didn't learn much from it. I couldn't have told you why until it was in front of me.

So I stopped polishing the first prompt. I send a short one, look at what comes back, and say what's missing.

This is my style, not a rule. Some people think best by writing the spec first, and a good one up front will serve them better than three rounds of reacting. If you're more like me, and you only know what you want once you see it, this might fit you too.

## Name the gap, not the fix

Three prompts got me from a reference page to something I actually understood. Here they are, typos and all:

1. "create an artifact after just what you did there i want to learn it how it works and why you did it"
2. "add visualization for the examples"
3. "Make it more story based and more tangible visualization"

The first round was a reference page: Google's four steps, then each change with what and why. Correct, and flat. The second added a diagram to every change. Better, but still a list of parts. The third turned it into a story: the site became a house in a town with no road to it, the sitemap became a floor plan, the structured data became an ID badge, and the whole thing became a map you step through as each change builds a way in.

I never asked for a map or a badge. "More tangible" was enough. If I'd asked for a map, I'd have got a map, and only a map.

**Example prompt:**

> This is correct but I'm not learning from it. Make it more story based and more tangible: something I could picture, not a list of facts. Keep every fact that's already there.

[Here's what the three rounds made,](/examples/steer-the-artifact/) side by side, with each prompt next to the version it produced.

**Use this for:** an explainer you need to actually understand · onboarding docs · a workshop handout · a page whose look you can't describe yet

## One gap per round

Each prompt named one thing. Round two only added pictures and kept the text. Round three changed the frame and kept every fact. That's why it converged in three rounds instead of wandering.

Bundle three complaints into one reply and you invite the agent to rework everything, including the parts that already worked. One gap at a time keeps what's working.

## Where this fits with asking for ten

[Ask for ten, keep one](/log/ask-for-ten-keep-one/) is for when I don't know the direction yet. I see ten and pick. Naming the gap is for after that, when one version is close and I want to push it the rest of the way.

They feed each other. Asking for ten gives me new words for what an artifact can be. Naming the gap is where I spend them: "story based" and "tangible" did more work in round three than a paragraph of spec would have.

You don't need a template for this. It's a short reply after you've looked.

## Questions I get

**Why not write one perfect prompt up front?** I've tried. A spec describes what I can already imagine, which is roughly version one. The parts I didn't know to ask for only show up once I can react to something.

**Doesn't it take more rounds?** Yes, three here instead of one. Each prompt took seconds. Reading each version took minutes, and that reading is where I learned the material.

**When doesn't this work?** When the first version is wrong, not flat. If the facts are off, I fix those first, or start over with better context. Steering polishes a draft. It can't rescue one built on a bad premise.

## The real reason

The page was there for me to learn from, and reacting to it is how I read it closely. To say what was missing, I had to understand what was there.

I hope it gets you to send the short prompt and look.
