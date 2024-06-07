import { Link, Button } from "@nextui-org/react";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { createElement } from "react";
import { handleParallelSheetDataFetching } from "../api/getSheetData";

const Icons = {
  github: FaGithub,
  twitter: FaXTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  email: CiMail,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube,
};
export function getSocialLinks({ data, size }) {
  return data?.map((item) => {
    const name = item?.desc.toLowerCase();
    const icon = Icons[name];
    return {
      value: item?.value,
      link: item?.link,
      icon: createElement(icon, { size: size }),
    };
  });
}

export default async function Contact() {
  const [socialsData, contactsData] = await handleParallelSheetDataFetching([
    "socials",
    "contacts",
  ]);
  const socialLinks = getSocialLinks({ data: socialsData, size: "2rem" });
  const contacts = getSocialLinks({ data: contactsData, size: "1.5rem" });

  return (
    <main>
      <section>
        <div className="m-auto p-2 max-w-[49rem]">
          <h3 className="font-sans font-bold tracking-wide text-xl sm:text-2xl md:text-3xl text-center my-2 p-2 capitalize">
            Get in touch
          </h3>
          <hr className="h-px my-2 mx-auto border-0 bg-gray-500 opacity-70" />

          <p className="text-center opacity-50 max-w-xl">
            I am actively seeking new opportunities and welcome inquiries. My
            inbox is always open, and I look forward to connecting with you,
            whether you have a specific question or simply wish to introduce
            yourself.
          </p>

          <div className="w-full flex flex-wrap justify-evenly items-center my-4 p-2 gap-3">
            {contacts?.map((item, index) => (
              <Button
                key={index}
                as={Link}
                color="primary"
                href={item.link}
                target="_blank"
                variant="flat"
                size="lg"
              >
                {item.icon}
                {item.value}
              </Button>
            ))}
          </div>
          <div className="py-4">
            <h2 className="text-primary">Connect with me</h2>
            <div className="flex flex-wrap justify-evenly gap-4 mt-4">
              {socialLinks?.map((item, index) => (
                <Button
                  key={index}
                  as={Link}
                  color="primary"
                  href={item?.link}
                  target="_blank"
                  variant="faded"
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
        </div>
      </section>
    </main>
  );
}
