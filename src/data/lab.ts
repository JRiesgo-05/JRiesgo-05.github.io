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
		name: 'Test-driven development',
		status: 'Testing',
		by: "Matt Pocock's skills",
		href: 'https://github.com/mattpocock/skills',
		body: 'Red, green, refactor, with the agent writing the failing test first. I want to see whether it keeps agents honest on bigger changes.',
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
		title: 'Astro content collections, explained with Django',
		href: '/examples/astro-vs-django/',
		body: 'A clickable pipeline, a live data view and a timeline, from one short prompt.',
	},
];
