import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { title } from "../primitives";
import { ThemeSwitch } from "../theme-switch";

interface SocialLink {
	name: string;
	url?: string;
	icon: React.ElementType;
	isEmail?: boolean;
}

const Hero = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const socialLinks: SocialLink[] = [
		{ name: "GitHub", url: "https://github.com/shdw-nocturne", icon: Github },
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/jaycon-jude-madrid/",
			icon: Linkedin,
		},
		{
			name: "Email",
			url: "mailto:jaycon46madrid@gmail.com ",
			icon: Mail,
			isEmail: true,
		},
	];

	return (
		<section className=" flex justify-between items-start">
			{/* Profile Image */}
			<ThemeSwitch className="hidden" />
			<div className="flex flex-row md:items-start justify-center md:justify-start gap-4 md:gap-8">
				<Image
					isZoomed
					alt="Profile Picture"
					src="/profile.jpg"
					width={isMobile ? 135 : 150}
					// className="rounded-full flex-shrink-0"
				/>

				{/* Info */}
				<div className="flex flex-col  md:items-start  md:text-left space-y-2 md:space-y-1">
					<p className={title({ weight: "bold", size: "base" })}>
						Jaycon Jude Madrid
					</p>

					<div className="flex   md:justify-start text-gray-500 gap-1">
						<MapPin size={14} />
						<span className={title({ size: "xxs" })}>
							Cebu City, Philippines
						</span>
					</div>

					<p className={title({ size: "xs", weight: "semibold" })}>
						Full-stack Developer |{" "}
						<span className={title({ color: "blue", size: "xs" })}>
							ReactJs Focused
						</span>
					</p>

					{/* Social Buttons */}
					<div className="flex   md:justify-start gap-2 pt-4">
						{socialLinks.map((link) => (
							<Button
								key={link.name}
								color="default"
								size={isMobile ? "sm" : "md"}
								isIconOnly={isMobile ? true : false}
								variant={link.isEmail ? "solid" : "ghost"}
								onClick={() => {
									if (link.isEmail) {
										window.location.href = link.url!;
									} else if (link.url) {
										window.open(link.url, "_blank");
									}
								}}
								className="flex  gap-1"
								aria-label={link.name}
							>
								<link.icon size={20} />
								{link.isEmail && (
									<span className="hidden sm:inline">Reach Me Out</span>
								)}
							</Button>
						))}
					</div>
				</div>
			</div>
			{/* <ThemeSwitch /> */}
		</section>
	);
};

export default Hero;
