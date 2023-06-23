import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import ProjectList from "@/components/ProjectList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Header />
        <Skills />
        <ProjectList />
      </main>
    </>
  );
}
