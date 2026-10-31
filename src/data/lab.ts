// Workflows and tools on the Lab page. Status moves items between columns.

export type Status = 'Driving' | 'Testing' | 'Moved on';

export interface LabItem {
	name: string;
	status: Status;
	by: string;
	href?: string;
	body: string;
}

export const MANTRA = 'Thin prompts + thick artifacts and context + thin skills.';

export const lab: LabItem[] = [
	{
		name: 'Thin prompts, thick artifacts',
		status: 'Driving',
		by: 'My own mantra, after Thariq Shihipar',
		href: 'https://x.com/trq212/status/2052809885763747935',
		body: 'Short prompts, rich context going in, and an HTML page or diagram coming back. Skills stay a few lines each.',
	},
	{
		name: 'Ask for ten, keep one',
		status: 'Driving',
		by: 'My own habit, written up in the log',
		href: '/log/ask-for-ten-keep-one/',
		body: 'When I explain something to other people, I ask for ten ways in one artifact, same facts in each, and keep the two or three that land for that audience.',
	},
	{
		name: 'pstack',
		status: 'Testing',
		by: 'Lauren Tan (poteto)',
		href: 'https://github.com/cursor/plugins/tree/main/pstack',
		body: 'A stack of skills, playbooks and engineering principles for agent work. I run a Claude Code port of it locally.',
	},
	{
		name: 'Jev and System One models',
		status: 'Testing',
		by: 'TypeSafe',
		href: 'https://github.com/typesafe-ai/skills',
		body: 'Small models that return typed judgments instead of chat. I test them for routing and grading, where a full chat model is overkill.',
	},
	{
		name: 'Spec-driven development',
		status: 'Moved on',
		by: 'HTML plans',
		body: 'Before any multi-file change, the agent wrote the spec as an interactive HTML plan and I reviewed it first. I kept the habit of reviewing artifacts and dropped the heavy spec step.',
	},
];

export const examples = [
	{
		title: 'MCP, explained with FastAPI',
		href: '/examples/mcp-vs-fastapi/',
		body: 'A clickable map, one function under two decorators and a demo of who picks the tool, from one short prompt.',
	},
	{
		title: 'One slowdown, ten ways to explain it',
		href: '/examples/ask-for-ten/',
		body: 'An analogy, a simulator, a code walk and seven more, from one prompt.',
	},
	{
		title: 'Three rounds, one artifact',
		href: '/examples/steer-the-artifact/',
		body: 'Three short prompts that turned a flat reference page into a story you can step through.',
	},
];
