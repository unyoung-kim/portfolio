import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex items-center space-x-6 mb-6">
        <Image
          src="/images/profile.png"
          alt="Wes Kim (Unyoung)"
          width={100}
          height={100}
          className="rounded-full object-cover object-top flex-shrink-0"
        />
        <div>
          <Heading className="font-black">Wes Kim (Unyoung)</Heading>
        </div>
      </div>
      {/* <Paragraph className="max-w-xl mt-4">
        I&apos;m a prospective graduate student working on{" "}
        <Highlight>
          synthetic data generation for robotics / physical AI.
        </Highlight>{" "}
        I previously studied Computer Science at UChicago.
      </Paragraph> */}
      {/* <Paragraph className="max-w-xl mt-4">
        I am a prospective Master&apos;s student.
      </Paragraph> */}
      <Paragraph className="max-w-xl mt-4">
        I received my Bachelor&apos;s degree in <u>Computer Science</u> at{" "}
        <u>University of Chicago</u>. I have also worked at Nexon (Gaming
        Company) & Arrow (Health Tech), as an AI/ML Engineer for 2 years.
      </Paragraph>

      {/* <Paragraph className="max-w-xl mt-4">
        For the past three years, I have worked as an{" "}
        <Highlight>AI engineer</Highlight> in mission-critical domains like
        supply chain & healthcare, closely tracking new research breakthroughs
        and translating it into reliable, real-world systems deployed at some of
        the largest companies in these industries.
      </Paragraph> */}

      <Paragraph className="max-w-xl mt-4">
        <Highlight>
          <strong>Goal:</strong>
        </Highlight>{" "}
        Accelerate the Robotic Deployment by Synthetic Data Generation and
        High-Fidelity Simulation.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        <Highlight>
          <strong>Research Interests:</strong>
        </Highlight>{" "}
        The intersection of <u> Robotics Intelligence</u>,{" "}
        <u>High-Fidelity Simulation</u>, and <u>Synthetic Data Generation</u>.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        <Highlight>
          <strong>Research Question:</strong>
        </Highlight>{" "}
        How do we easily create high-fidelity simulation environnments to safely
        deploy robots in the real world and to generate synthetic data to
        accelerate the research of World Models for Robotics?
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-xl mt-20 mb-4"
      >
        What I&apos;ve been personally working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
