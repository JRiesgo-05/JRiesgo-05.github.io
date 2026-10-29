---
title: 'Ask for ten, keep one'
description: 'Why I ask an agent for ten ways to explain something instead of one chart, and the one line that keeps the ten comparable.'
pubDate: '2026-10-29'
tags: ['artifacts', 'workflow']
draft: false
---

Most of us explain something with the first visual that comes to mind. A slow job gets a bar chart. A new page gets one mockup. That's reasonable, and one good chart is often enough.

But the first idea is the agent's default too. When I ask for one, I get the most obvious version, and I never find out what would have worked better. So I've stopped asking for one explanation. I ask for ten and keep what lands.

## Ten ways to explain

A while ago I had to explain why a data job had slowed down. Every run asked the warehouse to list every file in a storage bucket, three times, when it only needed today's folder. Normally that's one chart.

Instead I asked for one artifact with ten ways to explain it, and the same facts in each. I got an analogy about a librarian who walks every shelf, a timeline, a slider that plays one run second by second, five whys, a waterfall of saved seconds, a before-and-after, a what-if simulator, a system map, an annotated code walk and a one-page summary. Most of those I wouldn't have thought to ask for by name.

**Example prompt:**

> Explain why this job got slow in ten different ways, as one artifact with a tab for each: an analogy, a timeline, a simulator, a code walkthrough and so on. Use the same facts in every tab, and make each one visual first.

[Here's what that prompt made,](/examples/ask-for-ten/) with the system and the numbers swapped for made-up ones.

Different readers pick different tabs. The analogy works for someone outside the team, the waterfall for whoever asks what we save, and the code walk for whoever reviews the fix. I keep the two or three that land and drop the rest.

**Use this for:** explaining an incident · a design review · teaching a concept · a status update for people outside your team

## Looks, not just explanations

The same move works for style. When I set up this site, I didn't know what I wanted it to look like. I asked for one artifact with ten landing-page styles, all with the same words, looked at them side by side and picked Quiet Minimal, the style you're reading now.

**Example prompt:**

> Propose ten landing-page styles as one artifact, each a full page. Use the same copy in every one, so only the styling differs. Make them as different from each other as you can.

**Use this for:** picking a visual style · a one-pager layout · the first draft of a diagram

## Name what stays fixed

Both prompts above have one line doing the real work: "same facts in every tab" and "same copy in every one". That line is what makes the ten comparable. Leave it out and you get ten different things instead of ten versions of one thing, and the agent isn't wrong to give you that.

You don't need a skill or a template for this. It's one extra sentence in the prompt.

## Questions I get

**Do you always ask for ten?** No. If I already know what fits, like a line chart that's exactly what the reader needs, I ask for that one thing and move on. Ten is for when I don't know yet what the right picture is.

**Isn't ten too many?** On purpose, yes. Three options are often three takes on the same idea. By seven or eight the agent has to try things it wouldn't pick first, and that's often where the one I keep comes from.

**Doesn't it cost more?** A little. It assumes you have some tokens to spare. In practice, ten rough sketches in one artifact aren't that expensive, and I've found they're cheaper than ten rounds of "a bit more like this".

**Do you ship all ten?** No. They're sketches. I keep one, sometimes one per audience, and build that properly.

## The real reason

I'm bad at describing what I want and good at recognizing it. Asking for ten turns explaining into choosing, and choosing is the part I'm good at.

I hope it gets you past the first chart.
