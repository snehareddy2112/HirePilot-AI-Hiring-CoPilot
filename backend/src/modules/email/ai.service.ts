export function analyzeCandidate(
  subject: string,
  body: string
) {
  return {
    aiSummary:
      `Candidate appears interested in "${subject}". The profile looks promising and should be reviewed by the recruiter.`,

    score:
      Math.floor(
        Math.random() * 21
      ) + 80,

    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],

    missingSkills: [
      "AWS",
      "Docker",
    ],

    github:
      "github.com/candidate",

    portfolio:
      "candidate.dev",

    shortlist: true,

    recommendation:
      "Strong Hire",
  };
}