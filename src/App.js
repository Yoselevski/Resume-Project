import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";
import Main from "./components/main/Main";
import About from "./components/about/About";
import MainFooter from "./main_footer/MainFooter";
import WhyMe from "./components/whyMe/WhyMe";
import Home from "./components/home/Home";
import Projects from "./components/projects_card/Projects";

function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const whyMeRef = useRef(null);
  const homeRef = useRef(null);

  const scrolToView = (sectionName) => {
    const myRef =
      sectionName === "about"
        ? aboutRef
        : sectionName === "projects"
        ? projectsRef
        : sectionName === "home"
        ? homeRef
        : whyMeRef;

    window.scrollTo({ top: myRef.current.offsetTop, behavior: "smooth"});
  };

    return (<div>
        <Navbar scrolTo={scrolToView}/>
        <Main Ref={homeRef}
            style={
                {
                    backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/Home%20bg.jpg?alt=media&token=8b1d3afd-0b35-41e3-8eec-5f62e0c51220)",
                    backgroundPositionX: "right",
                    backgroundPositionY: "center",
                    backgroundSize: "cover"
                }
            }
            content={<Home/>}/>
        <Main Ref={aboutRef}
            style={
                {
                    backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/introBackground.jpg?alt=media&token=5ec81f2f-4add-476c-a524-b11d99245c12)",
                    backgroundPositionX: "right",
                    backgroundPositionY: "center",
                    backgroundSize: "cover",
                    backgroundRepeatX: "no-repeat",
                    backgroundRepeatY: "no-repeat",
                    backgroundAttachment: "initial",
                    backgroundOrigin: "initial",
                    backgroundClip: "initial",
                    backgroundColor: "initial"
                }
            }
            content={<About/>}/>
        <Main Ref={whyMeRef}
            style={
                {
                    // backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/coding%20man.jpg?alt=media&token=e9cf1388-0c2a-4c8b-b6e5-63e7d3b14f10)",
                    backgroundPositionX: "right",
                    backgroundPositionY: "bottom",
                    backgroundClip: "content-box",
                    backgroundSize: "200px 200px",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "rgba(3,3,3, 0.89)"
                }
            }
            content={<WhyMe/>}/>

      <Main
        Ref={projectsRef}
        style={{
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/bg%20prog.jpg?alt=media&token=e524689b-3a86-43a1-aab6-62a618400e19)",
          backgroundPositionX: "left",
          backgroundPositionY: "top",
          backgroundClip: "content-box",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(3,3,3, 0.89)",
          
        

        }}
        content={<Projects/>}/>
      
      <MainFooter />
    </div>
  );
}

export default App;
