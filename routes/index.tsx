import { Navbar } from "../components/Navbar.tsx";
import { PageProps } from "$fresh/server.ts";
import { About } from "../components/AboutMe.tsx";

export default function Home(props: PageProps) {
  return (
    <div class="absolute inset-0 flex-col flex justify-center items-center">
      <div class="w-full">
        <Navbar route={props.route} />
      </div>
      <div class="flex-grow relative inset-0 flex justify-center items-center">
          <About
            img="https://avatars.githubusercontent.com/u/55121041?v=4"
            title="Hi I'm Cy"
          >
            My name is Cyanne Ramnarine! I am a 4B computer science student at
            the University of Waterloo.
          </About>
        </div>
    </div>
  );
}
