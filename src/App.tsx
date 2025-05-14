import Navbar from "./Components/Navbar";
import { useTranslation } from "./hooks/useTranslation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import "./styles/App.css";
import Experencie from "./pages/Experencie";
import Contact from "./pages/Contact";

function App() {
  const { sections, setLanguage, language } = useTranslation();

  return (
    <div className="max-w-screen w-full min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar
        sections={sections}
        setLanguage={setLanguage}
        language={language}
      />

      {/* Sections */}
      <div
        key="s"
        className="min-h-screen w-full font-poppins flex flex-col justify-start "
      >
        <HomePage section={sections[0]} language={language} indexImg={0} />
        <AboutPage section={sections[1]} indexImg={1} />
        <ProjectsPage section={sections[2]} indexImg={2} />
        <Experencie section={sections[3]} indexImg={3} />
        <Contact section={sections[4]} indexImg={4} />
      </div>
    </div>
  );
}

export default App;
