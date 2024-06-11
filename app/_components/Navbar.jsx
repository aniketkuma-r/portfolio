"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const navOptions = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function NavbarComponent({ resumeUrl }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-gustarydelight text-primary text-3xl">
            Aniket Kumar
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navOptions.map((item, index) => (
          <NavbarItem key={index} isActive={pathname.startsWith(item.link)}>
            <Link
              color={pathname.startsWith(item.link) ? "primary" : "foreground"}
              href={item.link}
              className="uppercase"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href={resumeUrl}
            target="_blank"
            variant="flat"
            className="border border-primary border-opacity-40"
          >
            Resume
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navOptions.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={pathname.startsWith(item.link) ? "primary" : "foreground"}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
