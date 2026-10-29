// Colleague feedback, LinkedIn recommendations only.
// Add an entry only after the recommendation is live on LinkedIn, and quote it word for word
// (trim with "…" if needed). The home section stays hidden while this list is empty.

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

export const feedback: Feedback[] = [];
