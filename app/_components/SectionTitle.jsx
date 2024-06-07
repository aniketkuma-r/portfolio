export default function SectionTitle({ title }) {
  return (
    <div className="flex justify-between items-center mt-6">
      <hr className="h-px mx-auto border-0 bg-primary w-[30%]" />
      <h2 className="text-lg sm:text-2xl md:text-3xl p-2 capitalize font-semibold">
        {title}
      </h2>
      <hr className="h-px mx-auto border-0 bg-primary w-[30%]" />
    </div>
  );
}
