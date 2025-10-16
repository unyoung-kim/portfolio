import { Blogs } from "@/components/Blogs";
import { Container } from "@/components/Container";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { getAllBlogs } from "../../../lib/getAllBlogs";

export const metadata: Metadata = {
  title: "Blogs | John Doe",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <h1 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-primary pb-4">
        I write about technology
      </h1>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
