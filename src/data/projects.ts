export type Project = {
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
};

export const featuredProjects: Project[] = [
    {
        title: "Local Library",
        description:
            "A Library catalog application.",
        tech: ["React", "Express", "MongoDB"],
        githubUrl: "https://github.com/ajay020/local-library",
    },
    {
        title: "MoodTracker",
        description: "Keep Track your mood and emotions.",
        tech: ["React", "HTML", "CSS"],
        liveUrl: "https://mood-tracker-sage.vercel.app/",
        githubUrl: "https://github.com/ajay020/mood-tracker",
    },
    {
        title: "English Grammar Docs",
        description: "Platform for English grammar learners.",
        tech: ["React", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/ajay020/grammar-wiz-web-app",
        liveUrl: "https://english-grammar-wiz.vercel.app/",
    },
    {
        title: "English Quiz App",
        description: "Learn English grammar with quizzes",
        tech: ["React naive", "Expo", "Typescript", "Redux"],
        githubUrl: "https://github.com/ajay020/Grammar-Wiz",
    },

];


export const allProjects: Project[] = [
    ...featuredProjects,

    {
        title: "Blog App",
        description: "A simple blog app to share your thoughts.",
        tech: ["React naive", "Expo", "Firestore", "Redux"],
        githubUrl: "https://github.com/ajay020/rnblogapp",
    },
    {
        title: "Todo",
        description: `Reactjs, HTML, CSS`,
        liveUrl: "https://todo-app-opal-seven.vercel.app/",
        githubUrl: "https://github.com/ajay020/todo-app",
        tech: ["Reactjs", "HTML", "CSS"],
    },

    {
        title: "Word Search Game",
        description: "A word search puzzle game.",
        tech: ["Android", "Jetpack Compose", "MVVM"],
        githubUrl: "https://github.com/ajay020/word-search-game",
    },

];