import { skills } from "@/data/skills";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills & Experience",
    description: " My skills and experience in web and mobile development.",
};

export default function ExperiencePage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-24">
            <h1 className="text-3xl font-bold">Experience & Skills</h1>

            <p className="text-slate-400 mt-4 max-w-2xl">
                I have been consistently learning and building web and mobile
                applications, focusing on clean architecture, maintainable code,
                and user-friendly interfaces.
            </p>

            {/* Skills */}
            <section className="mt-12 space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h2 className="text-xl font-semibold capitalize">
                            {category}
                        </h2>

                        <div className="flex flex-wrap gap-3 mt-4">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 text-sm rounded-full bg-slate-800"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Experience Timeline */}
            <section className="mt-16">
                <h2 className="text-xl font-semibold">Journey</h2>

                <ul className="mt-6 space-y-6 text-slate-400">
                    <li>
                        <strong className="text-white">2016 – Present:</strong>{" "}
                        Learning and building applications using web and mobile
                        technologies.
                    </li>
                    <li>
                        <strong className="text-white">Recent Focus:</strong>{" "}
                        React, Next.js, React Native, and modern frontend practices.
                    </li>
                    <li>
                        <strong className="text-white">Current Goal:</strong>{" "}
                        Frontend / Mobile developer role where I can contribute and grow.
                    </li>
                </ul>
            </section>
        </main>
    );
}
