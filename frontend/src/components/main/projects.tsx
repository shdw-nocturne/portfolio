import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Construction } from "lucide-react";
import { cardColor, title } from "../primitives";

const Projects = () => {
  const recentProjectsList = [
    {
      id: "1",
      title: "Mindease",
      description:
        "A mental health app that provides users with resources, self-assessment tools, and access to professional help to support their mental well-being.",
      link: "http://72.60.108.131:3000/",
      status: "Completed",
    },
    {
      id: "2",
      title: "Retrieval Augmented Generation Chatbot",
      description:
        "Personalized AI chatbot that leverages document retrieval to provide accurate and context-aware responses, enhancing user interactions and information access.",
      link: null,
      status: "Ongoing",
    },
    // {
    //   id: "2",
    //   title: "Retrieval Augmented Generation Chatbot",
    //   description:
    //     "Personalized AI chatbot that leverages document retrieval to provide accurate and context-aware responses, enhancing user interactions and information access.",
    //   link: null,
    //   status: "Ongoing",
    // },
  ];
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Ongoing":
        return "warning";
      default:
        return "default";
    }
  };
  return (
    <Card className={`space-y-2 p-4 ${cardColor}`}>
      <CardHeader className="p-1">
        <div className="flex items-center gap-3">
          <Construction className="h-6 w-6 text-foreground" />
          <p className={title({ size: "xs" })}>Projects</p>
        </div>
      </CardHeader>
      <CardBody>
        <ScrollShadow className="max-h-84 w-full" hideScrollBar>
          <div className="grid grid-cols-2 gap-4">
            {recentProjectsList.map((project) => (
              <Card
                key={project.id}
                className={`h-full p-1 col-span-2 md:col-span-1 ${cardColor}`}
              >
                <CardBody
                  className={`p-2 md:p-4 border border-primary rounded-lg ${project.link ? "cursor-pointer hover:bg-primary-200/20 transition-colors duration-500 ease-in-out" : ""}flex flex-col justify-between h-full`}
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, "_blank");
                    }
                  }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <Chip
                        size="sm"
                        variant="dot"
                        color={getStatusColor(project.status)}
                      >
                        {project.status}
                      </Chip>
                    </div>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </ScrollShadow>
      </CardBody>
    </Card>
  );
};

export default Projects;
