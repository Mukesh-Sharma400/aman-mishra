"use client";

import { Hero } from "../sections/Hero";
import { Skills } from "../sections/Skills";
import { Reviews } from "../sections/Reviews";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { Education } from "../sections/Education";
import BaseLayout from "../components/BaseLayout";
import { Experience } from "../sections/Experience";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Reviews />
      <Contact />
    </BaseLayout>
  );
}
