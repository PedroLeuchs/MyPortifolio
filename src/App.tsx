import Navbar from "./Components/Navbar";
import { useTranslation } from "./hooks/useTranslation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const { sections, setLanguage, language } = useTranslation();

  return (
    <div>
      {/* Navbar */}
      <Navbar
        sections={sections}
        setLanguage={setLanguage}
        language={language}
      />

      {/* Sections */}
      <div key="s" className="min-h-screen font-poppins flex flex-col">
        <HomePage section={sections[0]} language={language} indexImg={0} />
        <AboutPage section={sections[1]} language={language} indexImg={1} />
        <ProjectsPage section={sections[2]} language={language} indexImg={2} />

        {sections.map((section, index) =>
          index < 3 ? null : (
            <section
              key={section.url} // ✅ Agora a key está na Section corretamente
              id={section.url.substring(1)}
              className="h-screen flex items-center justify-center text-white text-3xl font-bold transition-all duration-700 ease-in-out transform bg-neutral-800"
            >
              <img
                src="/assets/datail_extra.svg"
                alt="Detalhe"
                className={`h-screen absolute left-44 animate-pulse ${
                  index % 2 === 0 ? "rotate-180 " : ""
                } drop-shadow-lg-custom`}
              />
              {section.text}
            </section>
          )
        )}
      </div>
    </div>
  );
}

export default App;
