"use client";

import { useState } from "react";

export default function ExperienceTimelineTemplate({ data }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full md:w-[49rem] min-h-[20rem] m-auto">
      <ul className="flex md:flex-col overflow-scroll md:overflow-auto">
        {data?.map((item, index) => (
          <li
            key={index}
            onClick={() => setActive(index)}
            className={`hover:bg-gray-500/10 p-2 px-4 md:p-3 cursor-pointer capitalize text-sm sm:text-base transition-all delay-175 ${
              active === index
                ? "text-primary border-primary bg-primary/10 text-lg border-b-2 md:border-l-2 md:border-b-0"
                : "border-gray-500/80 border-b md:border-l md:border-b-0"
            }`}
          >
            <p>{item?.name}</p>
          </li>
        ))}
      </ul>
      <div className="bg-gray-500/5 rounded-lg w-[95%] sm:w-[90%] md:w-[45rem] mx-auto md:m-0 text-sm sm:text-base">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`p-4 h-full transition-all ease-in-out delay-175 ${active === index ? "" : "hidden"}`}
          >
            <h3 className="text-base sm:text-lg font-semibold">
              <span className="capitalize">{item?.role}</span>
              <span className="text-primary capitalize">
                <a href={item?.link} target="blank">
                  {` @ ${item?.name}`}
                </a>
              </span>
              <span className="capitalize font-normal">{` , ${item?.location}`}</span>
            </h3>
            <p className="text-sm">{item?.timeline}</p>
            <div className="opacity-80">
              <ul className="marker:text-primary list-disc pl-5 space-y-2 p-3">
                {item?.description?.map((para, i) => (
                  <li key={i} className="p-0">
                    {para}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
