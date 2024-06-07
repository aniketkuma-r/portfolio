import Image from "next/image";

export default function About({ data }) {
  
  return (
    <>
      <h3 className="text-center text-sm sm:text-md md:text-lg">
        {data?.headline}
      </h3>
      <div className="grid md:grid-cols-2 p-2 gap-3 md:gap-0">
        <div className="grid place-items-center p-2">
          <div className="w-[20rem] h-[20rem] md:w-[22rem] md:h-[22rem] flex items-center overflow-hidden rounded-[50%] outline outline-offset-4 outline-2 outline-primary md:outline-gray-200 shadow-lg">
            <div className="transition ease-in-out duration-300 hover:scale-105 relative">
              <Image
                className="object-cover"
                src={data?.photoUrl}
                width={500}
                height={500}
                alt="photo"
                priority
              />
              <div className="absolute inset-0 w-full h-full md:bg-primary/30 hover:bg-transparent mix-blend-multiply"></div>
            </div>
          </div>
        </div>
        <div className="p-1 sm:p-4 lg:max-w-xl opacity-90">
          <pre className="font-semibold text-lg sm:text-2xl text-wrap mb-2">
            Get To Know me!
          </pre>
          <pre className="text-wrap font-sans mb-2">{data?.paragraph}</pre>
          <p className="mb-2 font-bold">{data?.hashtags}</p>
        </div>
      </div>
    </>
  );
}
