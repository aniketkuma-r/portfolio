"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";

export default function ArchiveProjectCardTemplate({ data }) {
  const archiveProjects = data?.map((item) => ({
    ...item,
    projectDescription: item?.projectDescription?.split('\n'),
    projectSkills: item?.projectSkills?.split('\n'),
  }));

  const [number, setNumber] = useState(6);

  return (
    <div className="flex flex-col items-center gap-3 w-full p-1 sm:p-4 lg:px-0 my-6 mb-12">
      <h2 className="m-auto capitalize">{"Some More Projects I've Built"}</h2>
      <pre className="text-center text-sm sm:text-md md:text-lg text-primary">
        view the archives...
      </pre>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:px-0 w-full sm:w-[40rem] md:w-full">
        {archiveProjects?.slice(0, number)?.map((item, index) => (
          <li key={index} className="sm:p-2">
            <div className="w-full p-4 rounded-lg bg-background shadow-lg shadow-gray-500/10 flex flex-col justify-between gap-2 cursor-pointer hover:scale-105 transition duration-200">
              <header className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <CiFolderOn size={"2.5rem"} className="text-primary mx-2" />
                  <ul className="flex gap-3">
                    {item?.githubLink && (
                      <li className="p-2 hover:text-primary dark:text-slate-400 hover:scale-110">
                        <a href={item?.githubLink} target="blank">
                          <LuGithub size={"1.5rem"} />
                        </a>
                      </li>
                    )}
                    {item?.LiveProjectLink && (
                      <li className="p-2 hover:text-primary dark:text-slate-300 hover:scale-105 ">
                        <a href={item?.liveProjectLink} target="blank">
                          <FiExternalLink size={"1.5rem"} />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <h2 className="text-xl p-0 px-2 capitalize tracking-wide dark:text-gray-300 hover:text-primary">
                  {item?.projectTitle}
                </h2>
                <div className="p-2">
                  {item?.projectDescription?.map((description, i) => (
                    <p key={i} className="mb-2 dark:text-gray-400 text-sm ">
                      {description}
                    </p>
                  ))}
                </div>
              </header>
              <ul className="flex flex-wrap">
                {item?.projectSkills?.map((skill, i) => (
                  <li key={i} className="p-1">
                    <pre className="bg-primary bg-opacity-10 hover:bg-opacity-20 px-2 py-1 rounded-lg text-primary text-sm">
                      {skill}
                    </pre>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <br />
      {archiveProjects?.length > 6 && (
        <Button
          color="primary"
          variant="flat"
          size="md"
          onClick={() => {
            number > 6 ? setNumber(6) : setNumber(archiveProjects.length);
          }}
        >
          {number > 6 ? "View Less" : "Show More"}
        </Button>
      )}
    </div>
  );
}
