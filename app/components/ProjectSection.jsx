'use client'
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Razorpay Clone",
        description: "A Razorpay front-end clone developed with HTML, CSS, and Tailwind CSS, highlighting my expertise in creating sleek, responsive web designs.",
        image: "/images/projects/Razorpay.png",
        tag: ["All", "HTML"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 2,
        title: "YouTube Clone",
        description: "A YouTube clone utilizing React, Tailwind CSS, and the YouTube API, showcasing dynamic content retrieval and modern, responsive design.t",
        image: "/images/projects/2.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/vishisht31/Youtube-clone",
        previewUrl: "/",
      },
      {
        id: 3,
        title: "Shopping Cart",
        description: "Developed a Shopping Cart System with React, Redux, and Tailwind CSS.",
        image: "/images/projects/3.png",
        tag: ["All", "React"],
        gitUrl: "/",
        previewUrl: "/",
      },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  

  return (
    <section id="projects">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      My Projects
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="HTML"
        isSelected={tag === "HTML"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="React"
        isSelected={tag === "React"}
      />
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
      ))}
    </ul>
  </section>
  )
}

export default ProjectSection