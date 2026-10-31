# Writing rules

How every page and log entry on this site should read. Modeled on how Thariq Shihipar writes about Claude Code: first-person, plain, and carried by real examples you could copy.

Read this before writing or editing any copy. Each rule has a before and after taken from this site.

## 1. Talk as "I", advise as "you"

Tell what happened to me in first person. Give advice in second person. Don't write as a faceless "one" or a corporate "we".

> **Before:** Learning with AI is fast but easy to forget.
>
> **After:** I learn almost everything through AI now, and I forget most of it just as fast.

## 2. Open with the normal way, then where it broke for me

Start with what most people do today and why it's reasonable. Then say plainly where it stopped working for me, with a number if I have one. Then say what I do instead.

> **Before:** This log documents my learnings.
>
> **After:** An answer that took ten seconds to get takes ten seconds to lose. So I started writing down what stuck.

## 3. Admit things

Say what I find hard, what I stopped doing, what I was afraid of. Honest admissions make the advice believable.

> **Before:** Long explanations are inefficient.
>
> **After:** If an explanation is longer than a few sentences, I don't actually understand it yet.

## 4. Every claim gets an example

A section runs: claim, then a concrete example from my work, then why it matters. No claim stands alone.

> **Before:** I look for the principle behind a fix.
>
> **After:** A patch fixes today's bug. A principle fixes the next ten. When a test fails one run in ten, I don't retry it. I ask what has to be true for it to pass every time.

## 5. Show the exact prompt

When the advice involves AI, show a real prompt under **Example prompt:**. Make it specific: name the thing, give constraints, say what the output should look like. A reader should be able to paste it and adapt it.

> **Example prompt:** Explain MCP to me in terms of FastAPI routes and Pydantic models. Keep it under five sentences, and tell me where the comparison breaks.

## 6. Follow examples with "Use this for:"

After an example, list two to five situations where the same move works. Short fragments, no full sentences.

> **Use this for:** picking up a new framework · reading someone else's codebase · onboarding to a new team's jargon

## 7. Short labels for headings

Headings are two to four words and name the idea: "Information density", "Learn through what you know". No questions-as-headings, no clever puns, no numbering unless it's a real sequence.

## 8. Short paragraphs, plain words

Two to four sentences per paragraph. Prefer the common word: "use" over "leverage", "help" over "empower". Emphasize with italics on one word, never with exclamation marks or bold sentences.

## 9. Hedge lightly and honestly

"I've found", "in practice", "for me" are fine. They mark experience, not doubt. Don't stack them, and don't hedge things I'm sure about.

## 10. Name the downsides

If there's a cost, say it. A short FAQ works well for the questions people actually ask, with straight answers, including "yes, this is slower".

> **Doesn't writing everything down take time?** Yes, a few minutes per entry. I've found it's cheaper than relearning the same thing in three months.

## 11. Don't over-engineer the advice

If the trick is simple, say so. Warn against turning it into a framework, a skill, or a process before the reader has tried it by hand.

## 12. End on the real reason

Close with one short personal paragraph: the actual reason I do this, and a one-line wish for the reader. No summary of the sections above.

> I keep this log because it keeps me in the loop with my own learning. I hope it helps you stay in yours.

## 13. Show it, don't just describe it

The mantra: thin prompts + thick artifacts and context + thin skills. When an idea has structure (a mapping, a flow, a comparison), make an artifact: an HTML page, a diagram, a small interactive. Put it under `public/examples/<name>/` and link to it from the text with "Here's what that prompt made."

> **Before:** An MCP tool is like a FastAPI route, and the comparison breaks because the model picks which one to call.
>
> **After:** The same sentence, plus a link to a page with the mapping side by side and a demo of the model picking a tool.

## 14. Put pictures in

I love pictures in a post. When I'm describing something visual, or showing UI Claude made, a screenshot beats a paragraph. Show the first version and the final one, and the reference I pointed at in between, so the reader sees the steering instead of taking my word for it.

> **Before:** The first design worked but looked generic, so I sent a reference and it rebuilt the panel.
>
> **After:** The same sentence, plus the first screenshot, the frame I sent and the finished panel side by side.

Put images next to the example under `public/examples/<name>/`. Give each one alt text that describes what's on screen, and a short caption in my voice. Cap the width so a tall phone screenshot doesn't take over the page, and check the page at phone and desktop width. Crop out anything personal: network names, addresses, usernames, other people's messages.

## Never

- Hype adjectives: "revolutionary", "game-changing", "seamless", "cutting-edge" (except in a direct quote).
- Openers like "In today's fast-paced world".
- Emoji in copy.
- Lists of claims with no example under them.
- Copying someone else's sentences. Borrow the structure, write my own words.

## Shape of a log entry

1. Opening: the normal way, where it broke for me (rules 2–3).
2. One to three sections with short label headings, each with an example and, where it fits, an **Example prompt:**, **Use this for:** and screenshots (rules 4–7, 13–14).
3. Optional FAQ for the obvious objections (rule 10).
4. Closing paragraph with the real reason (rule 12).
