import { Project } from "@/data/projects";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <div
            className="border border-slate-800 rounded-lg p-6 hover:border-slate-600 hover:-translate-y-1 transition-all"

        >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="text-slate-400 mt-2">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-slate-800"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 mt-6 text-sm">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        Live Demo
                    </a>
                )}

                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
}
