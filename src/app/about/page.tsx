import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Ajay, a frontend developer specializing in React, Next.js, and React Native.",
};

export default function AboutPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-3xl font-bold">About Me</h1>

            <section className="mt-6 space-y-6 text-slate-400 leading-relaxed">
                <p>
                    I’m Ajay, a frontend developer who enjoys building clean and
                    maintainable web and mobile applications. I like working close to
                    the UI while still caring about structure, performance, and
                    scalability.
                </p>

                <p>
                    Over the years, I’ve explored different technologies and gradually
                    developed a strong interest in frontend and mobile development.
                    I learn best by building real projects and improving them over time.
                </p>

                <p>
                    Recently, my focus has been on React, Next.js, and React Native,
                    along with modern frontend practices like component-driven
                    development and clean state management.
                </p>

                <p>
                    I’m looking for a role where I can contribute as a frontend or
                    mobile developer, continue learning, and work with a team that
                    values simplicity and quality.
                </p>
            </section>
        </main>
    );
}
