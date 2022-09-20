import { Navbar } from "../components/Navbar.tsx";
import { PageProps } from "$fresh/server.ts";
import { About } from "../components/AboutMe.tsx";


const style = `div.bg-animation {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`

export default function Home(props: PageProps) {
  return (
    <div class="absolute inset-0 flex-col flex justify-center items-center">
      <div class="w-full">
        <Navbar route={props.route} />
      </div>
      <div class="flex-grow w-full relative inset-0 flex justify-center items-center bg-animation">
          <About
            img="https://avatars.githubusercontent.com/u/55121041?v=4"
            title="Hi I'm Cy"
          >
            My name is Cyanne Ramnarine! I am a 4B computer science student at
            the University of Waterloo.
          </About>
        </div>
        <style>{style}</style>
    </div>
  );
}
