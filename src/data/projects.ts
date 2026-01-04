export type Project = {
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
};

export const featuredProjects: Project[] = [
    {
        title: "Recipe App",
        description:
            "A recipe browsing app using MealDB API with search and category filtering.",
        tech: ["React Native", "Expo", "TypeScript"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "English Quiz App",
        description:
            "Quiz app for beginner to intermediate learners with level-based progression.",
        tech: ["Android", "Kotlin", "MVVM"],
        githubUrl: "#",
    },
    {
        title: "Expense Tracker",
        description:
            "A personal expense tracking app with income and expense management.",
        tech: ["Flutter", "Provider", "Hive"],
        githubUrl: "#",
    },
];


export const allProjects: Project[] = [
    ...featuredProjects,
    {
        title: "Word Search Game",
        description:
            "A word search puzzle game with dynamic grid sizing and sound effects.",
        tech: ["Android", "Jetpack Compose", "MVVM"],
        githubUrl: "#",
    },
    {
        title: "English & Math Puzzle App",
        description:
            "Puzzle app with multiple puzzle types using Bloc state management.",
        tech: ["Flutter", "Bloc"],
        githubUrl: "#",
    },
];