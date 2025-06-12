import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Portfolio Redwan Hramch"
      description="Welcome to my portfolio"
    >
      <Hero />
      <section className="mt-12 max-w-3xl ml-12 mb-12">
  <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
    Welcome to My Portfolio
  </h2>
  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
    I’m <strong>{userData.name}</strong>, a dedicated <strong>{userData.designation}</strong>. This portfolio is your gateway to discovering who I am, what I’ve built, and how we might collaborate.
  </p>

  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
    Here's how to navigate through my journey:
  </p>
  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
    <li>
      <a
        href="/about"
        className="text-gray-700 dark:text-gray-200 hover:underline hover:decoration-2 hover:underline-offset-2 transition"
      >
        <strong>About Me</strong>
      </a>: Learn more about my background, motivations, values, skills, and find my CV.
    </li>
    <li>
      <a
        href="/experience"
        className="text-gray-700 dark:text-gray-200 hover:underline hover:decoration-2 hover:underline-offset-2 transition"
      >
        <strong>Internship Project</strong>
      </a>: Dive into <em>Sensor To Savior</em>, the project I led during my internship — its problem, goals, challenges, and outcomes.
    </li>
    <li>
      <a
        href="/projects"
        className="text-gray-700 dark:text-gray-200 hover:underline hover:decoration-2 hover:underline-offset-2 transition"
      >
        <strong>Latest Projects</strong>
      </a>: Explore my most recent work, including personal and collaborative builds.
    </li>
    <li>
      <a
        href="/contact"
        className="text-gray-700 dark:text-gray-200 hover:underline hover:decoration-2 hover:underline-offset-2 transition"
      >
        <strong>Contact</strong>
      </a>: If you do like to connect, explore opportunities, or simply say hello you will find everything you need here.
    </li>
  </ul>

  <p className="text-lg text-gray-600 dark:text-gray-300">
    Feel free to explore via the navigation menu above. I hope this tour gives you a clear sense of my story and work. Enjoy!
  </p>
</section>


    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
