import { allProjects } from "@/data/projects";
import ProjectCard from "../components/project-card";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Web and mobile projects built using modern technologies.",
};

export default function ProjectsPage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-24">
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-slate-400 mt-2 max-w-2xl">
                A collection of web and mobile applications I’ve built while learning
                and experimenting with different technologies.
            </p>

            <div className="grid gap-6 mt-10 sm:grid-cols-2">
                {allProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </main>
    );
}

