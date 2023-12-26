"use client";

import AboutMe from "@/components/about_me";
import Header from "@/components/header";
import Projects from "@/components/projects";
import CardProject from "@/components/card_projects";
import Socials from "@/components/socials";
import CardSocials from "@/components/card_socials";
import CardEmail from "@/components/card_email";
import Gmail from "@/components/email";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleToggleDarkMode = (isDarkMode: boolean) => {
    setDarkMode(isDarkMode);
  };

  const projects = [
    {
      title: "Guardian Bank",
      description:
        "It is a final homebanking project carried out for the ITBA university.",
      imageSrc: "/images/guardian_bank.PNG",
      url: "https://itbank-beta.vercel.app/",
      technologies: [
        { name: "Next.js", icon: darkMode ? "icons/next.svg" : "icons/next_black.svg"},
        { name: "React", icon: "icons/react.svg" },
        { name: "Tailwind", icon: "icons/tailwind.svg" },
        { name: "Django", icon: "icons/django.svg" },
        { name: "Sql", icon: "icons/sql.svg" },
      ],
    },
  ];

  const socialsData = [
    {
      name: "Linkedin",
      icons: [
        {
          icon: "icons_social/linkedin.svg",
          name: "Linkedin",
          url: "https://www.linkedin.com/in/jeremias-arrieta/",
        },
      ],
    },
    {
      name: "Github",
      icons: [
        {
          icon: darkMode ? "icons_social/github.svg" : "icons_social/github_black.svg",
          name: "Github",
          url: "https://github.com/jerearrieta",
        },
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-3xl mb-10">
      <Header onToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />
      <AboutMe />
      <hr className="border border-dotted border-gray-200 dark:border-gray-700 rounded-md mt-16" />
      <Projects />
      <div className="project-list">
        {projects.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            url={project.url}
            technologies={project.technologies}
          />
        ))}
      </div>
      <Socials />
      <div className="socials-list flex gap-3">
        {socialsData.map((social, index) => (
          <CardSocials key={index} name={social.name} icons={social.icons} />
        ))}
      </div>
      <Gmail />
      <CardEmail />
    </main>
  );
}
