// Colleague feedback, LinkedIn recommendations only.
// Add an entry only after the recommendation is live on LinkedIn, and quote it word for word
// (trim with "…" if needed). Newest first. The home section and the nav link stay hidden while
// this list is empty.

export const RECOMMENDATIONS_URL =
	'https://www.linkedin.com/in/jerimiah-riesgo-598070190/details/recommendations/';

export interface Feedback {
	quote: string;
	name: string;
	role: string; // their role when we worked together
	context: string; // e.g. 'Worked together at Accenture'
	date: string; // when they wrote it, e.g. 'Nov 2026'
	profileUrl: string; // their LinkedIn profile
}

export const feedback: Feedback[] = [
	{
		quote:
			'Jerimiah is an exceptional professional with a strong work ethic and genuine commitment to his work. His insights into AI brought a fresh perspective to the team and encouraged us to explore new approaches and opportunities. It has been a pleasure working with him and I would confidently recommend him to any organization.',
		name: 'Mart Rainier Medrano',
		role: 'Senior Python Developer',
		context: 'Same team at WPP Media',
		date: 'Oct 2026',
		profileUrl: 'https://www.linkedin.com/in/mart-rainier-medrano-b9644384/',
	},
];
