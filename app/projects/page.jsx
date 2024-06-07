import ArchiveProjectCardTemplate from "../_components/ArchiveProjectCardTemplate";
import ProjectTemplate from "../_components/ProjectTemplate";
import SectionTitle from "../_components/SectionTitle";
import { handleParallelSheetDataFetching } from "../api/getSheetData";

export default async () => {
  const [projectsData, archivesProjectsData] =
    await handleParallelSheetDataFetching(["projects", "archives"]);


  return (
    <main className="bg-gray-500/5">
      <section>
        <SectionTitle title="my projects" />
        <ProjectTemplate data={projectsData} />
        <hr className="h-px my-2 mx-auto border-0 bg-gray-200 w-full opacity-40" />
        <ArchiveProjectCardTemplate data={archivesProjectsData} />
      </section>
    </main>
  );
};
