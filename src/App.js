import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";
import Main from "./components/main/Main";
import About from "./components/about/About";
import MainFooter from "./main_footer/MainFooter";

function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const whyMeRef = useRef(null);

  const scrolToView = (sectionName) => {
    const myRef =
      sectionName === "about"
        ? aboutRef
        : sectionName === "projects"
        ? projectsRef
        : whyMeRef;

    window.scrollTo({
      top: myRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar scrolTo={scrolToView} />
      <Main
        Ref={aboutRef}
        style={{
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/introBackground.jpg?alt=media&token=5ec81f2f-4add-476c-a524-b11d99245c12)"
        }}
        content={<About/>}
      />
      <Main
        Ref={whyMeRef}
        style={{ backgroundColor: "green" }}
        content="Why Me"
      />

      <Main
        Ref={projectsRef}
        style={{ backgroundColor: "red" }}
        content="Project"
      />
    <MainFooter />
      
    </div>
  );
}

export default App;
