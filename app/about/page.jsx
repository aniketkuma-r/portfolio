import About from "../_components/About";
import Education from "../_components/Education";
import Experience from "../_components/Experience";
import SectionTitle from "../_components/SectionTitle";
import Skill from "../_components/Skill";
import { handleParallelSheetDataFetching } from "../api/getSheetData";

export default async function AboutPage() {
  const [[aboutData], skillsData, educationsData, experiencesData] =
    await handleParallelSheetDataFetching([
      "about",
      "skills",
      "educations",
      "experiences",
    ]);

  return (
    <main>
      <section>
        <SectionTitle title="About me" />
        <About data={aboutData} />
        <Skill data={skillsData} />
        <Experience data={experiencesData} />
        <Education data={educationsData} />
      </section>
    </main>
  );
};
