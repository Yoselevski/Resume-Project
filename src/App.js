import AppStyle from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import Main from "./components/main/Main";

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
            "url(https://firebasestorage.googleapis.com/v0/b/web-resume-a9953.appspot.com/o/introBackground.jpg?alt=media&token=5ec81f2f-4add-476c-a524-b11d99245c12)",
          zIndex: "-1",
        }}
        content="Picture of us + Flip card"
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

      <footer className={AppStyle.footer}>
        <div className={AppStyle.footerContent}>
          Copyright © 2021. All Rights Reserved
        </div>
        <ul className={AppStyle.ul}>
          <li className={AppStyle.li} title="to github">
            <SocialIcon
              url="https://github.com/saharc576?tab=repositories"
              style={{ float: "right" }}
            />
          </li>
          <li className={AppStyle.li} title="to linkdin">
            <SocialIcon
              url="https://www.linkedin.com/in/sahar-cohen-307020207/"
              style={{ float: "right" }}
            />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;