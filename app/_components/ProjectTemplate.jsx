import { LuGithub } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function ProjectTemplate({ data }) {
  const projects = data?.map((item) => ({
    ...item,
    projectDescription: item?.projectDescription.split("\n"),
    projectSkills: item?.projectSkills.split("\n"),
    backgroundImageUrl:
      item?.backgroundImageUrl ||
      "https://drive.usercontent.google.com/download?id=1z15I8aVJpJsXfvYqV1PcUPNImoUuy8gP",
  }));

  return (
    <ul className="flex flex-col gap-y-12 w-full sm:w-[40rem] md:w-full p-4 m-auto my-6">
      {projects?.map((item, i) => (
        <li key={i} className="m-auto w-full p-0 md:p-4">
          <div className="grid place-items-center gap-3 relative grid-cols-9">
            <div
              className={`h-full flex flex-col justify-center gap-3 p-3 ${
                i % 2
                  ? "col-start-1 md:col-start-1 lg:col-start-1"
                  : "md:items-end col-end-[-1] md:col-end-[-1] lg:col-end-[-1]"
              } bg-background/70 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 rounded-lg relative row-start-1 col-span-9 md:col-span-6 lg:col-span-5 order-1`}
            >
              <p className="px-2 text-primary text-sm">{item?.projectType}</p>
              <h2 className="dark:text-gray-200 text-xl p-0 px-2 capitalize">
                {item?.projectTitle}
              </h2>
              <div className="md:bg-background/80 rounded-lg p-2 md:p-4">
                {item?.projectDescription?.map((description, i) => (
                  <p
                    key={i}
                    className="mb-2 dark:text-slate-300 md:text-justify"
                  >
                    {description}
                  </p>
                ))}
              </div>
              <ul
                className={`flex ${
                  i % 2 ? "" : "md:flex-row-reverse"
                } flex-wrap`}
              >
                {item?.projectSkills?.map((skill, i) => (
                  <li key={i} className="p-1">
                    <pre className="bg-primary bg-opacity-10 hover:bg-opacity-20 px-2 py-1 rounded-lg text-primary border border-primary border-opacity-50 hover:border-opacity-100 text-sm">
                      {skill}
                    </pre>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-3">
                <li className="p-2 hover:text-primary hover:scale-110">
                  <a href={item?.githubLink} target="blank">
                    <LuGithub size={"1.5rem"} />
                  </a>
                </li>
                <li className="p-2 hover:text-primary hover:scale-105 ">
                  <a href={item?.liveProjectLink} target="blank">
                    <FiExternalLink size={"1.5rem"} />
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={`w-full h-full md:max-h-[20rem] rounded-md relative shadow-lg shadow-primary/10 overflow-hidden row-start-1  ${
                i % 2
                  ? "col-end-[-1] md:col-end-[-1] lg:col-end-[-1]"
                  : "col-start-1 md:col-start-1 lg:col-start-1"
              } col-span-9 md:col-span-6 lg:col-span-5`}
            >
              <Image
                className="h-full w-full object-cover"
                src={item?.backgroundImageUrl}
                width={600}
                height={450}
                alt="backgroundImage"
                priority
              />
              <div className="absolute inset-0 w-full h-full bg-primary bg-opacity-15 hover:bg-transparent delay-75 transition-all"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
