import { PageProps } from "$fresh/server.ts";
import { Navbar } from "../components/Navbar.tsx";

export default function Projects(props: PageProps) {
  return <Navbar route={props.route} />
}
