import type { Route } from "./+types/home";
import { Portfolio } from "../portfolio/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniel Kovalenko — Web Developer" },
    {
      name: "description",
      content:
        "Web developer building modern, reliable interfaces with a focus on quality, structure, and measurable results.",
    },
  ];
}

export default function Home() {
  return <Portfolio />;
}
