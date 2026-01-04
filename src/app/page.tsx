import { techStack } from "@/data/techStack";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-32">
            <section className="flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                    Hi, I’m Ajay 👋 <br />
                    Frontend Developer
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl">
                    I build clean, scalable web and mobile applications using
                    React, Next.js, and React Native.
                </p>

                <div className="flex gap-4 mt-4">
                    <Link
                        href="/projects"
                        className="bg-white text-slate-900 px-6 py-3 rounded-md font-medium hover:bg-slate-200 transition"
                    >
                        View Projects
                    </Link>

                    <Link
                        href="/contact"
                        className="border border-slate-700 px-6 py-3 rounded-md hover:border-slate-500 transition"
                    >
                        Contact Me
                    </Link>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="mt-32">
                <h2 className="text-2xl font-semibold">Tech Stack</h2>
                <p className="text-slate-400 mt-2">
                    Technologies I work with regularly
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 text-sm rounded-full bg-slate-800 text-slate-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Featured Projects */}
            <section className="mt-32">
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <p className="text-slate-400 mt-2">
                    A few projects I’ve worked on recently
                </p>

                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
}

