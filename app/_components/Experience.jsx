import ExperienceTimelineTemplate from "./ExperienceTimlineTemplate";

export default async function Experience({ data }) {
  const experiences = data?.map((item) => ({
    ...item,
    description: item?.description?.split("\n"),
  }));
  return (
    <div className="flex flex-col gap-3 max-w-[1024px] w-full p-1 sm:p-4 my-6">
      <h2 className="m-auto text-primary">Experience Till Now</h2>
      <ExperienceTimelineTemplate data={experiences} />
    </div>
  );
}
