import { Card, CardBody, CardHeader } from "@heroui/card";
import { User } from "lucide-react";
import { cardColor, title } from "../primitives";

const About = () => {
  return (
    <Card className={`space-y-2 p-4 ${cardColor}`}>
      <CardHeader className="p-1">
        <div className="flex items-center gap-3">
          <User className="h-6 w-6 text-foreground" />
          <p className={title({ size: "xs" })}>About Me</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>
          I’m Jaycon, Full-Stack Developer and React specialist. I write code,
          fix bugs, and sometimes get lost in anime worlds. Mostly an introvert,
          I enjoy quiet time at home improving my craft, exploring new tech, and
          secretly planning my next big project… or just the next episode to
          watch.
        </p>
      </CardBody>
    </Card>
  );
};

export default About;
