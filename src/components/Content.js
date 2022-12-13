import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Bio from "./Bio"

function Content() {
  return (
    <div className="content">
      <Education />
      <Skills />
      <Projects />
      <Bio />
    </div>
  );
}

export default Content;