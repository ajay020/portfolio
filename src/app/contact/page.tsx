
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ajay for opportunities and collaborations.",
};

export default function ContactPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-3xl font-bold">Contact</h1>

            <p className="text-slate-400 mt-4 max-w-xl">
                If you’d like to discuss an opportunity, collaborate on a project,
                or just have a conversation, feel free to reach out.
            </p>

            <div className="mt-8 space-y-4">
                <p>
                    📧 Email:{" "}
                    <a
                        href="mailto:itsajay212@gmail.com"
                        className="text-blue-400 hover:underline"
                    >
                        itsajay212@gmail.com
                    </a>
                </p>

                <p>
                    💼 LinkedIn:{" "}
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        linkedin.com/in/your-profile
                    </a>
                </p>

                <p>
                    💻 GitHub:{" "}
                    <a
                        href="https://github.com/ajay020"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                    >
                        github.com/ajay020
                    </a>
                </p>
            </div>
        </main>
    );
}

