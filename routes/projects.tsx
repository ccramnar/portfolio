import { PageProps } from "$fresh/server.ts";
import { Navbar } from "../components/Navbar.tsx";
import { Project } from "../components/Projects.tsx";

type ProjectProps = Parameters<typeof Project>[0]

const projects: Array<ProjectProps> = [
  {
    name:"Food Network",
    description:"Allows farmers to be connected to wholesale buyers to help increase profits of farmers and reduce the middle man. Allows CRUD of products for farmers and wholesalers and allows different platforms to make requests to farmers.",
    technology:"Android Studio, Kotlin, JavaFx, Firebase",
    date:"July '22",
    link:"https://github.com/ansonhywan/open-food-network-app-project",
  },
  {
    name:"Conways Game of Life",
    description:"A visulaization of Conway's game of life that allows users to add or delete pieces from the board",
    technology:"IntelliJ, Kotlin, JavaFx",
    date:"Dec '21",
    link:"https://github.com/ccramnar/Game-of-Life",
  },
  {
    name:"Gesture Recognizer",
    description:"Users can create and manage one-stroke gestures. This android application allows users to redraw gestures and the application recongizes the gesture and displays the top three matched gestures for every inputted gesture",
    technology:"Android Studio, Kotlin, JavaFx",
    date:"Dec '21",
    link:"https://github.com/ccramnar/Gesture-Recognizer",
  },
  {
    name:"LightBox",
    description:"Similar to a physical lightbox, Lightbox is used to digital digital photos. Supports translation, scaling and rotation of images along with two viewing modes",
    technology:"Kotlin, JavaFx, IntelliJ",
    date:"Nov '21",
    link:"https://github.com/ccramnar/Lightbox",
  },
  {
    name:"File Browser",
    description:"A simple application to allow users to browse files and the ability to preview/peek at supported file types e.g jpeg within the browser",
    technology:"IntelliJ, Kotlin, JavaFx",
    date:"Nov '21",
    link:"https://github.com/ccramnar/FileBrowser",
  },
  {
    name:"RAIINet",
    description:"A Stratego-style game using OOP principles in a team of 3 that supports player vs player modes. Each player controls eight pieces, called links. There are two different kinds of links: viruses and data.",
    technology:"C++, Command Line",
    date:"Dec '19",
    link:"https://github.com/ccramnar/RAII-net",
  }
]

export default function Projects(props: PageProps) {
  return (
    <div class="relative inset-0 flex-col flex justify-center items-center">
    <div class="w-full">
      <Navbar route={props.route} />
    </div>
    <div class="flex-col px-6 lg:px-12 flex justify-center max-w-5xl">
      {projects.map(p => <Project {...p} />)}
    </div>
  </div>
  )
}
