import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">🤖</span>
      <Heading className="font-black">Wes Kim (Unyoung)</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a prospective graduate student working on{" "}
        <Highlight>
          synthetic data generation for robotics / physical AI.
        </Highlight>{" "}
        I previously studied Computer Science at UChicago.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        For the past three years, I have worked as an{" "}
        <Highlight>AI engineer</Highlight> in mission-critical domains like
        supply chain & healthcare, closely tracking new research breakthroughs
        and translating it into reliable, real-world systems deployed at some of
        the largest companies in these industries.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Now I am going deeper—beyond application—to work on the{" "}
        <Highlight>foundational methods and systems</Highlight> that push the
        capabilities forward.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been personally working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
