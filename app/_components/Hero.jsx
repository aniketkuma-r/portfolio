"use client";
import Typewriter from "typewriter-effect";

export default function Hero({ data }) {
  return (
    <div className="flex flex-col gap-3 md:w-[80%] m-auto mt-12">
      <div>
        <pre className="sm:font-semibold text-lg sm:text-xl text-primary/80 px-2">
          {"Hi there, I'm "}
        </pre>
        <h1 className="text-3xl sm:text-5xl md:text-6xl">{data?.name}</h1>
      </div>

      <div>
        <p className="px-2 text-primary">Ask me About</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl">
          <Typewriter
            options={{
              strings: data?.askMeAbout,
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-start text-gray-600 dark:text-gray-300">
          {data?.tagLine}
        </h2>
        <p className="text-md md:text-lg p-2 max-w-2xl opacity-60">
          {data?.description}
        </p>
      </div>
    </div>
  );
}
