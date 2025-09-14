import About from "./about";
import { ExperienceCardList } from "./experience-list";
import Projects from "./projects";
import TechStack from "./tech-stack";

const Content = () => {
  return (
    <div className="grid grid-cols-12 gap-4 ">
      <div className="col-span-12  lg:col-span-8  space-y-4">
        <About />
        <TechStack />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <ExperienceCardList />
      </div>
      <div className="col-span-12 ">
        <Projects />
      </div>
    </div>
  );
};

export default Content;
