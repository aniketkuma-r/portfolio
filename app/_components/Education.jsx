"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Education({ data }) {
  return (
    <div className="flex flex-col gap-3 max-w-[1024px] w-full p-1 sm:p-4 my-4">
      <h2 className="m-auto text-primary">My Education</h2>
      <Accordion variant="light" defaultExpandedKeys={["0"]}>
        {data?.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item?.title}
            title={item?.title}
          >
            <div className="px-2">
              <div className="capitalize flex justify-between flex-col sm:flex-row text-sm md:text-base">
                <p>{item?.campus}</p>
                <p className="italic">{item?.city}</p>
              </div>
              <div className="capitalize flex justify-between text-sm md:text-base">
                <p>{item?.course}</p>
                <p>{item?.timeline}</p>
              </div>
              <div>
                {`${item?.scoreType} : `}
                <span className="font-bold md:text-lg">{item?.score}</span>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
