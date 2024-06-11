import { Button, Link } from "@nextui-org/react";
import { handleParallelSheetDataFetching } from "./api/getSheetData";
import { getIcons } from "./contact/page";
import Hero from "./_components/Hero";

export default async function Home() {
  const [[homePageData], socialsData, codingProfileData] =
    await handleParallelSheetDataFetching(["home", "socials", "coding"]);
  const socialLinks = getIcons({ data: socialsData, size: "1.5rem" });
  const CodingProfileLinks = getIcons({
    data: codingProfileData,
    size: "2rem",
  });
  homePageData.askMeAbout = homePageData?.askMeAbout?.split("\n");

  return (
    <main>
      <div
        className="w-full h-screen absolute grayscale opacity-70 mix-blend-overlay"
        style={{ backgroundImage: "url(images/bg.png)" }}
      >
        <div className="relative h-full bg-background/70 mix-blend-multiply"></div>
      </div>

      {/* sticky social icons  */}
      <div className="absolute top-[50%] left-0 bg-background rounded-lg p-2 hidden md:block drop-shadow-xl">
        <div className="flex flex-col gap-2 place-items-center">
          {socialLinks?.map((item, index) => (
            <Button
              key={index}
              as={Link}
              color="primary"
              href={item?.link}
              target="_blank"
              variant="light"
              size="lg"
              aria-label={item?.value}
              isIconOnly
              className="hover:scale-125 delay-50 transition-all"
            >
              {item?.icon}
            </Button>
          ))}
        </div>
      </div>
      <section>
        <Hero data={homePageData} />
        <div className="w-auto m-auto">
          <Button
            as={Link}
            color="primary"
            href={"/projects"}
            variant="flat"
            size="lg"
            className="hover:scale-110 delay-50 transition-all capitalize"
          >
            {"checkout my work!!"}
          </Button>
        </div>
        <div className="flex flex-col gap-3 max-w-[1024px] w-full p-1 my-4">
          <h2 className="m-auto text-primary">Visit My Coding Profile</h2>
          <ul className="max-w-[49rem] m-auto">
            {CodingProfileLinks.map((item, index) => (
              <li key={index} className="flex gap-3 p-2 items-center">
                {item.icon}
                <a
                  href={item.link}
                  className="text-primary opacity-60 hover:opacity-100 text-sm sm:text-base transition-all delay-75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="">{item.link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
