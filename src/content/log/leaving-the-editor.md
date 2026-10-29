---
title: 'The month I stopped opening VS Code'
description: 'Four steps from Copilot autocomplete to Claude Code desktop, and the moment I told my team the editor could go.'
pubDate: '2026-10-29'
tags: ['tools', 'journey']
draft: false
---

Most of us code with AI inside an editor. VS Code is where the files are, where the terminal is, and where the AI shows up as a sidebar or a gray suggestion. That's reasonable. The editor was the workspace long before the AI arrived.

But this October I noticed I'd stopped using the editor for editing. I opened VS Code to read a diff, run a command and click through a folder. The writing happened somewhere else. Once Claude Code desktop had a terminal, a file pane and a diff view of its own, I told my team it was time to drop VS Code.

That took four steps. Each one moved a little more of the work off my keyboard.

## Four steps out

**Copilot autocomplete.** The AI finished my lines. I still wrote every function, and I still read every character because I was the one typing it.

**Agentic Copilot in VS Code.** The AI wrote whole changes across files. I stopped typing most of the code and started reviewing it. The editor was still the center, but I used it more to read than to write.

**Claude Code for VS Code.** The agent did the work and the editor showed me what it did. I mostly used VS Code as a viewer: open the diff, check a file, run something in the terminal.

**Claude Code desktop.** The viewer came with the agent. Terminal, file explorer, diffs and a browser pane all sit next to the conversation. The last reason to keep VS Code open was gone.

[Here's one small Python fix, done four ways,](/examples/leaving-the-editor/) with what I typed, what the AI did and how many windows I touched at each step.

## The editor became a viewer

The step that mattered was the third one, and I didn't notice it while it happened. I was still opening VS Code every morning, so I assumed I still needed it. When I looked at what I actually did in it, almost none of it was editing.

That's the question I'd ask yourself. Not "is the new tool better", but "what do I still open the old one for". If the answer is a list of things the new tool already shows you, you're keeping the old one out of habit.

**Example prompt:**

> Start the dev server, open the page you just changed in the browser pane, and show me the diff for this session.

That one line covers the three things I used to switch to VS Code for: running it, seeing it and reviewing it.

**Use this for:** deciding whether to drop a tool · auditing your own setup · onboarding someone who's still in the old workflow

## Telling the team

Saying "ditch VS Code" to a team sounds bigger than it was. I wasn't asking anyone to learn a new editor. I was saying the editor had stopped being the place the work happened, and they could stop paying the cost of switching windows to look at it.

I'd suggest not turning this into a migration plan. Try one week in the desktop app. If you keep reaching for the editor, note what for. That list tells you whether you're ready.

## Questions I get

**Do you never open VS Code now?** Rarely. If I want to hand-edit a big file myself, an editor is still nicer. That's become the exception, not the day.

**Isn't this just trading one tool for another?** Partly, yes. The difference is that the review tools now live next to the agent doing the work, so I don't lose my place switching between them.

**What did you give up?** Extensions I'd built habits around, and the comfort of a layout I'd used for years. Some of that I still miss.

## The real reason

I didn't drop VS Code because something shinier came along. I dropped it because my job had changed from writing code to reading and steering it, and my tools should match the job I actually do.

I hope it helps you notice when yours has changed too.
