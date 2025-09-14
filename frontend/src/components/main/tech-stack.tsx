import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Bot } from "lucide-react";
import { cardColor, title } from "../primitives";

const TechStack = () => {
  const techStackList = [
    {
      category: "Frontend",
      technologies: [
        "Javascript",
        "TypeScript",
        "Next.js",
        "ReactJs",
        "Tanstack Query",
        "Zustand",
        "Tailwind CSS",
        "Shadcn UI",
        "HeroUI",
        "Material UI",
        "Redux",
        "React's Ecosystem",
        "SanityIO",
      ],

      currentStack: [
        "ReactJs",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
      ],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "NestJs", "BullMq"],
      currentStack: ["Nest.js", "BullMq"],
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "QdrantDB", "Redis"],
      currentStack: ["PostgreSQL", "QdrantDB", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      technologies: ["Docker", "AWS", "GitHub Actions"],
      currentStack: ["Docker", "AWS", "GitHub Actions"],
    },
    {
      category: "AI Tools",
      technologies: ["OpenAI", "GitHub Copilot", "Ollama", "RAG", "GenAI"],
      currentStack: ["OpenAI", "Ollama", "RAG"],
    },
    {
      category: "Development Tools",
      technologies: [
        "Git",
        "Ubuntu Linux",
        "Vim",
        "VSCode",
        "Postman",
        "Figma",
        "Notion",
        "Jira",
      ],
    },
  ];
  return (
    <Card className={`space-y-2 p-4 ${cardColor}`}>
      <CardHeader className="p-1">
        <div className="flex items-center gap-3">
          <Bot className="h-6 w-6 text-foreground" />
          <p className={title({ size: "xs" })}>Technology Stack</p>
        </div>
      </CardHeader>
      <CardBody>
        <ScrollShadow hideScrollBar className="  max-h-54 md:max-h-86 pr-2">
          <div className="">
            {techStackList.map((stack) => (
              <div key={stack.category}>
                <h3 className={title({ size: "xxs", color: "blue" })}>
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2 my-3">
                  {stack.technologies.map((tech, index) => (
                    <Chip
                      key={`${tech} - ${index}`}
                      size="md"
                      variant="bordered"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollShadow>
      </CardBody>
    </Card>
  );
};
export default TechStack;
