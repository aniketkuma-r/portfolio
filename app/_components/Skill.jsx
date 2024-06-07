import { Button } from "@nextui-org/react";

export default function Skill({ data }) {
  const skills = data?.map((item) => ({
    ...item,
    skillList: item?.skillList.split('\n'),
  }));

  return (
    <div className="flex flex-col gap-3 max-w-[1024px] w-full p-1 sm:p-4 my-6">
      <h2 className=" m-auto text-primary">Skills</h2>
      <div className="w-full md:w-[49rem] m-auto">
        <ul className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center items-stretch">
          {skills?.map((item, index) => (
            <li
              key={index}
              className="w-[20rem] sm:w-[15rem] flex-1 flex flex-col gap-1 bg-gray-500/5 p-4 rounded-md shadow-lg"
            >
              <h3 className="font-medium text-lg tracking-wider capitalize">
                {item?.domain}
              </h3>
              <hr className="h-[0.25px] mx-auto border-0 bg-gray-200 w-full opacity-50" />
              <div className="flex flex-wrap gap-2 p-1">
                {item?.skillList?.map((skill, index) => (
                  <Button key={index} variant="faded" size="sm">
                    {skill}
                  </Button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
