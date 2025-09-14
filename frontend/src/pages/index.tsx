import Content from "@/components/main/content";
import Hero from "@/components/main/hero";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <Content />
    </DefaultLayout>
  );
}
