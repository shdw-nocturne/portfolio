import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Sprout } from "lucide-react";
import { cardColor, title } from "../primitives";

interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Full-Stack Developer",
    company: "Jobvious",
    startDate: "2025",
    endDate: null,
  },
  {
    id: "2",
    title: "Front-End Developer",
    company: "Jobvious",
    startDate: "2024",
    endDate: "2025-12",
  },
  {
    id: "3",
    title: "Front-End Engineer",
    company: "EIOR Technologies",
    startDate: "2024-01",
    endDate: "2023-12",
  },
  {
    id: "4",
    title: "Front-End Developer",
    company: "CyTech International",
    startDate: "2023-01",
    endDate: "2022-12",
  },
  {
    id: "5",
    title: "BS Information Technology - Cum Laude",
    company: "STI College - Cagayan De Oro",
    startDate: "2020-01",
    endDate: "2020-12",
  },

  {
    id: "6",
    title: "CodeFest- National Competitor (Hackathon)",
    company: "STI College - Ortigas",
    startDate: "2022-01",
    endDate: "2020-12",
  },
  {
    id: "7",
    title: "Google Solution Challenge (Hackathon)",
    company: "STI College - Cagayan De Oro",
    startDate: "2022-01",
    endDate: "2020-12",
  },

  {
    id: "8",
    title: "Hello, college! Hello, code! Hello, chaos. 👋😅",
    company: "First Taste of Programming",
    startDate: "2016-01",
    endDate: "2015-12",
  },
];

export function ExperienceCardList() {
  return (
    <Card className={`space-y-2 p-4 ${cardColor}`}>
      <CardHeader className="p-1">
        <div className="flex items-center gap-3">
          <Sprout className="h-6 w-6 text-foreground" />

          <p className={title({ size: "xs" })}>Experiences</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="relative">
          <div className="absolute left-[5px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-primary via-muted-foreground/30 to-muted-foreground/20" />
          <ScrollShadow hideScrollBar className="  h-[400px] md:h-[560px]">
            <div className="space-y-8">
              {experiences.map((experience, index) => {
                const isCurrent = experience.endDate === null;
                const year = new Date(experience.startDate).getFullYear();

                return (
                  <div
                    key={experience.id}
                    className="relative flex items-start gap-6"
                  >
                    <div className="relative flex-shrink-0 mt-1 z-10">
                      <div
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                          isCurrent
                            ? "bg-primary border-primary shadow-lg shadow-primary/50 scale-110"
                            : "border-muted-foreground bg-background border-gray-500 hover:border-primary/50 hover:scale-105"
                        }`}
                      />
                      {isCurrent && (
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/20 animate-ping" />
                      )}
                    </div>

                    <div
                      className={`flex-1 group transition-all duration-300 ${
                        isCurrent
                          ? "transform hover:translate-x-1"
                          : "hover:translate-x-1"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <h3
                            className={`font-semibold text-sm transition-colors duration-300 ${
                              isCurrent
                                ? "text-primary group-hover:text-primary/80 "
                                : "text-foreground group-hover:text-primary"
                            }`}
                          >
                            {experience.title}
                          </h3>
                          <p className="text-muted-foreground  text-xs group-hover:text-foreground/80 transition-colors duration-300">
                            {experience.company}
                          </p>
                        </div>

                        <div className="flex-shrink-0">
                          <Chip
                            size="sm"
                            variant={isCurrent ? "solid" : "bordered"}
                          >
                            {year}
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollShadow>
        </div>
      </CardBody>
    </Card>
  );
}
