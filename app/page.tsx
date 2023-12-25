"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import AboutMe from "@/components/about_me";
import Header from "@/components/header";
import Projects from "@/components/projects";
import CardProject from "@/components/card_projects";
import Socials from "@/components/socials";
import CardSocials from "@/components/card_socials";
import CardEmail from "@/components/card_email";
import Gmail from "@/components/email";


const darkIcon = "icons_header/moon.svg";
const lightIcon = "icons_header/sun.svg";



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
        icon: "icons_social/github.svg",
        name: "Github",
        url: "https://github.com/jerearrieta",
      },
    ],
  },
];

export default function Home() {

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { setTheme } = useTheme();

  const projects = [
    {
      title: "Guardian Bank",
      description:
        "It is a final homebanking project carried out for the ITBA university.",
      imageSrc: "/images/guardian_bank.PNG",
      url: "https://itbank-beta.vercel.app/",
      technologies: [
        { name: "Next.js", icon: `${darkMode ? "icons/next.svg" : "icons/next_black.svg" }`},
        { name: "React", icon: "icons/react.svg" },
        { name: "Tailwind", icon: "icons/tailwind.svg" },
        { name: "Django", icon: "icons/django.svg" },
        { name: "Sql", icon: "icons/sql.svg" },
      ],
    },
  ];

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      setTheme('dark');
    }
  }, [setTheme]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main className="mx-auto max-w-3xl mb-10">
      <div className="sticky top-0 z-10">
        <header className="flex justify-end items-center py-3 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
          <div className="hover:opacity-80 dark:hover:opacity-90 transition-all">
            <Image
              style={{ cursor: "pointer" }}
              src={darkMode ? darkIcon : lightIcon}
              width="30"
              height="30"
              alt="Icons"
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>
        </header>
      </div>
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
